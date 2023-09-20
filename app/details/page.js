"use client";
import { Tooltip, Button } from "@nextui-org/react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-[100vw] min-h-[100vh] bg-slate-400 ">
        <div className=" w-full h-auto bg-white flex items-center justify-center">

            <div className=" text-lg font-semibold flex gap-5 py-2">
          <Tooltip showArrow={true} content="depends on overviews ">
            <Button className="bg-transparent">Overview </Button>
          </Tooltip>

          <Tooltip showArrow={true} content="media access ">
            <Button className="bg-transparent">Media</Button>
          </Tooltip>

          <Tooltip showArrow={true} content="fan base ">
            <Button className="bg-transparent">Fandom</Button>
          </Tooltip>

          <Tooltip showArrow={true} content="sharable content ">
            <Button className="bg-transparent">Share</Button>
          </Tooltip>

            </div>
        </div>

        <div className="w-full h-full bg-pink-500">



        </div>
      </div>
    </>
  );
};

export default page;
