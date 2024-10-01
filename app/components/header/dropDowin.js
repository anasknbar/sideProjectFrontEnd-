import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { AuthContext } from "@/app/context/authContext";
const Dropdown = () => {
  const { tokens, logout } = useContext(AuthContext);
  // State to manage the visibility of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Ref to reference the dropdown element
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev); // Flip the current state
  };

  // Function to close the dropdown if clicking outside of it
  const closeDropdown = (event) => {
    // Check if the click happened outside the dropdown and the button
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown
    }
  };

  // useEffect to manage the click event listener for closing the dropdown
  useEffect(() => {
    // Attach the event listener to the window
    window.addEventListener("click", closeDropdown);
    return () => {
      // Cleanup: Remove the event listener on component unmount
      window.removeEventListener("click", closeDropdown);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  return (
    <div ref={dropdownRef} className="p-2 relative inline-block text-left">
      <svg
        onClick={toggleDropdown}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6  hover:bg-gray-200 dark:hover:bg-gray-200 rounded-lg align-center"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      {/* Dropdown menu: rendered only if isOpen is true */}
      {isOpen && (
        <div className="z-10 absolute right-0 mt-4 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-2">
            <a onClick={logout} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer">Sign out</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
