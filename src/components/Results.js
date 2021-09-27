import React from "react";
import { useLocation, useHistory } from "react-router";
const Results = () => {
  const location = useLocation();
  const history = useHistory();
  const state = location.state;

  const handleClick = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <div>
      <div>
        <button className="m-5 p-2 border-2   border-purple-500 w-20 hover:bg-purple-500 hover:border-white hover:text-white font-bold rounded" onClick={handleClick}>
          Back
        </button>
      </div>
      <div className="flex flex-col m-auto text-18 bg-purple-800 items-center h-screen justify-center">
        <div className="bg-purple-400 rounded p-5">
          <h1 className="text-5xl text-center text-white mb-5">Results</h1>
          <div className="flex">
            <div className="text-black mr-2 w-28  ">Name:</div>
            <div className="  w-35 ">{state.name}</div>
          </div>
          <div className="flex">
            <div className="text-black mr-2 w-28  ">Designation:</div>
            <div className="  w-35 ">{state.designation}</div>
          </div>
          <div className="flex">
            <div className="text-black mr-2 w-28  ">Language:</div>
            <div className="  w-35 ">{state.language}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
