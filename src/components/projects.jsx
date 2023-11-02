export default function Projects(){
    function openLink() { 
        window.open("https://www.i4software.com/Interns-program");
        window.open("https://www.i4software.com/Portfolio");
    }

    return (
        <div id="projects" className='h-screen'>
            <h1 className='mt-5 text-5xl text-center'>My Projects</h1>
            <div className="flex justify-center">
                <div className='w-11/12 mt-8 grid grid-cols-2 grid-rows-2 gap-5'>
                    <div className="w-11/12 justify-self-start">
                        <img src="../images/fit.jpg" alt="FIT Digital Closet" className="rounded-xl"/>
                    </div>

                    <div className="w-11/12 justify-self-end">
                        <a href="https://wahidkamruddin.github.io/lofi-soundboard/"  target="_blank" rel="noreferrer"> <img src="../images/mellowmind.png" alt="MellowMind Lofi Soundboard" className="rounded-xl"/> </a>
                    </div>

                    <div className="w-11/12 justify-self-start">
                        <a href="https://www.fitbyte.me" onClick={openLink} target="_blank" rel="noreferrer"> <img src="../images/fitbyte.png" alt="MellowMind Lofi Soundboard" className="rounded-xl"/> </a>
                    </div>

                    <div className="w-11/12 justify-self-end">
                        <a href="https://www.afterschoolstartup.com/" onClick={openLink} target="_blank" rel="noreferrer"> <img src="../images/afterschoolstartup.png" alt="MellowMind Lofi Soundboard" className="rounded-xl"/> </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

//need to blur out the images when hovered on with name on them... card type? ... ez fix