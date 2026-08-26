import  CineVerseLogo  from "../../assets/CineVerseLogo.svg"
import TMDBLogo  from "../../assets/TMDBLogo.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
        <footer 
            className="
                w-full
                h-60
                mt-50
                text-sm
                bg-(--surface)
                border
                border-(--border)
                flex
                justify-center

                xs:text-md
                sm:text-[1rem]
            "
        >
            <div
                className="
                    w-[80%]
                    items-center
                    justify-evenly
                    flex
                    flex-col-reverse

                    *:flex
                    *:items-center
                    *justify-start

                    xs:*:justify-center
                    md:flex-row
                    md:justify-between
                    lg:*:justify-start
                "
            >
                <div 
                    className="
                        lg:w-[50%]
                        xl:w-[40%]
                    "
                >
                    <img 
                        src={CineVerseLogo} 
                        alt="Cineverse logo" 
                        className="
                            w-18
                        "
                    />
                    <div 
                        className="
                            h-12
                            mx-4
                            border
                            border-(--border)
                        "
                    >  
                    </div>
                    <div 
                        className="
                            w-full

                            xs:w-[50%]
                            sm:w-[60%]
                        "
                    >
                        <img 
                            src={TMDBLogo} 
                            alt="TMDB logo" 
                            className="
                                w-20
                            "
                        />
                        <p>
                            <i>
                                This product uses the TMDB API but is not 
                                endorsed or certified by TMDB.
                            </i>
                        </p>
                    </div>
                </div>
                <div 
                    className="
                        gap-4
                        flex
                        flex-col
                        items-center
                        text-center

                        *:flex
                        *:gap-4

                        md:gap-8
                        lg:flex-row
                    "
                >
                    <nav>
                        <a 
                            href="mailto:leonardoorphali2@gmail.com"
                            target="_blank"
                            title="Email"
                        >
                            <IoMail 
                                size={25}
                                className="
                                    hover:text-[#EA4335] 
                                    hover:scale-[110%]
                                "
                            />
                        </a>
                        <a 
                            href="https://github.com/LeonardoOrphali"
                            target="_blank"
                            title="Github"
                        >
                            <FaGithub 
                                size={25}
                                className="
                                    hover:text-[#5C6BC0]
                                    hover:scale-[110%]
                                "
                            />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/leonardo-orphali/"
                            target="_blank"
                            title="Linkedin"
                        >
                            <FaLinkedin 
                                size={25} 
                                className="
                                    hover:text-[#0266C8]
                                    hover:scale-[110%]
                                "
                            />
                        </a>
                    </nav>
                    <span 
                        className="
                            items-center!
                            flex-col
                            gap-0!

                            sm:w-full
                            md:w-[90%]
                            lg:w-full
                            lg:flex-row
                            lg:text-start
                        "
                    >    
                        <h2>
                            &copy; 2026 CineVerse. &nbsp;
                            <br 
                                className="
                                    sm:block 
                                    xl:hidden
                                " 
                            />
                            Desenvolvido por Leonardo Orphali
                        </h2>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer