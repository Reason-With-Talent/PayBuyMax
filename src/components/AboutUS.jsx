import Abt from "../assets/IMG/About.svg"
import Light from "../assets/IMG/Lighting.svg"
import Block from "../assets/IMG/Block.svg"
import Check from "../assets/IMG/BookCheck.svg"
import Mission from "../assets/IMG/Mission.svg"
const AboutUS = () => {
    return <>
        <section className="md:flex md:px-[200px] px-[20px] py-[70px]">
            <div className="md:mb-[0px] mb-[50px] text-center md:text-left">
                <p className="text-[#F24405] text-[12px] font-normal pb-[10px]">ABOUT US</p>
                <h3 className="text-[#4A4A4A] text-[20px] font-medium pb-[15px] ">From The Management</h3>
                <h6 className="text-[#595959] text-[14px] font-normal md:w-[63%] pb-[15px]">Welcome to PayBuyMax Tech, your number one source for trading cryptocurrency, gift cards and more. We're dedicated to providing you the very best of trading, with an emphasis on integrity, passion and professionalism.</h6>
                <h6 className="text-[#595959] text-[14px] font-normal md:w-[63%] pb-[15px]">Founded in 2015 by two friends and colleagues Engr Okenwa & Engr Okolo. PayBuyMax Tech has come a long way from its beginnings. Engr. Okolo first started out trading bitcoins and gift cards as a hobby in his home, his passion has remained to make trading easy and enable free banking for all.</h6>
                <h6 className="text-[#595959] text-[14px] font-normal md:w-[61%] pb-[15px]">We hope you enjoy our services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</h6>
                <h6 className="text-[#595959] text-[14px] font-normal pb-[5px]">Sincerely,</h6>
                <h6 className="text-[#595959] text-[14px] font-normal">PayBuyMax Tech Mgt.</h6>
            </div>
            <img src={Abt} className="md:w-[35%]" />
        </section>
        <section className="md:flex md:px-[200px] px-[20px] pb-[70px]">
            <img src={Light} className="md:w-[35%] " />
            <div className="md:ml-[50px] pt-[50px] text-center md:text-left">
                <p className="text-[#F24405] text-[12px] font-normal pb-[10px]">WHAT WE DO</p>
                <h3 className="text-[#4A4A4A] text-[20px] font-medium pb-[15px]">Trading Crytocurrency</h3>
                <h6 className="text-[#595959] text-[14px] font-normal pb-[15px] md:w-[66%]">PayBuyMax Tech offer competitive rates for cryptocurrency (BTC, USDT, ETH,LTC, BNB, DOGE ETC) and electronic assets(gift cards, zelle, cashapp, greendot, Lille, sofi, money lion, EDD spending, aspiration, paypal, Skrill, neteller etc) in Nigeria and this is possible because we are licensed to trade on two international forex broker platforms.</h6>
                <h6 className="text-[#595959] text-[14px] font-normal  pb-[15px] md:w-[60%]">Paybuymax is into trading of cryptocurrency, giftcards and electronic assets.</h6>
            </div>
        </section>
        <section className="md:flex md:px-[100px] px-[20px] pb-[70px]">
            <div className="md:pt-[40px]">
                <p className="text-[#F24405] text-[12px] font-normal pb-[10px]">WHY TRADE WITH US</p>
                <h3 className="text-[#4A4A4A] text-[20px] font-medium pb-[15px]">Best Trading Experience</h3>
                <h6 className="text-[#595959] text-[14px] font-normal pb-[15px] md:w-[50%]">As we strive to establish our company as the best name in the cryptocurrency market we adopt Integrity, passion and professionalism as our watchword.</h6>
                <h6 className="text-[#595959] text-[14px] font-normal  pb-[15px] md:w-[60%]">This concurrently implies;</h6>
                <section className="">
                    <div className="md:flex md:mb-[15px] ">
                        <div className="flex md:mb-[0px] mb-[15px]">
                            <img src={Check} className="w-[15px] pb-[5px]" />
                            <h6 className="text-[#595959]  ml-[10px] text-[13px] font-light md:w-[65%] leading-snug">Instant funding of account on request</h6>
                        </div>
                        <div className="flex md:ml-[20px] md:mb-[0px] mb-[15px]">
                            <img src={Check} className="w-[15px] pb-[5px]" />
                            <h6 className="text-[#595959] ml-[10px] text-[13px] font-light md:w-[65%] leading-snug">We have more than enough Bitcoin to go around</h6>
                        </div>
                    </div>
                    <div className="md:flex md:mb-[15px]">
                        <div className="flex md:mb-[0px] mb-[15px]">
                            <img src={Check} className="w-[15px] pb-[5px]" />
                            <h6 className="text-[#595959] ml-[10px] text-[13px] font-light">Bonus And Incentives</h6>
                        </div>
                        <div className="flex md:ml-[110px] md:mb-[0px] mb-[15px]">
                            <img src={Check} className="w-[15px] pb-[5px]" />
                            <h6 className="text-[#595959] ml-[10px] text-[13px] font-light">Fast payment is assured</h6>
                        </div>
                    </div>
                    <div className="flex md:mb-[0px] mb-[30px]">
                        <img src={Check} className="w-[15px] pb-[5px]" />
                        <h6 className="text-[#595959] ml-[10px] text-[13px] font-light md:w-[38%] leading-snug">Remaining highly Liquidated by keeping our business diversified by trading Forex, Real estate, Purchasing Bonds and proffering Lending Services</h6>
                    </div>
                </section>
            </div>
            <img src={Block} className="md:w-[32%]" />
        </section>
        <section className="md:px-[200px] px-[20px] pb-[70px] flex flex-col items-center">
            <h3 className="text-[#4A4A4A] text-[20px] font-medium md:pb-[50px] pb-[20px]">Mission, Vission & Core Values</h3>
            <img src={Mission} className="md:w-[75%]" />
        </section>
    </>
};
export default AboutUS;