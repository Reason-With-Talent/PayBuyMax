import { Link } from 'react-router-dom'
import Logo from "../assets/IMG/PayBuyLogo.svg"
import Bitcoin from "../assets/IMG/Bitcoin.svg"
import { BiMenu } from "react-icons/bi"
const Header = () => {
    return (
        <>
            <section className="bg-[url('assets/IMG/Ground.jpeg')] bg-cover bg-no-repeat">
                <header className=" flex justify-between items-center px-[15px] md:px-[100px] py-[15px]">
                    <img src={Logo} />
                    <BiMenu className="md:hidden flex text-[35px] text-[#FFFFFF]" />
                    <div className="md:flex hidden">
                        <ul className="md:flex gap-[50px] md:pr-[100px] text-[13px] text-[#FFFFFF]">
                            <li className="cursor-pointer">Home</li>
                            <Link to={"/Learn"}><li className="cursor-pointer">Learn</li></Link>
                            <Link to={"/Contact"}><li className="cursor-pointer">Contact</li></Link>
                            <Link to={"/About"}><li className="cursor-pointer">AboutUS</li></Link>
                            <Link to={"/FAQ"}><li className="cursor-pointer">FAQ</li></Link>
                        </ul>
                    </div>
                    <h6 className="text-[15px] font-normal cursor-pointer">EN</h6>
                </header>
                <section className="pt-[30px] md:flex justify-center px-[15px] md:px-[100px]">
                    <div className="md:pl-[120px] md:pt-[60px] md:px-[0px] px-[5px]">
                        <h1 className="text-[30px] text-[#FFFFFF] md:w-[60%] font-semibold text-center leading-tight">Trade Your Cryptocurrency And <span className="text-[#FFCC29]">Gift Cards</span> At High Rates!</h1>
                        <p className="text-[#FFFFFF] text-[15px] py-[20px] md:w-[60%] text-center">We trade cryptocurrency, gift cards and electronic assets.</p>
                        <div className="pl-[140px] md:pl-[170px]">
                            <button className="bg-[#FFFFFF] md:w-[20%] w-[40%] outline-none py-[8px] rounded-2xl text-[#F24405;] text-[11px]">Sell Now</button>
                        </div>
                    </div>

                    <img src={Bitcoin} className="md:w-[30%] w-[100%] md:pt-[0px] pt-[20px] md:px-[0px] px-[20px] pb-[20px]" />

                </section>
            </section>
        </>
    )

};
export default Header;