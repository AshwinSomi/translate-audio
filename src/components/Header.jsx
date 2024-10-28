import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-4 p-4 ">
      <a href="/">
        <h1 className="font-medium ">
          Translate<span className="text-blue-400 bold ">-Audio</span>
        </h1>
      </a>
      <a href="/">
        <button className="flex items-center gap-2 specialButton px-4 py-2 rounded-lg text-blue-400 ">
          <p>New</p> <i className="fa-solid fa-plus "></i>
        </button>
      </a>
    </header>
  );
}
