// import { useState } from "react";
// import Reply from "./Reply"; // Import the Reply component
// import Modal from "./Modal";
// import HardCodedReplies from "./HardCodedReplies";

// const Buttons = () => {
//   const [vote, setVote] = useState(0);
//   const [Award, setAward] = useState(false);
//   const [replyStatus, setReplyStatus] = useState(false);
//   const [showShareDialog, setShowShareDialog] = useState(false);
//   const [showDotsDialog, setShowDotsDialog] = useState(false);
//   const [allReplies, setAllReplies] = useState(false);

//   function handleUpVote() {
//     setVote(vote + 1);
//     setAward(false);
//   }

//   function handleDownVote() {
//     if (vote > 0) {
//       setVote(vote - 1);
//       setAward(false);
//     }
//   }

//   function handleReplyStatus() {
//     setReplyStatus(!replyStatus);
//     setAward(false);
//   }

//   function handleAward() {
//     setAward(!Award);
//   }

//   function handleShare() {
//     setShowShareDialog(!showShareDialog);
//     setAward(false);
//   }

//   function handleDots() {
//     setShowDotsDialog(!showDotsDialog);
//     setAward(false);
//   }
//   function handleAllReplies(){
//     setAllReplies(!allReplies);
//   }

//   return (
//     <div className="flex items-center space-x-4 mb-4 ml-2">
//     <button 
//     className = "flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//     onClick = {handleAllReplies}>
//     { allReplies ?
//     <svg
//   fill="currentColor" 
//   height="16"
//    viewBox="0 0 20 20" 
//    width="16" 
//    xmlns="http://www.w3.org/2000/svg">
//  <path d="M14 10.625H6v-1.25h8v1.25ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z"></path>

//  </svg>
//  :
//  <svg
//      fill="currentColor" 
//     height="16" 
//     viewBox="0 0 20 20" width="16" 
//     xmlns="http://www.w3.org/2000/svg">
//  <path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>
//  </svg>}
//     </button>
//       <button
//         onClick={handleUpVote}
//         className="flex items-center space-x-1 rounded bg-white hover:bg-gray-200 focus:outline-none"
//       >
//         <svg
//           height="16"
//           viewBox="0 0 20 20"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Upvote"
//         >
//           <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
//         </svg>
//       </button>
//       <span className="text-black text-sm">{vote}</span>
//       <button
//         onClick={handleDownVote}
//         className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//       >
//         <svg
//           height="16"
//           viewBox="0 0 20 20"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Downvote"
//         >
//           <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
//         </svg>
//       </button>
//       <button
//         onClick={handleReplyStatus}
//         className="flex items-center space-x-1 mr-4 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//       >
//         <svg
//           height="16"
//           viewBox="0 0 20 20"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Reply"
//         >
//           <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
//         </svg>
//          <span className = "text-xs font-semibold">Reply</span>
//       </button>
//       <button
//         onClick={handleAward}
//         className="flex items-center space-x-1 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//       >
//         <svg
//           aria-hidden="true"
//           height="16"
//           viewBox="0 0 20 20"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Awards"
//         >
//           <path d="m19.435 15.839-3.003-4.5A7.495 7.495 0 1 0 2.5 7.498c0 1.354.37 2.68 1.069 3.84L.573 15.825a.85.85 0 0 0 .744 1.34l2.565-.104.878 2.359a.848.848 0 0 0 .672.57.891.891 0 0 0 .848-.378l3.1-4.645c.41.034.83.034 1.24 0l3.109 4.658a.887.887 0 0 0 .841.365c.3-.043.563-.26.662-.546l.886-2.384 2.544.103a.852.852 0 0 0 .773-1.325Zm-13.767 2.44c-.243-.653-.412-1.915-1.03-2.336-.63-.429-1.898-.085-2.602-.057l2.315-3.468a7.502 7.502 0 0 0 3.685 2.312l-2.368 3.548ZM3.75 7.498A6.25 6.25 0 1 1 10 13.75 6.257 6.257 0 0 1 3.75 7.5Zm11.62 8.432c-.625.412-.796 1.697-1.037 2.348l-2.37-3.549a7.502 7.502 0 0 0 3.686-2.312l2.314 3.468c-.7-.029-1.962-.37-2.593.045Z"></path>
//         </svg>
//         <span className="text-xs font-semibold">Awards</span>
//       </button>
//       <button
//         onClick={handleShare}
//         className="flex items-center space-x-1 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//       >
//         <svg
//           aria-hidden="true"
//           className="icon-share"
//           height="16"
//           viewBox="0 0 20 20"
//           width="16"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="Share"
//         >
//           <path d="m18.8 8.286-6.466-7.064a.759.759 0 0 0-1.295.537v3.277C5.623 5.365 1 9.918 1 15.082v2.907h1.274C2.516 15 5.81 12.62 9.834 12.62h1.205v3.226a.757.757 0 0 0 1.315.515l6.422-7.021A.756.756 0 0 0 19 8.8a.736.736 0 0 0-.2-.514Zm-6.508 6.3V12a.625.625 0 0 0-.625-.625H9.834A9.436 9.436 0 0 0 2.26 14.7c.228-4.536 4.525-8.435 9.4-8.435a.626.626 0 0 0 .625-.625V3.023L17.576 8.8l-5.284 5.786Zm5.586-6.107a.176.176 0 0 0-.023.024.171.171 0 0 1 .02-.028l.003.004Zm-.011.642a.53.53 0 0 0-.003-.004l.003.004Z"></path>
//         </svg>
//         <span className="text-xs font-semibold">Share</span>
//       </button>
//       <button
//         onClick={handleDots}
//         className="flex items-center space-x-1 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
//       >
//         <svg
//           height="12"
//           viewBox="0 0 20 20"
//           width="12"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-label="More"
//         >
//           <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
//         </svg>
//       </button>
//       {replyStatus && <Reply />}
//       {Award && <Modal awardShowModal={Award} />}
//       {allReplies && <HardCodedReplies/>}
//       {showShareDialog && (
//         <dialog open>
//           <ul>
//             <li>Copy</li>
//             <li>Embed</li>
//           </ul>
//           <button onClick={() => setShowShareDialog(false)}>Close</button>
//         </dialog>
//       )}
//       {showDotsDialog && (
//         <dialog open>
//           <ul>Report</ul>
//           <button onClick={() => setShowDotsDialog(false)}>Close</button>
//         </dialog>
//       )}
//     </div>
//   );
// };

// export default Buttons;
import { useState } from "react";
import Reply from "./Reply"; // Import the Reply component
import Modal from "./Modal";
import HardCodedReplies from "./HardCodedReplies";

const Buttons = () => {
  const [vote, setVote] = useState(0);
  const [Award, setAward] = useState(false);
  const [replyStatus, setReplyStatus] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const [showDotsDialog, setShowDotsDialog] = useState(false);
  const [allReplies, setAllReplies] = useState(false);

  function handleUpVote() {
    setVote(vote + 1);
    setAward(false);
  }

  function handleDownVote() {
    if (vote > 0) {
      setVote(vote - 1);
      setAward(false);
    }
  }

  function handleReplyStatus() {
    setReplyStatus(!replyStatus);
    setAward(false);
  }

  function handleAward() {
    setAward(!Award);
  }

  function handleShare() {
    setShowShareDialog(!showShareDialog);
    setAward(false);
  }

  function handleDots() {
    setShowDotsDialog(!showDotsDialog);
    setAward(false);
  }
  function handleAllReplies(){
    setAllReplies(!allReplies);
  }

  return (
    <div>
      <div className="flex items-center ml-1 space-x-4 mb-4">
        <button 
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
          onClick={handleAllReplies}
        >
          { allReplies ?
            <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 10.625H6v-1.25h8v1.25ZM20 10a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-1.25 0A8.75 8.75 0 1 1 10 1.25 8.76 8.76 0 0 1 18.75 10Z"></path>
            </svg>
            :
            <svg fill="currentColor" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.625 9.375H14v1.25h-3.375V14h-1.25v-3.375H6v-1.25h3.375V6h1.25v3.375ZM20 10A10 10 0 1 1 10 0a10.011 10.011 0 0 1 10 10Zm-1.25 0A8.75 8.75 0 1 0 10 18.75 8.76 8.76 0 0 0 18.75 10Z"></path>
            </svg>
          }
        </button>
        <button
          onClick={handleUpVote}
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none"
        >
          <svg height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg" aria-label="Upvote">
            <path d="M12.877 19H7.123A1.125 1.125 0 0 1 6 17.877V11H2.126a1.114 1.114 0 0 1-1.007-.7 1.249 1.249 0 0 1 .171-1.343L9.166.368a1.128 1.128 0 0 1 1.668.004l7.872 8.581a1.25 1.25 0 0 1 .176 1.348 1.113 1.113 0 0 1-1.005.7H14v6.877A1.125 1.125 0 0 1 12.877 19ZM7.25 17.75h5.5v-8h4.934L10 1.31 2.258 9.75H7.25v8ZM2.227 9.784l-.012.016c.01-.006.014-.01.012-.016Z"></path>
          </svg>
        </button>
        <span className="text-black text-sm">{vote}</span>
        <button
          onClick={handleDownVote}
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
        >
          <svg height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg" aria-label="Downvote">
            <path d="M10 20a1.122 1.122 0 0 1-.834-.372l-7.872-8.581A1.251 1.251 0 0 1 1.118 9.7 1.114 1.114 0 0 1 2.123 9H6V2.123A1.125 1.125 0 0 1 7.123 1h5.754A1.125 1.125 0 0 1 14 2.123V9h3.874a1.114 1.114 0 0 1 1.007.7 1.25 1.25 0 0 1-.171 1.345l-7.876 8.589A1.128 1.128 0 0 1 10 20Zm-7.684-9.75L10 18.69l7.741-8.44H12.75v-8h-5.5v8H2.316Zm15.469-.05c-.01 0-.014.007-.012.013l.012-.013Z"></path>
          </svg>
        </button>
        <button
          onClick={handleReplyStatus}
          className="flex items-center space-x-2 mr-4 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
        >
          <svg height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg" aria-label="Reply">
            <path d="M7.725 19.872a.718.718 0 0 1-.607-.328.725.725 0 0 1-.118-.397V16H3.625A2.63 2.63 0 0 1 1 13.375v-9.75A2.629 2.629 0 0 1 3.625 1h12.75A2.63 2.63 0 0 1 19 3.625v9.75A2.63 2.63 0 0 1 16.375 16h-4.161l-4 3.681a.725.725 0 0 1-.489.191ZM3.625 2.25A1.377 1.377 0 0 0 2.25 3.625v9.75a1.377 1.377 0 0 0 1.375 1.375h4a.625.625 0 0 1 .625.625v2.575l3.3-3.035a.628.628 0 0 1 .424-.165h4.4a1.377 1.377 0 0 0 1.375-1.375v-9.75a1.377 1.377 0 0 0-1.374-1.375H3.625Z"></path>
          </svg>
          <span className="text-xs font-semibold">Reply</span>
        </button>
        <button
          onClick={handleAward}
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
        >
          <svg aria-hidden="true" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg" aria-label="Awards">
            <path d="m19.435 15.839-3.003-4.5A7.495 7.495 0 1 0 2.5 7.498c0 1.354.37 2.68 1.069 3.84L.573 15.825a.85.85 0 0 0 .744 1.34l2.565-.104.878 2.359a.848.848 0 0 0 .672.57.891.891 0 0 0 .848-.378l3.1-4.645c.41.034.83.034 1.24 0l3.109 4.658a.887.887 0 0 0 .841.365c.3-.043.563-.26.662-.546l.886-2.384 2.544.103a.852.852 0 0 0 .773-1.325Zm-13.767 2.44c-.243-.653-.412-1.915-1.03-2.336-.63-.429-1.898-.085-2.602-.057l2.315-3.468a7.502 7.502 0 0 0 3.685 2.312l-2.368 3.548ZM3.75 7.498A6.25 6.25 0 1 1 10 13.75 6.257 6.257 0 0 1 3.75 7.5Zm11.62 8.432c-.625.412-.796 1.697-1.037 2.348l-2.37-3.549a7.502 7.502 0 0 0 3.686-2.312l2.314 3.468c-.7-.029-1.962-.37-2.593.045Z"></path>
          </svg>
          <span className="text-xs font-semibold">Awards</span>
        </button>
        <button
          onClick={handleShare}
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
        >
          <svg aria-hidden="true" className="icon-share" height="16" viewBox="0 0 20 20" width="16" xmlns="http://www.w3.org/2000/svg" aria-label="Share">
            <path d="m18.8 8.286-6.466-7.064a.759.759 0 0 0-1.295.537v3.277C5.623 5.365 1 9.918 1 15.082v2.907h1.274C2.516 15 5.81 12.62 9.834 12.62h1.205v3.226a.757.757 0 0 0 1.315.515l6.422-7.021A.756.756 0 0 0 19 8.8a.736.736 0 0 0-.2-.514Zm-6.508 6.3V12a.625.625 0 0 0-.625-.625H9.834A9.436 9.436 0 0 0 2.26 14.7c.228-4.536 4.525-8.435 9.4-8.435a.626.626 0 0 0 .625-.625V3.023L17.576 8.8l-5.284 5.786Zm5.586-6.107a.176.176 0 0 0-.023.024.171.171 0 0 1 .02-.028l.003.004Zm-.011.642a.53.53 0 0 0-.003-.004l.003.004Z"></path>
          </svg>
          <span className="text-xs font-semibold">Share</span>
        </button>
        <button
          onClick={handleDots}
          className="flex items-center space-x-2 rounded bg-white hover:bg-gray-200 focus:outline-none text-black text-sm"
        >
          <svg height="12" viewBox="0 0 20 20" width="12" xmlns="http://www.w3.org/2000/svg" aria-label="More">
            <path d="M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"></path>
          </svg>
        </button>
      </div>
      {replyStatus && <Reply />}
      {Award && <Modal awardShowModal={Award} />}
      {allReplies && <HardCodedReplies />}
      {showShareDialog && (
        <dialog
          open
          className="absolute left-0 mt-2 p-4 border border-gray-300 bg-white shadow-lg rounded-lg z-10"
          style={{ minWidth: "150px" }}
        >
          <ul className="text-gray-700 text-sm space-y-2">
            <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Copy</li>
            <li className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Embed</li>
          </ul>
          <button
            onClick={() => setShowShareDialog(false)}
            className="mt-3 w-full text-center py-2 text-sm text-gray-700 border-t border-gray-200 hover:bg-gray-100 focus:outline-none"
          >
            Close
          </button>
        </dialog>
      )}
      {showDotsDialog && (
        <dialog open>
          <ul>Report</ul>
          <button onClick={() => setShowDotsDialog(false)}>Close</button>
        </dialog>
      )}
    </div>
  );
};

export default Buttons;
