import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p className="text-[18px]">IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          wolf<span className="text-green-400">enstein</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I acknowledge the risk of becoming highly deformed and{" "}
        <span className="text-green-400 font-medium"> monstrous,</span>
        with severe body{" "}
        <span className="text-green-400 font-medium">dysmorphia,</span>,
        potentially unable to fit through doors.
      </p>
      <Button
        func={() => {
          //when click accept & begin it scroll to this generate page with the id below//
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      ></Button>
    </div>
  );
}
