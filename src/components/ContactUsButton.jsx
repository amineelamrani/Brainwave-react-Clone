import React from "react";

export default function ContactUsButton() {
  return (
    <div
      className={`flex w-full rounded-xl pt-[2px] bg-gradient-to-r from-green-400 from-0% via-sky-500 via-30% to-primary to-90% mb-7`}
    >
      <div
        className={`flex w-full rounded-xl pb-[2px] bg-gradient-to-r from-yellow-400 to-pink-400 shadow-lg`}
      >
        <div
          className={`flex w-full rounded-xl pl-[2px] bg-gradient-to-t from-yellow-400 to-green-400`}
        >
          <div
            className={`flex w-full rounded-xl pr-[2px] bg-gradient-to-b from-primary to-pink-400`}
          >
            <button
              className={`flex-1 uppercase font-bold text-white transition hover:text-primary rounded-xl py-2 w-full bg-primary-content`}
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
