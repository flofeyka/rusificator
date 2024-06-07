import Logo from "../assets/Header/logo.png";
import {Link} from "react-router-dom";
import {useState} from "react";
import Sidebar from "./Sidebar";
import {motion} from "framer-motion";
export default function Header() {
    const [openBar, setOpenBar] = useState(false);

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 100}} className="h-[12.5vh] flex items-center sm:w-[100vw] sm:justify-center">
        <img alt={"Logo"} className={"h-[12.5vh] mx-auto md:ml-18 absolute top-0 md:left-[250px]"} src={Logo}/>
        <div className={"absolute left-0 top-0"}>
            {openBar && <Sidebar setOpenBar={(openBar) => setOpenBar(openBar)}/>}
        </div>

        <div className={"flex justify-center w-full font-semibold text-xl"}>
            <div className={"flex justify-between sm:hidden w-[35vw] sm:w-full"}>
                <Link to={"/"} className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}
                      autoFocus>Главная</Link>
                <Link to={"/services"}
                      className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}>Услуги</Link>
                <Link to={"/connection"}
                      className={"ml-5 focus:text-gray-400 hover:text-gray-400 active:text-gray-400"}>Связь</Link>
            </div>
        </div>

        <div className={"md:hidden mr-5"}>
            <button onClick={() => setOpenBar(true)}><img height={"25px"} width={"25px"} alt={"threebars"} src={"/threebars.svg"}/></button>
        </div>
    </motion.div>
}