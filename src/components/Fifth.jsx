import Iphone from "../assets/IMG/13Pro.svg"
import Iphone1 from "../assets/IMG/14Pro.svg"
import Apple from "../assets/IMG/Apple.svg"
import Store from "../assets/IMG/Store.svg"
const Fifth = () => {
    return <>
        <section className="bg-[#FFE4DA;] my-[50px] md:pt-[30px] md:px-[100px] px-[10px] md:flex">
            <img src={Iphone} className="md:w-[35%] " />
            <div className="">
                <h3 className="text-[#4A4A4A] text-[20px] font-semibold text-center pt-[40px]">Download Our Mobile App For A Whole New Experience!</h3>
                <div className="md:flex md:mt-[100px] mt-[20px] grid items-center justify-center">
                    <div className="flex bg-[#FFFFFF] rounded md:w-[50%] w-[110%] h-[65px] p-[15px] md:mr-[10px] mb-[20px] md:mb-[0px]">
                        <img src={Store} className="md:w-[25%]" />
                        <div className="pl-[10px] ">
                            <p className="text-[#4A4A4A] text-[12px] font-light">Get it on</p>
                            <p className="text-[#000000] text-[15px] font-normal">Google Play</p>
                        </div>
                    </div>
                    <div className="flex bg-[#FFFFFF] rounded md:w-[50%] w-[110%] h-[65px] p-[15px] md:ml-[10px] mb-[20px] md:mb-[0px]">
                        <img src={Apple} className="md:w-[25%]" />
                        <div className="pl-[10px]">
                            <p className="text-[#4A4A4A] text-[12px] font-light">Donwload on the</p>
                            <p className="text-[#000000] text-[15px] font-normal">App Store</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={Iphone1} className="md:w-[35%]" />
        </section>
    </>
};
export default Fifth;