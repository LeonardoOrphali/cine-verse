import  ProjectorLogo  from "../../assets/ProjectorLogo-Icon.png"
import TMDBLogo  from "../../assets/TMDBLogo-Icon.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

function Footer() {
    return (
        <footer 
            className="
                w-full
                h-30
                mt-50
                bg-(--surface)
                border
                border-(--border)
                flex
                justify-center
                
                *:flex
            "
        >
            <div
                className="
                    w-[80%]
                    flex
                    items-center
                    justify-between

                    *:flex
                    *:items-center

                "
            >
                <div>
                    <img 
                        src={ProjectorLogo} 
                        alt="Cineverse logo" 
                        className="
                            w-20
                        "
                    />
                    <div 
                        className="
                            h-12
                            mx-4
                            border
                            border-(--border)
                        "
                    ></div>
                    <div className="w-[45%]">
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
                        items-center
                        gap-8

                        *:flex
                        *:gap-4
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
                    <h2>
                        &copy; 2026 CineVerse. Desenvolvido por Leonardo Orphali
                    </h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer