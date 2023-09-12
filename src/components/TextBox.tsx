import React from "react";

const TextBox = () => {
  return (
    <div className="bg-gray-950 border-l-1 border-cyan-400 rounded-br p-5 h-40 flex flex-col items-end">
      <textarea
        placeholder="Create a post"
        spellCheck={false}
        className="h-24  w-full bg-transparent border-t p-2 hover:shadow-inner border-gray-900 text-gray-400 active:ring-0 transition-transform focus:outline-none resize-none hover:scale-101 placeholder:text-gray-600"
      />
      <button className="rounded bg-gray-900 text-gray-200 border-2 py-1 px-3 hover:bg-cyan-500 border-gray-900 transition-all duration-75">
        Submit
      </button>
    </div>
  );
};

export default TextBox;
