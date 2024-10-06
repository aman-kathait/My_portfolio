import React from "react";
import passportPhoto from "../assets/profile.jpg"

export const Header = () => {
  return (
    <header className="text-white bg-blue-600 rounded-lg p-5 flex justify-between items-center">
      <div className="">
        <div className="font-bold text-3xl">Aman Kathait</div>
        <div className="text-xl">Mern developer</div>
      </div>
      <img className="rounded-full w-24" src={passportPhoto} alt="" srcset=""/>
    </header>
  );
};
