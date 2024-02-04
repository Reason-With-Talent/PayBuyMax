import Facebook from "../assets/IMG/facebook.svg"
import Twitter from "../assets/IMG/twitter.svg"
import Linkin from "../assets/IMG/linkedin.svg"
import Instagram from "../assets/IMG/instagram.svg"
import { HiChevronDoubleRight } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneInboundFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import Line from "../assets/IMG/Line.svg"
const Footer = () => {
    return <>
        <footer className="bg-[url('assets/IMG/FOOTER.svg')] bg-cover bg-no-repeat">
            <section className="md:flex md:justify-between md:items-start md:px-[100px] px-[20px] md:pt-[150px] pt-[70px] pb-[50px] grid items-center justify-center">
                <div className="">
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold pb-[20px] ">Signup Now</h3>
                    <h6 className="text-[#FFFFFF] text-[13px] font-light pb-[15px] ">Signup now to get N500 bonus</h6>
                    <button className="bg-[#FFFFFF] text-[#F24405] py-[5px] w-[50%] rounded text-[13px] font-medium outline-none">Register</button>
                    <span className="flex mt-[30px]">
                        <a href="https://www.facebook.com"><img src={Facebook} className="pr-[10px]" /></a>
                        <a href="https://www.twitter.com"><img src={Twitter} className="pr-[10px]" /></a>
                        <a href="https://www.linkedin.com"><img src={Linkin} className="pr-[10px]" /></a>
                        <a href="https://www.instagram.com"><img src={Instagram} className="pr-[10px]" /></a>
                    </span>
                </div>
                <div className="md:pt-[0px] pt-[30px]">
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold pb-[20px]">Useful Links</h3>
                    <div className="flex">
                        <div className="">
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Home</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">About Us</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Pricing Plan</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">FAQ</h6>
                            </span>
                        </div>
                        <div className="pl-[30px]">
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Learn</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Contact</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Company</h6>
                            </span>
                            <span className="text-[#FFFFFF] flex">
                                <HiChevronDoubleRight className="text-[17px] pt-[2px] pr-[5px]" />
                                <h6 className="text-[13px] font-light pb-[10px]">Blog</h6>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="md:pt-[0px] pt-[30px]">
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold pb-[20px] ">Contacts</h3>
                    <span className="flex text-[#FFFFFF] pb-[10px]">
                        <SlLocationPin className="text-[24px] pr-[5px] pt-[8px]" />
                        <span className="text-[12px] font-normal pl-[7px]">
                            <h6>Plot 11, Ogbolu Onwuka,</h6>
                            <h6>Amuwo Odofin GRA, Lagos</h6>
                        </span>
                    </span>
                    <span className="flex text-[#FFFFFF] pb-[10px]">
                        <BsTelephoneInboundFill className="text-[24px] pr-[5px] pt-[8px]" />
                        <span className="text-[12px] font-normal pl-[7px]">
                            <h6>+234 122 9389 228 </h6>
                            <h6>+234 092 4544 253</h6>
                        </span>
                    </span>
                    <span className="flex text-[#FFFFFF] pb-[10px]">
                        <IoMdMail className="text-[23px] pr-[5px]  pb-[5px]" />
                        <h6 className="text-[12px] font-normal pl-[10px]">Info@paybuymax.com</h6>
                    </span>
                </div>
                <div className="md:pt-[0px] pt-[30px]">
                    <h3 className="text-[#FFFFFF] text-[22px] font-semibold pb-[20px] ">Legal</h3>
                    <h6 className="text-[#FFFFFF] text-[13px] font-normal pb-[10px] ">Privacy Policy</h6>
                    <h6 className="text-[#FFFFFF] text-[13px] font-normal pb-[10px] ">Terms & Condition</h6>
                    <h6 className="text-[#FFFFFF] text-[13px] font-normal pb-[10px] ">Anti-Money Laundering</h6>
                </div>
            </section>
            <img src={Line} />
            <h3 className="text-center text-[#FFFFFF] py-[30px] text-[15px] font-normal">(c) Copyright Paybuymax 2022. All right reserved.</h3>
        </footer>
    </>
};
export default Footer;