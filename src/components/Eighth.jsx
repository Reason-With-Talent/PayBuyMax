import Second from "./Second";

const Eighth = () => {
    return <>
    <section className="md:px-[100px] px-[10px] md:pb-[80px] pb-[50px] pt-[50px] text-center">
     <p className="text-[#F24405] text-[12px] font-normal">SIGN UP FOR FREE.</p>
     <h3 className="text-[#4A4A4A] text-[30px] font-medium py-[15px]">Start investing today!</h3>
     <form className="flex justify-center">
        <input type="text" placeholder="Email..." className="outline-none border-b-2 text-[14px] md:w-[20%] w-[50%] font-normal"/>
        <button className="border-b-2 cursor-pointer text-[#F24405] font-normal outline-none text-[17px] pl-[15px]">Subscribe</button>
     </form>
    </section>
    </>
};
export default Eighth;