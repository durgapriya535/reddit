import React from 'react';
import Buttons from './Buttons';

const HardCodedReplies = () => {
  // Array of reply data
  const data = [
    {
      image: "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
      name: "Mango__Juice",
      time: "9 h ago",
      message: "Marketing. Digital marketing, social media strategy, branding strategy, website management, CRM data management."
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRXxfn1j1vKFy8yJeBGl2AS6Dcah-lKgHofg&s",
      name: "Apple__Pie",
      time: "7 h ago",
      message: "Exploring various marketing strategies and their impact on the overall business growth."
    },
    {
      image: "https://images.pexels.com/photos/676629/pexels-photo-676629.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      name: "Grape__Vine",
      time: "5 h ago",
      message: "Understanding CRM and the benefits of data management for customer retention."
    }
  ];

  return (
    <div className="relative ml-6">
      {/* Main Vertical Line */}
      <div
        className="absolute top-[48px] left-[28px] bottom-[48px] w-[1px] bg-gray-300"
        aria-hidden="true"
      ></div>

      {data.map((reply, index) => (
        <div key={index} className="mb-6 relative">
          {/* Small Curved Line */}
          <div
            className={`absolute top-2 left-[-11px] w-[16px] h-[16px] border-l-[1px] border-b-[1px] border-gray-300 rounded-bl-full`}
            aria-hidden="true"
          ></div>
          
          {/* Reply Content */}
          <div className="ml-2 flex items-center space-x-2 mb-2">
            <img
              className="w-8 h-8 rounded-full border border-gray-300 shadow-sm"
              src={reply.image}
              alt={reply.name}
            />
            <div className="flex flex-col justify-center items-start mb-2">
              <p className="text-black text-xs font-bold">{reply.name}</p>
              <p className="text-gray-500 items-center text-xs">{reply.time}</p>
            </div>
          </div>

          {/* Post Description */}
          <p className="mb-4 ml-10 text-sm text-gray-700">
            {reply.message}
          </p>

          {/* Buttons Component */}
          <div className="mt-4 ml-4">
            <Buttons />
          </div>
        </div>
      ))}
      <div
            className={`absolute top-2 left-[-11px] w-[16px] h-[16px] border-l-[1px] border-b-[1px] border-gray-300 rounded-bl-full`}
            aria-hidden="true"
          ></div>

      <p className="text-black text-sm">18+ more replies</p>
    </div>
  );
};

export default HardCodedReplies;
