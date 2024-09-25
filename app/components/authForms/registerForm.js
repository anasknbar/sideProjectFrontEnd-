"use client";
import useResource from "../../customeHook/registerNewUser";
export default function RegisterForm({ onClose }) {
  const { createNewUser } = useResource();
  const handleRegisterNewUser = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password1 = formData.get("password1");
    const password2 = formData.get("password2");

    
      // Attempt to create a new user
      const response = await createNewUser({ username, email, password1, password2 });

      // Optionally close the modal or show success message
      onClose();
    
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 absolute top-2 right-2 rounded-full bg-gray-200 cursor-pointer"
            onClick={onClose}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Sign-Up
          </h2>

          {/* <!-- Email and Password Form --> */}

          <form onSubmit={handleRegisterNewUser}>
            <div className="mb-4">
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Username"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                name="password1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Password"
                required
              />
            </div>

            <div className="">
              <input
                type="password"
                name="password2"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Confirm password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mt-6"
            >
              Sign up
            </button>
          </form>

          {/* <!-- Divider --> */}
          <div className="flex items-center justify-center my-6">
            <span className="border-b border-gray-300 w-full"></span>
            <span className="px-3 text-gray-500">or</span>
            <span className="border-b border-gray-300 w-full"></span>
          </div>

          {/* <!-- Google Login --> */}
          <div className="flex justify-center">
            <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
              <svg
                className="h-5 w-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.08 0 5.8 1.17 7.91 3.08L39.9 6.66C35.97 2.97 30.33 0 24 0 14.84 0 7.25 5.27 3.34 12.97l8.13 6.32C13.12 13.41 18.19 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.04 24.56c0-1.68-.13-2.89-.4-4.17H24v7.86h12.47c-.5 2.57-1.92 4.75-3.96 6.2l6.07 4.7c3.54-3.28 5.46-8.11 5.46-14.6z"
                />
                <path
                  fill="#FBBC05"
                  d="M11.47 28.52c-.66-1.95-1.04-4.03-1.04-6.18s.38-4.23 1.04-6.18L3.34 9.84C1.21 13.61 0 18.14 0 24c0 5.86 1.21 10.39 3.34 14.16l8.13-6.32z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.33 0 11.64-2.11 15.53-5.75l-6.07-4.7c-2.09 1.46-4.73 2.33-7.46 2.33-5.81 0-10.68-3.91-12.46-9.33l-8.13 6.32C7.25 42.73 14.84 48 24 48z"
                />
                <path fill="none" d="M0 0h48v48H0z" />
              </svg>
              Sign up with Google
            </button>
          </div>

          {/* <!-- Forgot Password & Sign-Up --> */}
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already a memeber?{" "}
              <a className="text-blue-600 font-semibold hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
