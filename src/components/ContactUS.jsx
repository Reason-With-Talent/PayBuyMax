import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import Facebook from "../assets/IMG/FB.svg"
import Twitter from "../assets/IMG/TT.svg"
import Instagram from "../assets/IMG/IG.svg"
import Linkin from "../assets/IMG/LK.svg"
const ContactUS = () => {
    return <>
        <section className="md:flex justify-between md:px-[100px] px-[15px] pt-[70px] mb-[50px] md:mb-[100px]">
            <div className="">
                <h3 className="text-[#212529] text-[30px] font-bold pb-[15px]">Contact Us</h3>
                <form className="">
                    <div className="md:pb-[30px] pb-[20px] md:flex grid">
                        <input type="text" placeholder="Name" className="border outline-none md:w-[320px] py-[7px] pl-[10px] rounded text-[14px] font-normal md:mb-[0px] mb-[20px]" />
                        <input type="text" placeholder="Email" className="border outline-none md:w-[320px] py-[7px] pl-[10px] rounded text-[14px] font-normal md:ml-[60px]" />
                    </div>
                    <div className="md:pb-[30px] pb-[20px] md:flex grid">
                        <input type="number" placeholder="Phone Number" className="border outline-none md:w-[320px] py-[7px] pl-[10px] rounded text-[14px] font-normal md:mb-[0px] mb-[20px]" />
                        <input type="text" placeholder="Subject" className="border outline-none md:w-[320px] py-[7px] pl-[10px] rounded text-[14px] font-normal md:ml-[60px]" />
                    </div>
                    <div className="">
                        <input type="text" placeholder="Write Message" className="border outline-none  w-[100%] py-[70px]  pl-[10px] rounded text-[14px] font-normal" />
                    </div>
                </form>
                <div className=" flex justify-end md:ml-[140px] ml-[50px] mt-[40px]">
                    <button className="bg-gradient-to-r from-[#FF9671] to-[#F24405] text-[#FFFFFF] text-[12px] font-normal rounded-2xl w-[30%] py-[7px]">Submit Now</button>
                </div>
            </div>
            <div className="bg-[#FFF8F1] md:w-[25%] w-[100%] mt-[25px] pt-[10px] md:pt-[0px] px-[20px] rounded pb-[30px] md:pb-[0px]">
                <h5 className="text-[#212529] mt-[20px] text-[22px] font-medium">More About Us</h5>
                <h6 className="text-[#676767] text-[13px] font-light py-[12px] leading-snug">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus nec dictum ac consectetur. Ut a, eu, lobortis odio.</h6>
                <div className="flex bg-[#F24405] text-[#FFFFFF] rounded py-[8px] mb-[15px]">
                    <BsTelephoneInboundFill className="text-[16px] ml-[10px] mt-[2px]" />
                    <p className="text-[13px] font-normal ml-[13px]">+234 802 2345 123, 802 2345 123</p>
                </div>
                <div className="flex bg-[#FFFFFF] rounded py-[8px] mb-[15px]">
                    <IoMdMail className="text-[#F24405] text-[20px] ml-[10px]" />
                    <p className="text-[14px] font-normal ml-[13px] text-[#212529]">Info@paybuymax.com</p>
                </div>
                <div className="flex bg-[#FFFFFF] rounded py-[8px] mb-[15px]">
                    <SlLocationPin className="text-[#F24405] text-[20px] ml-[10px] mt-[8px]" />
                    <div className="text-[14px] font-normal ml-[13px] ">
                        <p className="text-[#000000]">Plot 11, Ogbolu Onwuka,</p>
                        <p className="text-[#000000]">Amuwo Odofin GRA, Lagos</p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <a href="https://www.facebook.com"><img src={Facebook} className="pr-[10px]" /></a>
                    <a href="https://www.twitter.com"><img src={Twitter} className="pr-[10px]" /></a>
                    <a href="https://www.instagram.com"><img src={Instagram} className="pr-[10px]" /></a>
                    <a href="https://www.linkedin.com"><img src={Linkin} className="pr-[10px]" /></a>
                </div>
            </div>
        </section>
    </>
};
export default ContactUS;