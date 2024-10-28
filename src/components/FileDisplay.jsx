import React from "react";

export default function FileDisplay(props) {
  const { handleResetAudio, file, audioFile } = props;
  return (
    <main
      className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center
     pb-20 w-72 sm:w-96 max-w-full mx-auto "
    >
      <h1 className="front-semibold text-4xl sm:text-5xl md:text-6xl ">
        {" "}
        Your <span className="text-blue-400 bold ">File</span>
      </h1>
      <div className="flex flex-col text-left my-4 ">
        <h3 className="font-semibold ">Name</h3>
        <p>{file ? file?.name : "Custom audio"}</p>
      </div>
      <div className="flex items-center justify-between gap-4 ">
        <button
          onClick={handleResetAudio}
          className="text-slate-400 hover:text-blue-600 duration-200 "
        >
          Reset
        </button>
        <button className="specialButton px-4 py-2 rounded-lg text-blue-400 ">
          <p>Transcribe</p>
        </button>
      </div>
    </main>
  );
}
