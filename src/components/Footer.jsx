import React from "react";
import {Link, Route, Routes} from "react-router-dom";

export default function Footer() {
    return <footer className={"sm:w-[100vw] sm:justify-center sm:flex sm:flex-col md:flex-row text-center"}>
        <Routes>
            <Route path={"/"} element={
                <div className={"bg-[#222] flex flex-col justify-center items-center min-h-[100px] py-10"}>
                    <div className={"text-white text-center text-3xl sm:text-4xl font-bold mb-4"}>Записаться на
                        русификацию
                    </div>
                    <Link to={"/connection"}>
                        <button
                            className={"bg-white p-2 px-4 text-xs w-[125px] sm:h-[7vh] sm:w-[50vw] sm:text-xl rounded-3xl hover:text-orange-400"}>Записаться
                        </button>
                    </Link>
                </div>}/>
            <Route path={"/Services"} element={
                <div
                    className={"bg-[#EDEDED] flex justify-between md:px-[350px] sm:flex-col items-center min-h-[100px] py-10"}>
                    <div className={"text-center text-2xl sm:text-4xl font-bold mb-4"}>Чем можем вам помочь? Свяжитесь с
                        нами
                    </div>
                    <Link to={"/connection"}>
                        <button
                            className={"bg-[#2D3034] text-white hover:bg-[white] p-2 px-4 font-semibold text-xs h-[40px] w-[135px] sm:h-[7vh] sm:w-[50vw] sm:text-xl rounded-3xl text-xl hover:text-orange-400"}>СВЯЗАТЬСЯ
                        </button>
                    </Link>
                </div>}/>
        </Routes>
        <div className={"bg-[#111] min-h-[200px] text-white flex"}>
            <div className={"w-[40vw] sm:w-[100vw] md:mx-auto sm:mr-auto"}>
                <div className={"flex sm:flex-col p-5 md:justify-between"}>
                    <div className={"sm:mb-5 sm:text-3xl"}>
                        <div className={"text-gray-300 mb-5"}> Услуги
                        </div>
                        <div className={"text-xs sm:text-2xl"}>
                            <div> - Русификация
                            </div>
                            <div> - Установка программ
                            </div>
                            <div> - Установка SIM
                            </div>
                        </div>

                    </div>
                    <div className={"sm:mb-5 sm:text-3xl"}>
                        <div className={"text-gray-300 mb-5"}> Часы работы
                        </div>
                        <div className={"sm:text-2xl md:text-xs"}>
                            <div> ПН–ПТ: 10:00–23:00
                            </div>
                            <div> СБ: 11:00–22:00
                            </div>
                        </div>


                    </div>
                    <div>
                        <div className={"text-gray-300 mb-5 sm:text-3xl"}> Мы на связи
                        </div>
                        <div className={"sm:text-2xl md:text-xs text-xs"}>
                            <div> +375291234567
                            </div>
                            <div> rusificator@gmail.com
                            </div>
                        </div>

                    </div>

                </div>
                <div className={"flex flex-col items-end sm:items-center text-3xl text-[#444]"}>
                    Р У С И Ф И К А Т О Р
                </div>
                <div
                    className={"w-[45vw] sm:w-[100vw] sm:text-xl text-center text-[11px] border-b-[1px] border-solid border-white my-5 mb-10"}>
                    <div className={"mb-2 max-w-[95%] sm:w-[100%] mx-auto"}>
                        Сайт не является интернет-магазином. Информация о ценах и модификациях является
                        ориентировочной, предоставляется для справки и не является публичной офертой. Окончательную
                        стоимость уточняйте у менеджера

                    </div>
                </div>
            </div>

        </div>
    </footer>
}