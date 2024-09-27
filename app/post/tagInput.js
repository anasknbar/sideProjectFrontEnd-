"use client";
import React, { useState } from "react";

export default function TagInput() {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
   // Function to add a tag
  const addTag = (e) => {
    e.preventDefault();
    const tag = inputValue.trim();

    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputValue(""); // Clear input after adding the tag
    }
  };
  // Function to remove a tag
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  // Handle input value change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // Handle key press (Enter or Space to add a tag)
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      addTag(e);
    }
  };


  return (
    <>
      <div className="mb-6 w-1/2 ">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white tracking-wide">
          Tags
        </label>

        {/* Input for adding tags */}
        <div className="h-12 mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 p-2.5 flex items-center gap-2 flex-wrap">
          {/* Render the tags inside the input field */}
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {tag}
              <button
                type="button"
                className="text-red-500 hover:text-red-700  focus:outline-none"
                onClick={() => removeTag(index)}
              >
                &times;
              </button>
            </span>
          ))}

          <input
            type="text"
            name="tags"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Add a tag..."
            className="bg-transparent h-7 border-0 rounded-full focus:outline-none flex-1"
          />
        </div>

        <p className="text-xs text-gray-500 mt-2">
          Press Enter or Space to add a tag.
        </p>
      </div>
    </>
  );
}
