import React from "react";

const TextBox = () => {
  return (
    <div className="bg-gray-950 rounded p-5 h-40">
      <textarea
        spellCheck={false}
        className="w-full h-40 bg-transparent text-gray-400 active:ring-0 focus:outline-none resize-none"
      />
    </div>
  );
};

export default TextBox;
