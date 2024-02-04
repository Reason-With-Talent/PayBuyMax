import Check from "../assets/IMG/Check.svg"
const Sixth = () => {
    return <>
        <section className="md:px-[100px] px-[10px] md:flex ">
            <div className="md:pt-[60px]">
                <p className="text-[#F24405] text-[12px] font-normal pb-[15px]">TRAINING</p>
                <h3 className="text-[#4A4A4A] text-[20px] font-medium pb-[15px]">Learn More About Crypto and Blockchain</h3>
                <h6 className="text-[#595959;] text-[15px] font-normal pb-[20px] md:w-[55%] ">No matter how well-informed and educated you think you are, the topics of blockchain and cryptocurrency are inexhaustible. You more than likely won’t start trading like a pro or go all the way to the deep depths of blockchain tech in a month, but if you’re focused and consistent enough in your self-educating process you are destined to succeed. So the main trick is to keep the self-education process going.</h6>
                <button className="bg-gradient-to-r from-[#FF9671] to-[#F24405] md:w-[20%] w-[40%] outline-none py-[10px] rounded-2xl text-[#FFFFFF;] text-[11px] ">Learn More</button>
            </div>
            <img src={Check} className="md:w-[35%]" />
        </section>
    </>
};
export default Sixth;