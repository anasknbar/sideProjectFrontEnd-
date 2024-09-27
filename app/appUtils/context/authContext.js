'use client'; // Ensures that the file is treated as client-side code in Next.js

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // this Hook is used to redirect users to specific page.

// 1. Create the context
// `AuthContext` will be used to provide authentication state (like tokens) across the app.
export const AuthContext = createContext();

// 2. Create the context wrapper component
// `AuthWrapper` will wrap your entire app or a part of it, giving access to the authentication state via `AuthContext.Provider`.
export default function AuthWrapper({ children }) {
  // Add a loading state
  // `loading` will control whether the authentication system is ready. It starts as true.
  const [loading, setLoading] = useState(true);
  // create an instance of the userRouter() to use for redirections 
  const router = useRouter()
  // Create the global login state
  // `globalLoginState` will store tokens and login/logout functions.
  const [globalLoginState, setGlobalLoginState] = useState(() => {
    if (typeof window !== "undefined") {
      // Get stored tokens from localStorage if available
      const storedTokens = localStorage.getItem('tokens');
      return {
        tokens: storedTokens ? JSON.parse(storedTokens) : null, // Parse stored tokens or set to null if none exist
        login: () => {},  // Placeholder login function (will be updated later)
        logout: () => {}, // Placeholder logout function (will be updated later)
        refreshAccessToken: () => {}, // Placeholder refresh function for refreshing tokens (will be updated later)
      };
    }
    // If `window` is undefined (in SSR), return default state without tokens
    return {
      tokens: null,
      login: () => {},
      logout: () => {},
      refreshAccessToken: () => {},
    };
  });

  // 3. Check localStorage and update loading state once done
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get tokens from localStorage if they exist
      const storedTokens = localStorage.getItem('tokens');
      // Update globalLoginState with tokens (if found) and set `loading` to false
      setGlobalLoginState((prevState) => ({
        ...prevState,
        tokens: storedTokens ? JSON.parse(storedTokens) : null,
      }));
      setLoading(false); // We're done loading
    }
  }, []);

  // 4. Define the login function
  async function login(userInfo) {
    try {
      const url = 'http://127.0.0.1:8000/api/token/'; // Your API URL for login (token generation)
      const res = await axios.post(url, userInfo); // Make a POST request to get the tokens
      const tokens = res.data; // Get the tokens from the response
      console.log(tokens);

      // Save tokens to state and localStorage
      setGlobalLoginState((prevState) => ({
        ...prevState,
        tokens: tokens, // Set the tokens in state
        login: login, // Set the login function in state (for future reference)
        logout: logout, // Set the logout function in state
        refreshAccessToken: refreshAccessToken, // Set refresh function in state
      }));

      if (typeof window !== "undefined") {
        // Save tokens to localStorage for persistence
        localStorage.setItem("tokens", JSON.stringify(tokens));
      }
    } catch (error) {
      // console.error("Login failed", error); // Handle login error
    }
  }

  // 5. Define the logout function
  function logout() {
    
    setGlobalLoginState((prevState) => ({
      ...prevState,
      tokens: null, // Clear tokens in the state
    }));

    if (typeof window !== "undefined") {
      // Remove tokens from localStorage
      localStorage.removeItem("tokens");
    }
    // redirect users to the index page when sign-out 
    router.push('/');
  }

  // Define the refresh token function
  // This function is used to get a new access token using the refresh token
  async function refreshAccessToken() {
    try {
      const refreshToken = globalLoginState.tokens?.refresh; // Get the refresh token from globalLoginState
      if (!refreshToken) throw new Error("No refresh token available");

      const url = 'http://127.0.0.1:8000/api/token/refresh/'; // Your API URL for token refresh
      const res = await axios.post(url, { refresh: refreshToken }); // Make a POST request with the refresh token
      const newAccessToken = res.data.access; // Extract the new access token

      // Update state with the new access token
      setGlobalLoginState((prevState) => ({
        ...prevState,
        tokens: { ...prevState.tokens, access: newAccessToken }, // Update only the access token
      }));

      if (typeof window !== "undefined") {
        const updatedTokens = { ...globalLoginState.tokens, access: newAccessToken };
        // Update tokens in localStorage with the new access token
        localStorage.setItem("tokens", JSON.stringify(updatedTokens));
      }

      return newAccessToken; // Return the new access token
    } catch (error) {
      console.error("Failed to refresh access token", error);
      logout(); // If refresh fails, log out the user
      return null;
    }
  }

  // 6. Ensure login/logout functions are updated in the state
  // This ensures that the login/logout/refresh functions are kept up-to-date in the global state
  useEffect(() => {
    setGlobalLoginState((prevState) => ({
      ...prevState,
      login: login,
      logout: logout,
      refreshAccessToken: refreshAccessToken,
    }));
  }, []);

  // 7. Display a loading spinner or blank screen while loading
  // While the component is checking localStorage, display a loading screen
  if (loading) {
    return <div>Loading...</div>; // Replace with a loading spinner or other UI if preferred
  }

  // Provide the global login state (tokens, login, logout, etc.) to all child components
  return (
    <AuthContext.Provider value={globalLoginState}>
      {children}
    </AuthContext.Provider>
  );
}
