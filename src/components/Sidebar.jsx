import React from "react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
export default function Sidebar({setOpenBar}) {
    return <div className="absolute h-screen w-screen">
        <div className={"absolute h-screen w-screen top-0 left-0 bg-black opacity-65 z-20"} onClick={() => setOpenBar(false)}></div>
        <motion.div initial={{left: -100}} animate={{left: 0}} className="h-screen w-[70vw] text-white bg-[#111] flex-col flex p-5 fixed z-50 text-2xl">
            <div className={"py-5 pl-5 mt-10 flex flex-col"}>
                <Link to="/" className={"border-b-[1px] active:text-orange focus:text-orange border-white p-3"}
                      onClick={() => setOpenBar(false)}>Главное</Link>
                <Link to="/services" className={"border-b-[1px] active:text-orange focus:text-orange border-white p-3"}
                      onClick={() => setOpenBar(false)}>Услуги</Link>
                <Link to="/connection" className={"border-b-[1px] active:text-orange focus:text-orange border-white p-3"}
                      onClick={() => setOpenBar(false)}>Связь</Link>
            </div>
        </motion.div>
    </div>

}