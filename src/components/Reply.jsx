

import { useState } from 'react';

const Reply = () => {
  const [reply, setReply] = useState("");
  const [replyInput, setReplyInput] = useState(true);
  const [replies, setReplies] = useState([]);

  function handleReply() {
    setReplies([...replies, reply]);
    setReply("");
    setReplyInput(false);
  }

  function handleChange(e) {
    setReply(e.target.value);
  }

  return (
    <div className="mt-4 bg-gray-50 p-4 rounded-lg shadow-inner">
      {replyInput && (
        <div className="flex text-black items-center space-x-2 mb-2">
          <input 
            type="text" 
            className="w-full p-2 border bg-gray-100 border-gray-300 rounded-lg" 
            placeholder="Type your reply" 
            onChange={handleChange} 
            value={reply} 
          />
          <button 
            className="bg-gray-500  hover-bg-gray-900 text-white text-sm px-4 py-2 rounded-lg whitespace-nowrap"
            onClick={handleReply}
          >
            Post Reply
          </button>
        </div>
      )}
      <ul className="mt-2 text-black text-sm space-y-2">
        {replies.map((replyText, id) => (
          <li key={id} className="p-2 bg-white rounded-lg shadow">
            {replyText}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reply;

