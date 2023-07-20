"use client";
import React from "react";
import { currency } from "@/app/utils/config";
export default function LawyerCard() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-4 max-w-xl  bg-darkgray rounded-xl py-5 shadow-lg">
      <div className="col-span-3 md:col-span-2 pl-5  ">
        <div>
          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-2">
            Natalie Paisley
          </h3>
          <h4 className="text-white text-sm sm:text-md md:text-lg ">
            Divorce Specialist
          </h4>
          <div className="bg-gray py-2 px-3 -ml-3 text-center w-fit rounded-full mt-3">
            <h4 className="text-white text-sm sm:text-md md:text-lg ">
              6 years of experience
            </h4>
          </div>
        </div>
        <div className="flex gap-5 my-3">
          <div className="bg-gray py-2 px-3 text-center w-fit rounded-full -ml-3">
            <h4 className="text-white text-sm sm:text-md md:text-lg ">
              {currency} 200
            </h4>
          </div>
          <div className="bg-gray py-2 px-3 text-center w-fit rounded-full -ml-3">
            <h4 className="text-white text-sm sm:text-md md:text-lg ">
              10+ cases
            </h4>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex self-center ">
        <img
          className="rounded-s-full w-96 h-48 rounded-br-lg"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </div>
    </div>
  );
}


