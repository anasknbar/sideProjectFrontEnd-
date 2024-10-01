import React, { useEffect, useState } from "react";
import { FaHeart, FaComment, FaArrowUp } from "react-icons/fa";
import conversationResources from "../../hooks/conversationResources";
import ToggleCard from "./filpedCard";
import MarkdownIt from "markdown-it";

const Feed = ({ avatar }) => {
  const { fetchConversation, loading, error } = conversationResources();
  const [conversations, setConversations] = useState([]); // Initialize as an array

  useEffect(() => {
    if (fetchConversation) {
      // Ensure fetchConversation is an array or provide a fallback to an empty array
      setConversations(
        Array.isArray(fetchConversation)
          ? fetchConversation
          : [fetchConversation]
      );
      console.log("Fetched Conversation:", fetchConversation);
    }
  }, [fetchConversation]); // Re-run when fetchConversation data updates

  if (loading) {
    return <div>Loading...</div>; // Show loading state while fetching
  }

  if (error) {
    return <div>Error loading conversation...</div>; // Show error message if fetching fails
  }

  if (conversations.length === 0) {
    return <div>No conversation found...</div>; // Handle case when there's no data
  }

  const markdownToHtml = (markdownText) => {
    const md = new MarkdownIt();
    const htmlContent = md.render(markdownText);

    return (
      <div
        className="break-all break-words w-full overflow-hidden overflow-auto"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    );
  };

  return (
    <>
      {conversations.map((conversation, index) => (
        <div
          key={index}
          className="bg-white p-8 overflow-auto border-b  border-r border-gray relative "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 absolute right-4 rounded-full hover:bg-gray-200 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>



          {/* User Info and Time */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <img
                src={avatar} // Ensure user.avatar exists
                alt={`${conversation.user?.name || "user"}'s avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-800 overflow-auto">
                  {conversation.author_username}
                </h4>
                <p className="text-sm text-gray-500 overflow-auto">
                  {conversation.created_at}
                </p>
              </div>
            </div>
          </div>
          {/* title */}
          <div>
            <h1>{conversation.title}</h1>
          </div>
          {/* Content */}
          <div className="text-gray-800 mb-4  p-4 rounded-lg break-words break-all">
            <div className="break-all overflow-y-auto ">
              {/* {conversation.prompt ? markdownToHtml(conversation.prompt) : null} */}
              <ToggleCard
                title={conversation.title}
                prompt={
                  conversation.prompt
                    ? markdownToHtml(conversation.prompt)
                    : null
                }
                response={
                  conversation.ai_response
                    ? markdownToHtml(conversation.ai_response)
                    : null
                }
              />
            </div>
          </div>
          {/* Post Actions */}
          <div className="flex items-center gap-4 text-gray-600">
            {/* Likes */}
            <button className="flex items-center space-x-1 hover:text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>

              <span>{conversation.likes || 0}</span>
            </button>

            {/* Comments */}
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>

              <span>{conversation.comments?.length || 0}</span>
            </button>

            {/* Upvotes */}
            <button className="flex items-center space-x-1 hover:text-green-500">
              <FaArrowUp />
              <span>{conversation.upvotes || 0} Upvotes</span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Feed;
