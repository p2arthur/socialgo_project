import React from "react";
import ConnectButton from "./ConnectButton";

const TopBar = () => {
  return (
    <div className="bg-gray-950 w-screen text-white p-2 pl-10 fixed z-10 flex justify-between items-center">
      <div className="flex items-end">
        <img
          src="https://meanit-bucket.s3.sa-east-1.amazonaws.com/MeanIt-Logo1+(1).png"
          alt=""
          className="w-10"
        />
        <p className="text-xl">ean It</p>
      </div>
      <ConnectButton />
    </div>
  );
};

export default TopBar;
