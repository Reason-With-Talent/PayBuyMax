import Sell from "../assets/IMG/Sell.svg"
const Fourth = () => {
    return <>
        <section className="">
            <h3 className="text-center text-[#000000] font-medium text-[25px] md:pt-[50px] pt-[30px]">Start Trading Today!</h3>
            <p className="text-center text-[#000000] pt-[10px] font-normal text-[15px]">Our dynamic platform developed specifically for easy trading and investments.</p>
            <div className="flex justify-center mt-[20px]">
                <button className="bg-gradient-to-r from-[#FF9671] to-[#F24405] md:w-[10%] w-[40%] outline-none py-[10px] rounded-2xl text-[#FFFFFF;] text-[11px]">Sell Now</button>
            </div>
            <div className="flex justify-center ">
                <img src={Sell} className="md:w-[35%]" />
            </div>
        </section>
    </>
};
export default Fourth;