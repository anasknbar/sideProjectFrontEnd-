'use client'
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import GuestHeader from "./guestHeader";
import UserHeader from "./userHeader";
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
