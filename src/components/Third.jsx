import Starbucks from "../assets/IMG/Starbucks.svg"
import Itunes from "../assets/IMG/Itunes.svg"
import Walmart from "../assets/IMG/Walmart.svg"
import Victoria from "../assets/IMG/Victoria.svg"
import Amazon from "../assets/IMG/Amazon.svg"
import BestBuy from "../assets/IMG/BestBuy.svg"
import Chipotle from "../assets/IMG/Chipotle.svg"
import Fandango from "../assets/IMG/Fandango.svg"
import Google from "../assets/IMG/Google.svg"
import Nike from "../assets/IMG/Nike.svg"
import Vanilla from "../assets/IMG/Vanilla.svg"
import Steam from "../assets/IMG/Steam.svg"

const Third = () => {
    return <>
        <section className="bg-[#FFE4DA;]">
            <h3 className="text-center py-[50px] text-[#4A4A4A;] text-[25px] font-semibold">Gift Cards & Electronic Assets</h3>
            <section className="md:px-[100px] ">
                <div className="md:flex md:justify-between grid justify-center md:pb-[30px] md:gap-[0px] gap-[20px]">
                    <img src={Starbucks} className="md:w-[20%]" />
                    <img src={Itunes} className="md:w-[20%]" />
                    <img src={Walmart} className="md:w-[20%]" />
                    <img src={Victoria} className="md:w-[20%]" />
                </div>
                <div className="md:flex md:justify-between grid justify-center md:pb-[30px] md:gap-[0px] gap-[20px]">
                    <img src={Amazon} className="md:w-[20%]" />
                    <img src={BestBuy} className="md:w-[20%]" />
                    <img src={Chipotle} className="md:w-[20%]" />
                    <img src={Fandango} className="md:w-[20%]" />
                </div>
                <div className="md:flex md:justify-between grid justify-center pb-[30px] md:gap-[0px] gap-[20px]">
                    <img src={Google} className="md:w-[20%]" />
                    <img src={Nike} className="md:w-[20%]" />
                    <img src={Vanilla} className="md:w-[20%]" />
                    <img src={Steam} className="md:w-[20%]" />
                </div>
            </section>
        </section>
    </>
};
export default Third;