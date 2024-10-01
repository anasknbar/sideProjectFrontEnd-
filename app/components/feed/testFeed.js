import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Post = ({ user, content, time, initialLikes, initialComments, onLike, onComment, onUpvote }) => {
  const [likes, setLikes] = useState(initialLikes || 0);
  const [comments, setComments] = useState(initialComments || 0);
  const [upvotes, setUpvotes] = useState(0); // Example for future features

  // Handlers for interactions
  const handleLike = () => {
    setLikes(likes + 1);
    if (onLike) onLike(likes + 1);
  };

  const handleComment = () => {
    setComments(comments + 1);
    if (onComment) onComment(comments + 1);
  };

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
    if (onUpvote) onUpvote(upvotes + 1);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg p-6 mb-6 max-w-3xl mx-auto"
    >
      {/* Header - User Info and Time */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="text-gray-800 font-semibold">{user.name}</h3>
            <p className="text-gray-500 text-sm">{time}</p>
          </div>
        </div>
        {/* Optional Menu or Options */}
        <button className="text-gray-400 hover:text-gray-600">
          &#x22EE;
        </button>
      </div>

      {/* Post Content */}
      <div className="mb-4">
        <p className="text-gray-700 break-words overflow-hidden">{content}</p>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-4 "></div>

      {/* Interaction Section */}
      <div className="flex justify-between items-center">
        {/* Likes */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 text-red-500 hover:text-red-600 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12 4.318C10.438-1.2 3.732-.7 3.732 5.944c0 2.547 2.732 4.764 6.268 7.53 3.536-2.767 6.268-4.983 6.268-7.53 0-6.644-6.706-7.145-8.268-1.626z"
              ></path>
            </svg>
            <span>{likes}</span>
          </button>
          <span className="text-gray-600">{likes} Likes</span>
        </div>

        {/* Comments */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleComment}
            className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 4A2.5 2.5 0 015 1.5h14A2.5 2.5 0 0121.5 4v10A2.5 2.5 0 0119 16.5h-4.586l-3.707 3.707a1 1 0 01-1.414 0L6.5 16.5H5A2.5 2.5 0 012.5 14V4z"
              ></path>
            </svg>
            <span>{comments}</span>
          </button>
          <span className="text-gray-600">{comments} Comments</span>
        </div>

        {/* Upvotes */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handleUpvote}
            className="flex items-center space-x-1 text-green-500 hover:text-green-600 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2l4.586 4.586a2 2 0 010 2.828l-6.172 6.172a2 2 0 01-2.828 0L2 12l4.586-4.586a2 2 0 012.828 0L12 2z"
              ></path>
            </svg>
            <span>{upvotes}</span>
          </button>
          <span className="text-gray-600">{upvotes} Upvotes</span>
        </div>
      </div>

      {/* Customizable area for future buttons */}
      <div className="mt-4">
        <button className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-blue-100">
          Custom Action
        </button>
      </div>
    </div>
  );
};

export default Post;
