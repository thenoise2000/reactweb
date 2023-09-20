import React from 'react';

const Info = () => {
  const Responsiv = window.innerWidth <= 750;
  return (
    <>
      <div
        style={{ boxShadow: "0 0px 50px 25px #00000030" }}
        className="lg:hidden top-[50px]  bg-white w-full flex flex-row  md:px-20 box-border items-center justify-between"
      >
        <div className="w-full md:w-[50%] flex justify-between items-center md:items-start md:justify-start">
          <img
            className="relative  w-36 p-4 h-7 md:w-48 md:h-9 object-cover"
            alt=""
            src="/clarifion.png"
          />
        </div>
        <div className="flex flex-row w-full md:w-[50%]  md:my-4 md:px-10  md:items-start justify-evenly md:justify-end md:gap-[32px]">
          <img
            className="relative w-[44px] md:w-[88px] h-4 md:h-8"
            alt=""
            src="/marco.svg"
          />
          <img
            className="relative w-[41px] md:w-[82px] h-4 md:h-8 overflow-hidden shrink-0"
            alt=""
            src="/norton.svg"
          />
        </div>
      </div>
      <div className="hidden md:hidden lg:flex top-[50px]  bg-white w-full  flex-row  md:px-20 box-border items-center justify-between">
        <div className="w-full md:w-[50%] flex justify-between items-center md:items-start md:justify-start">
          <img
            className="relative  w-36 p-4 h-7 md:w-48 md:h-9 object-cover"
            alt=""
            src="/clarifion.png"
          />
        </div>
        <div className="flex flex-row w-full md:w-[50%]  md:my-4 md:px-10  md:items-start justify-evenlys md:justify-end md:gap-[32px]">
          <img
            className="relative w-[44px] md:w-[88px] h-4 md:h-8"
            alt=""
            src="/marco.svg"
          />
          <img
            className="relative w-[41px] md:w-[82px] h-4 md:h-8 overflow-hidden shrink-0"
            alt=""
            src="/norton.svg"
          />
        </div>
      </div>
    </>
  );
}

export default Info;