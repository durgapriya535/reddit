import React from 'react';
import Buttons from './Buttons';

function Post() {
  return (
    <div className=" absolute p-4 top-0 left-0 bg-white rounded-lg shadow-md max-w-xl mx-auto mt-6">
      {/* Main Thread Line */}
      <div
        className="absolute top-[48px] left-[28px] bottom-[48px] w-[1px] bg-gray-300"
        aria-hidden="true"
      ></div>
      
      {/* Post Content */}
      <div className="flex items-center space-x-2 mb-2">
        <img
          className="w-8 h-8 rounded-full border border-gray-300 shadow-sm " 
          src="https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg"
          alt="Mango Juice"
        />
        <div className="flex justify center items-center space-x-2 mb-2">
          <p className=" text-black text-xs font-bold">Mango__Juice</p> 
           <p className="text-gray-500 items-center text-xs">9 h ago</p>

        </div>
      </div>

      {/* Post Description */}
      <p className="mb-4 ml-10 text-sm text-gray-700">
        Marketing. Digital marketing, social media strategy, branding strategy, website management, CRM data management.
      </p>

      {/* Buttons Component */}
      <div className="mt-4">
        <Buttons />
      </div>
    </div>
  )
}

export default Post;

