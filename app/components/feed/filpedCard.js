import { useState } from "react";

const ToggleCard = ({ title, prompt, response }) => {
  const [isFront, setIsFront] = useState(true);
  const [showToggleCard, setShowToggleCard] = useState(false);

  const handleToggle = () => {
    setIsFront(!isFront);
  };

  const openToggleCard = () => {
    setShowToggleCard(true);
  };
  const closeToggleCard = () => {
    setShowToggleCard(false);
  };

  const handleShowToggleCard = () => {
    console.log("clciked");
  };

  return (
    <>
      <div
        className="relative bg-red-200 w-auto h-64 border rounded-lg shadow-lg relative"
        onClick={handleShowToggleCard}
      >
        {/* Card Content */}
        <div className="w-full h-full overflow-auto p-8">
          {isFront ? (
            <div className="front-content flex flex-col">
              {/* Front Content */}
              {prompt}
            </div>
          ) : (
            <div className="back-content flex flex-col">
              {/* Back Content */}
              {response}
            </div>
          )}
        </div>

        {/* Toggle Button */}
        <div className="absolute p-2 top-0 right-8 flex justify-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 hover:text-green-700 cursor-pointer"
            onClick={handleToggle}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3"
            />
          </svg>
        </div>
        {/* full screen button */}
        <div
          onClick={handleToggle}
          className="absolute p-2 top-0 right-0 flex justify-center "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5 hover:text-green-700 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ToggleCard;
