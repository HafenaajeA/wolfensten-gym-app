import React from "react";

export default function Button(props) {
  // Destructure//
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 mx-auto py-4 rounded-md border-[2px] bg-slate-950 hover:text-orange-600 border-green-400 border-solid blueShadow duration-200"
    >
      <p>{text}</p>
    </button>
  );
}
