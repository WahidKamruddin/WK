import {AiFillInstagram, AiFillLinkedin, AiFillGithub} from "react-icons/ai";

export default function Contact() {
    return(
        <div>
            <h1 className="my-5 text-4xl text-center">More of me</h1>
            <div className="w-full my-10 flex justify-center">
                <div>
                    <a href="https://www.linkedin.com/in/wahid-kamruddin-191248209/" target="_blank" rel="noreferrer"><AiFillLinkedin size={60} className="mx-4 rounded-xl hover:scale-110 hover:fill-sky-600 duration-500"/></a>
                </div>
                <a href="https://www.instagram.com/wahidkamruddin/" target="_blank" rel="noreferrer"><AiFillInstagram size={60} className="mx-4 hover:scale-110 hover:fill-rose-500 duration-500"/></a>
                <a href="https://github.com/WahidKamruddin" target="_blank" rel="noreferrer"><AiFillGithub size={60} className="mx-4 hover:scale-110 hover:fill-teal-800	 duration-500"/></a>
            </div>
        </div>
    )
}