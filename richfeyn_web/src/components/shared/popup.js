import React from 'react';

const PopUp = ({ handleClose, handleOption1, handleOption2, show }) => {
  const showHideClassName = show ? "fixed inset-0 flex items-center justify-center z-50 backdrop-blur" : "hidden";

  return (
    <div className={showHideClassName}>
      <div className="bg-white p-10 rounded shadow-2xl">
      <h2 className="px-5 my-5 font-bold text-sm md:px-10 md:my-10 md:text-xl">Choose the payment Option</h2>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded mr-2" onClick={handleOption1}>
          Pay via stripe
        </button><br/>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mb-4 rounded mr-2" onClick={handleOption2}>
          Pay via Instamojo
        </button><br/>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUp;
