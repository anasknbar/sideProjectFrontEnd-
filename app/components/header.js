'use client'
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import UserHeader from "./userHeader";
import GuestHeader from "./guestHeader";
export default function Header() {
    const {tokens,logout} = useContext(AuthContext);
    const [showLoginForm,setShowLoginForm] = useState(false)

    const handleShowingLoginForm = ()=>{
      setShowLoginForm(true)
      console.log(showLoginForm)
    }
    const handleClosingLoginForm = ()=>{
      setShowLoginForm(false)
    }

  return (
    <>
      {!tokens?(<GuestHeader/>):(<UserHeader/>)}
      
    </>
  );
}
