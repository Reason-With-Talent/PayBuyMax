import Object from "../assets/IMG/OBJECTS.svg"
import { FaPlus } from "react-icons/fa6";
const Seventh = () => {
    return <>
        <section className="md:px-[100px] px-[20px] pt-[50px] pb-[30px] md:flex md:justify-between ">
            <img src={Object} className="md:w-[30%]" />
            <div className=" flex flex-col items-center pt-[20px] md:pr-[250px]">
                <h3 className="text-[#000000] text-[25px] font-medium pb-[20px] ">Frequently <span className="text-[#F24405]">Asked Questions</span></h3>
                <div className="flex flex-col items-center">
                    <button className="flex justify-between outline-none text-[#FFFFFF] bg-[#F24405] text-[13px] font-normal w-[140%] md:w-[200%] px-[20px] py-[10px] rounded mb-[50px]">
                        1. Can I Cancel My Investment Plan?
                        <FaPlus className="text-[16px]" />
                    </button>
                    <button className="flex justify-between outline-none text-[#4A4A4A] bg-[#FFE5DC] text-[13px] font-normal w-[140%] md:w-[200%] px-[20px] py-[10px] rounded mb-[50px] ">
                        2. What Is Your Fees Charges?
                        <FaPlus className="text-[16px]" />
                    </button>
                    <button className="flex justify-between outline-none text-[#4A4A4A] bg-[#FFE5DC] text-[13px] font-normal w-[140%] md:w-[200%] px-[20px] py-[10px] rounded mb-[50px]">
                        3. What Is Your Referral Bonus
                        <FaPlus className="text-[16px]" />
                    </button>
                </div>
                <div className="w-[80%] flex justify-end md:ml-[260px] ml-[50px]">
                    <button className="bg-gradient-to-r from-[#FF9671] to-[#F24405] text-[#FFFFFF] text-[12px] font-normal rounded-2xl w-[50%] py-[7px]">View More</button>
                </div>
            </div>
        </section>
    </>
};
export default Seventh;