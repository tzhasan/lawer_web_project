"use client";
import ClockBtn from "@/app/utils/Buttons and Icons/ClockBtn";
import Phonebtn from "@/app/utils/Buttons and Icons/PhoneBtn";
import VideoCallBtn from "@/app/utils/Buttons and Icons/VideoCallBtn";
import React from "react";
import PrimaryButton from "./PrimaryButton";
import Link from "next/link";
import MessageBtn from "@/app/utils/Buttons and Icons/MessageBtn";
import MenuThreeDot from "@/app/utils/Buttons and Icons/MenuThreeDot";

const AppointmentCard = () => {
  return (
    <div className="flex justify-around items-center max-w-xl bg-darkgray rounded-xl p-5 shadow-lg relative">
      <div className=" flex items-center">
        {/* 1 */}
        <img
          className="rounded-lg w-[90%]"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="ui/ux review check"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-end ml-2  gap-2">
        <div>
          {/* 2 */}
          <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl mb-1">
            Mr. John
          </h3>
          <h3 className=" text-xs sm:text-md md:text-lg text-green-500">
            Payment Confirm
          </h3>
          <div className="flex gap-2 md:gap-4 mt-4">
            {/* buttons */}
            <div className="bg-light-blue-600 md:py-3 md:px-7 p-4 rounded-full flex items-center justify-center gradient-shadow cursor-pointer">
              <Phonebtn />
            </div>
            <div className="bg-light-blue-600 md:py-3 md:px-7 p-4 rounded-full flex items-center justify-center gradient-shadow cursor-pointer">
              <VideoCallBtn />
            </div>
          </div>
        </div>
        <div className="flex flex-row md:flex-col gap-2 items-center justify-center ">
          {/* 3 */}
          <div className="bg-green-500 md:py-3 md:px-7 p-4 rounded-full flex items-center gap-1">
            <span className="hidden md:block">
              <ClockBtn />
            </span>
            <h1 className="text-xs sm:text-sm md:text-lg text-white">2pm</h1>
          </div>
          <div className="bg-green-500 md:py-3 md:px-7 p-4 rounded-full flex justify-center items-center gap-1">
            <Link href={"/"}>
              <button className="flex justify-center items-center">
                <span className="block md:hidden">
                  <MessageBtn />
                </span>{" "}
                <h3 className="hidden md:block text-white">Message</h3>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -translate-x-[30%] translate-y-[30%] cursor-pointer">
        <MenuThreeDot />
      </div>
    </div>
  );
};

export default AppointmentCard;


