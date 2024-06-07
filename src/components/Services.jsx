export default function Services() {
    return <div className={"w-[95%] mx-auto mb-10"}>
        <title>Услуги | Rusificator</title>
        <div
            className={"text-white min-h-[150px] my-5 bg-[#333] flex items-center justify-center font-bold text-2xl px-5 lg:text-4xl"}>УСЛУГИ
        </div>
        <div className={"flex justify-center sm:flex-col"}>
            <div
                className={"bg-[url('./assets/Main/bg.jpg')] bg-contain md:mr-5 lg:mr-5 sm:mb-5 bg-no-repeat bg-cover flex flex-col justify-between p-5 py-10 h-[55vh] sm:h-[40vh] min-w-[45vw] text-white text-center"}>
                <div className={"font-extrabold text-4xl"}>Zeekr</div>
                <div className={"mb-5 sm:mb-2 text-3xl"}>
                    <div className={"mb-2"}>Полная русификация</div>
                    <div className={"mb-2"}>Zeekr (001, 007, X) +</div>
                    <div className={"mb-2"}>приложения +</div>
                    <div>SIM</div>
                </div>


                <div className={"text-3xl italic"}>3950 BYN</div>
            </div>
            <div
                className={"bg-[url('./assets/Main/bg.jpg')] bg-contain bg-no-repeat bg-cover flex flex-col justify-between p-5 py-10 h-[55vh] sm:h-[40vh] min-w-[45vw] text-white text-center"}>
                <div className={"font-extrabold text-4xl"}>LiXiang</div>
                <div className={"mb-5 sm:mb-2 text-3xl"}>
                    <div className={"mb-2"}>
                        Полная русификация
                    </div>
                    <div className={"mb-2"}>LiXiang (L7, L9) +</div>
                    <div className={"mb-2"}>приложения +</div>
                    <div>SIM</div>
                </div>


                <div className={"text-3xl italic"}>3950 BYN</div>
            </div>
        </div>
    </div>
}