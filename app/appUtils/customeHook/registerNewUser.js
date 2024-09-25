import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import useSWR from "swr";
import axios from "axios";

export default function useResource() {
  const apiEndPoint = "http://127.0.0.1:8000/api/auth/registration/";
  const { tokens } = useContext(AuthContext);
  const { data, err, mutate } = useSWR([apiEndPoint, tokens], fetchResource);

  // Utility function for Axios config
  function config(isAuthRequired = true) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (isAuthRequired && tokens && tokens.access) {
      headers["Authorization"] = `Bearer ${tokens.access}`;
    }

    return { headers };
  }



  // Create resource using Axios
  async function createResource(resourceData) {
    
    // no need to check the tokens for the newly registered users
    const url = 'http://127.0.0.1:8000/api/auth/registration/'
    try {
      await axios.post(url, resourceData, config());
      mutate(); // Refresh data after creation
    } catch (err) {
      console.error("Error creating resource:", err); // Log the error
      
      if (err.response) {
        console.log("Error response data:", Object.values(err.response.data)[0] ); // Log detailed error response
      }
    }
  }

  async function changePassword(){

  }

  // Fetch resource using Axios
  async function fetchResource() {
    // if (!tokens) return;
    // try {
    //   const response = await axios.get(apiEndPoint, config(true));
    //   return response.data;
    // } catch (err) {
    //   console.log(`Error fetching data: ${err}`);
    // }
  }

  // // Delete resource using Axios
  // async function deleteResource(id) {
  //   if (!tokens) return;
  //   try {
  //     const url = `${apiEndPoint}${id}`;
  //     await axios.delete(url, config());
  //     mutate(); // Refresh data after deletion
  //   } catch (err) {
  //     console.log(`Error deleting resource: ${err}`);
  //   }
  // }
  // // Update resource using Axios
  // async function updateResource(resourceId, resourceData) {
  //   if (!tokens) return;
  //   try {
  //     const url = `${apiEndPoint}${resourceId}`;
  //     await axios.put(url, resourceData, config());
  //     mutate(); // Refresh data after update
  //   } catch (err) {
  //     console.log(`Error updating resource: ${err}`);
  //   }
  // }

  // // Retrieve resource by ID using Axios
  // async function retrieveResource(id) {
  //   if (!tokens) return;
  //   try {
  //     const url = `${apiEndPoint}${id}`;
  //     const response = await axios.get(url, config());
  //     return response.data;
  //   } catch (err) {
  //     console.log(`Error retrieving resource: ${err}`);
  //   }
  // }

  return {
    fetchedData: data,
    // deleteData: deleteResource,
    createNewUser: createResource,
    // updateData: updateResource,
    // retrieveData: retrieveResource,
    loading: tokens && !err && !data,
    error: err,
  };
}
