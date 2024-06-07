import Banner from "../assets/banner.mp4";
import key from "../assets/Main/Icons/key.png";
import star from "../assets/Main/Icons/star.png";
import checkmark from "../assets/Main/Icons/checkmark.png";
import Zeekr from "../assets/Main/zeekr.png";
import Lixiang from "../assets/Main/lixiang.png";
import Services from "./Services";
import { motion } from "framer-motion"

export default function Main() {
    return <main className={"min-w-[95vw] sm:w-[100vw]"}>
        <title>Главная | Rusificator</title>
        <div className={"mb-14"}>
            <div
                className={"text-white w-[95vw] sm:w-[100vw] flex flex-col justify-center items-center z-10 font-bold absolute"}>
                <div className={"w-[70%] md:w-[85%] sm:w-[90%] sm:text-[43.5px] text-6xl flex text-center mt-[80px]"}>
                    СПЕЦИАЛИСТЫ, КОТОРЫМ
                    МОЖНО ДОВЕРЯТЬ
                </div>

            </div>
            <video className={"object-cover relative w-full h-[500px] md:h-[450px] sm:h-[650px] sm:w-[100vw] "} src={Banner}
                   loop={true} muted={true} autoPlay={true}>
                <source type="video/mp4" src={Banner}/>
            </video>
            <motion.div initial={{left: -100, opacity: 0}} animate={{fillOpacity: "revert-layer", right: -100, left:0, opacity: 1}}
                className={"absolute -mt-[125px] sm:-mt-[360px] flex w-[95vw] sm:items-center md:justify-center lg:justify-center md:items-center md:w-[100vw] sm:w-[100vw] sm:text-2xl justify-center font-bold sm:flex-col"}>
                <motion.div transition={{type: "string", delay: 1}} initial={{width: 0, opacity: 0}} animate={{width: 260, opacity: 100}}
                    className={"bg-white h-[125px] sm:h-[100px] md:w-[33vw] sm:w-[75vw] w-[200px] sm:mb-3 flex flex-col justify-center items-center"}>
                    <img alt={"Icon"} className={"mb-3"} src={key} height={"45px"} width={"45px"}/>
                    <div>Полная русификация</div>
                </motion.div>
                <motion.div transition={{type: "string",delay: 1}} initial={{width: 0, opacity: 0}} animate={{width: 260, opacity: 100}}
                    className={"bg-[#EDEDED] h-[125px] sm:h-[100px] sm:w-[75vw] w-[200px] sm:mb-3 flex flex-col justify-center items-center"}>
                    <img alt={"Icon"} className={"mb-3"} src={star} height={"45px"} width={"45px"}/>
                    <div>Гарантия качества</div>
                </motion.div>
                <motion.div transition={{type: "just",delay: 1}} initial={{width: 0, opacity: 0}} animate={{width: 260, opacity: 100}}
                    className={"bg-[#D6D6D6] h-[125px] sm:h-[100px] sm:w-[75vw] w-[200px] sm:mb-3 flex flex-col justify-center items-center"}>
                    <img alt={"Icon"} className={"mb-3"} src={checkmark} height={"45px"} width={"45px"}/>
                    <div>Самые низкие цены</div>
                </motion.div>
            </motion.div>
        </div>
        <div className={"mt-12"}>
            <Services/>
        </div>
        <div className={"flex sm:flex-col w-[65vw] md:w-screen md:justify-between sm:w-screen sm:justify-center mx-auto items-center sm:items-center lg:justify-between sm:my-5"}>
            <motion.img alt={"Logo"} className={"min-h-[40px] md:ml-16 max-h-[80px] md:h-[70px] md:w-max sm:h-[50px] lg:mr-10"} src={Zeekr}/>
            <motion.img alt={"Logo"} className={"min-h-[40px] lg:mr-10 sm:h-[100px] md:h-[130px] md:w-max max-h-[150px] md:mr-16 md:pr-10"} src={Lixiang}/>
        </div>

    </main>
}