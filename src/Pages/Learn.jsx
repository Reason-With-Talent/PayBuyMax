import Logo from "../assets/IMG/Head.svg"
import Bitcoin from "../assets/IMG/Bitcoin.svg"
import { BiMenu } from "react-icons/bi"
import Sixth from "../components/Sixth"
import Eighth from "../components/Eighth"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'
const Learn = () => {
    return <>
        <section className="bg-[url('assets/IMG/Ground.jpeg')] bg-cover bg-no-repeat">
            <header className=" flex justify-between items-center px-[15px] md:px-[100px] py-[15px]">
                <img src={Logo} />
                <BiMenu className="md:hidden flex text-[35px] text-[#FFFFFF]" />
                <div className="md:flex hidden">
                    <ul className="md:flex md:gap-[50px] md:pr-[100px] text-[13px] text-[#FFFFFF]">
                        <Link to={"/"}><li className="cursor-pointer">Home</li></Link>
                        <li className="cursor-pointer">Learn</li>
                        <Link to={"/Contact"}><li className="cursor-pointer">Contact</li></Link>
                        <Link to={"/About"}><li className="cursor-pointer">AboutUS</li></Link>
                        <Link to={"/FAQ"}><li className="cursor-pointer">FAQ</li></Link>
                    </ul>
                </div>
                <h6 className="text-[15px] font-normal cursor-pointer">EN</h6>
            </header>
            <section className="pt-[30px] md:flex md:justify-between px-[15px] md:px-[100px]">
                <div className="md:pl-[150px] md:pt-[60px] md:px-[0px] px-[5px]">
                    <h1 className="text-[30px] text-[#FFFFFF] font-semibold text-center ">Training</h1>
                    <p className="text-[#FFFFFF] text-[15px] py-[20px] text-center">We trade cryptocurrency, gift cards and electronic assets.</p>
                </div>
                <img src={Bitcoin} className="md:w-[30%] w-[100%] md:pt-[0px] pt-[20px] md:px-[0px] px-[20px] pb-[20px]" />
            </section>
        </section>
        <Sixth />
        <Eighth />
        <Footer />
    </>
};
export default Learn;   