import { useRef, useEffect } from "react";

function Modal({ awardShowModal }) {
  const awardDetails = useRef();

  useEffect(() => {
    if (awardShowModal) {
      awardDetails.current.showModal();
    } else {
      awardDetails.current.close();
    }
  }, [awardShowModal]);

  function awardCloseModal() {
    awardDetails.current.close();
  }

  return (
    <div>
      <dialog
        ref={awardDetails}
        className="rounded-lg p-6 max-w-lg w-full shadow-lg border border-gray-200 bg-white"
      >
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h1 className="text-xl font-semibold text-gray-800">Award Details</h1>
          <button
            onClick={awardCloseModal}
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414L10 8.586z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="text-gray-700">
          <p className="mb-4">
            Award content you love! Reward your favorite content on Reddit. The
            redditor who created it may be eligible to earn as well.
          </p>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={awardCloseModal}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 text-gray-700"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Give Award
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Modal;
