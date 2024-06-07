import telegram from "../assets/Connection/telegram.png"
import viber from "../assets/Connection/viber.png"
import whatsapp from "../assets/Connection/whatsapp.png"

export default function Connection() {
    return <div>
        <title>Связь | Rusificator</title>
        <div
            className={"h-[150px] w-full bg-[#333] text-white font-bold flex justify-center items-center text-center text-6xl mb-5"}>
            <div>Наши контакты</div>
        </div>
        <div className={"flex flex-col items-center w-full h-[300px] justify-center md:h-[500px]"}>
            <div className={"flex mb-5"}>
                <img alt={"whatsapp"} src={whatsapp} height={"70px"} width={"70px"}/>
                <img alt={"telegram"} src={telegram} height={"70px"} width={"70px"}/>
                <img alt={"viber"} src={viber} height={"70px"} width={"70px"}/>
            </div>
            <div className={"font-bold text-2xl mt-2 mb-5 md:text-4xl text-center"}>
                <div>+375291234567</div>
                <div>rusificator@gmail.com</div>
            </div>
        </div>
    </div>
}