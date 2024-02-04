import React from "react";
import Wavy from "../assets/IMG/WavyTech.svg"
import Wavy1 from "../assets/IMG/WavyTech1.svg"
import Wavy2 from "../assets/IMG/WavyTech2.svg"
import Wavy3 from "../assets/IMG/WavyTech3.svg"
import Wavy4 from "../assets/IMG/WavyTech4.svg"
const Second = () => {
    return <>
        <section className="md:px-[100px] px-[10px] md:mb-[30px] mb-[50px]">
            <div className="text-center">
                <p className="text-[#F24405;] font-normal text-[12px] ">A BETTER WAY TO INVEST</p>
                <h2 className="text-[#4A4A4A;] font-medium py-[15px] text-[25px]">The World Leading Crytocurrency Platform</h2>
            </div>
            <section className="md:flex md:justify-between ">
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center ">
                        <img src={Wavy} />
                        <p className="text-[#000000;] text-[17px] font-normal">100% Satisfaction</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center  md:pt-[25px]">
                        <img src={Wavy1} />
                        <p className="text-[#000000;] text-[17px] font-normal">24/7 Support</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center  md:pt-[25px]">
                        <img src={Wavy2} className="" />
                        <p className="text-[#000000;] text-[17px] font-normal">Smooth Trading</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
            </section>
            <section className="md:flex md:justify-between">
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center ">
                        <img src={Wavy3} />
                        <p className="text-[#000000;] text-[17px] font-normal">Risk Free Investment</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center md:mt-[30px]">
                        <img src={Wavy4} />
                        <p className="text-[#000000;] text-[17px] font-normal">Bonus & Incentives</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
                <div className="shadow-2xl md:w-[25%] w-[70%] rounded-2xl mb-[30px]">
                    <div className="px-[15px] flex flex-col items-center ">
                        <img src={Wavy} />
                        <p className="text-[#000000;] text-[17px] font-normal">Low Cost Trading</p>
                        <h4 className="text-[#676767] text-[12px] font-light py-[15px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum mauris non pellentesque accumsan. Nec pellentesque eget.</h4>
                    </div>
                </div>
            </section>
        </section>
    </>
};
export default Second;