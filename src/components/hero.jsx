import {BiDownArrowAlt} from "react-icons/bi";

export default function Hero() {
    return(
        <div className="h-screen w-full flex justify-center items-center">
            <div className="h-fit">
                <h1 className="text-6xl">Hey, I'm Wahid!</h1>
                <h2 className="mt-8 text-3xl text-center">an aspiring developer</h2>
                <div className="mt-8 flex justify-center">
                    <div className="p-1 border-2 border-white rounded-2xl cursor-pointer hover:bg-white hover:text-black duration-500"><a href="#projects"><BiDownArrowAlt size={20}/></a></div>
                </div>
            </div>  

        </div>
    )
}