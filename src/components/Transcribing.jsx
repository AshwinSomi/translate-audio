import React from "react";

export default function Transcribing(props) {
  const { downloading } = props;
  return (
    <div className="flex items-center flex-1 flex-col justify-center text-center gap-10 md:gap-14 pb-24 p-4 ">
      <div className="flex flex-col gap-2 sm:gap-4 ">
        <h1 className="front-semibold text-4xl sm:text-5xl md:text-6xl ">
          <span className="text-blue-400 bold ">Transcribing</span>
          <p>
            {!downloading ? "warming up cylinders" : "core cylinders engaged"}
          </p>
        </h1>
      </div>
      <div className="flex flex-col gap-2 s,:gap-4  max-w-[400px] mx-auto w-full ">
        {[1, 2, 3].map((val) => {
          return (
            <div
              key={val}
              className={
                "rounded-full h-2 sm:h-3 bg-slate-400 loading " +
                `loading${val}`
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}
