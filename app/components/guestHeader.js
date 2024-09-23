"use client";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import ThemeToggle from "./themeToggle";
export default function GuestHeader() {
  const { tokens, logout } = useContext(AuthContext);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleShowingLoginForm = () => {
    setShowLoginForm(true);
    console.log(showLoginForm);
  };
  const handleClosingLoginForm = () => {
    setShowLoginForm(false);
  };

  const handleShowingSignUpForm = () => {
    setShowSignUpForm(true);
  };
  const handleClosingSignUpForm = () => {
    setShowSignUpForm(false);
  };

  return (
    <>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/color-pixels/32/octopus.png"
              alt="octopus"
            />
          </a>
          <div class="flex md:order-1">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-2"
            id="navbar-search"
          >
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={handleShowingLoginForm}
                  class="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-black md:p-0 md:dark:text-blue-500 cursor-pointer // hover:text-blue-700"
                  aria-current="page"
                >
                  Sign In
                </a>
              </li>
              <li>
                <a
                  onClick={handleShowingSignUpForm}
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {/* <ThemeToggle/> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showLoginForm && <LoginForm onClose={handleClosingLoginForm} />}
      {showSignUpForm && <RegisterForm onClose={handleClosingSignUpForm} />}
    </>
  );
}

// {/* <nav className="bg-white border-b py-3">
// <div className="container mx-auto flex items-center justify-between">
//   {/* <!-- Logo Section --> */}
//   <div className="text-gray-800 text-xl font-semibold">
//     <a href="/" className="hover:text-blue-600 transition">
//       Logo
//     </a>
//   </div>

//   {/* <!-- Search Bar --> */}
//   <div className="flex-1 ml-48 ">
//     <div className="relative w-3/5">
//       <input
//         type="text"
//         className=" w-full bg-gray-100 py-2 pl-8 pl-4 pr-10 text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
//         placeholder="Search..."
//       />
//       <div className="absolute inset-y-0 flex items-center pr-3">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="absolute size-5 ml-2 text-gray-500"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//           />
//         </svg>
//       </div>
//     </div>
//   </div>

//   {/* <!-- Login/more Buttons --> */}
//   <div className="flex space-x-4 items-center">
//     <a
//       onClick={handleShowingLoginForm}
//       className="bg-amber-400 text-sm text-white py-2 px-4 rounded-full hover:bg-amber-300 transition cursor-pointer"
//     >
//       Sign In
//     </a>
//     <a
//       onClick={handleShowingSignUpForm}
//       className="bg-blue-600 text-sm text-white py-2 px-4 rounded-full hover:bg-blue-500 transition cursor-pointer"
//     >
//       Get Started
//     </a>

//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className="size-6 align-middle hover:bg-gray-200 rounded-lg cursor-pointer"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
//       />
//     </svg>
//   </div>
// </div>
// </nav> */}
