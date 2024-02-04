import React from "react";
import Man from "../assets/IMG/Man.svg"
const First = () => {
  return (
    <>
      <section className="md:flex md:justify-between md:px-[100px] px-[10px] md:py-[50px] py-[20px] ">
        <img src={Man} className="md:w-[45%]" />
        <div className="md:pt-[70px] md:pl-[50px] flex flex-col items-center md:mb-[0px] mb-[30px]">
          <p className="text-[#F24405;] font-normal text-[12px] ">BEST TRADING EXPERIENCE</p>
          <h2 className="text-[#4A4A4A;] font-medium py-[20px] text-[25px]">Trade Anywhere & Anytime!</h2>
          <h6 className="text-[#595959;] font-normal text-[14px] md:w-[65%] pb-[20px]">Welcome to PayBuyMax Tech, your number one source for trading cryptocurrency, gift cards and more. We're dedicated to providing you the very best of trading, with an emphasis on integrity, passion and professionalism.</h6>
          <h6 className="text-[#595959;] font-normal text-[14px]  md:w-[65%]">Paybuymax is into trading of cryptocurrency, giftcards and electronic assets</h6>
          <button className="bg-gradient-to-r from-[#FF9671] to-[#F24405] md:w-[20%] w-[40%] outline-none py-[7px] rounded-2xl text-[#FFFFFF] text-[12px] md:mt-[70px] mt-[30px] ">About US</button>
        </div>
      </section>
    </>
  )
};
export default First;