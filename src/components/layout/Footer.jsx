import  ProjectorLogo  from "../../assets/ProjectorLogo-Icon.png"
import TMDBLogo  from "../../assets/TMDBLogo-Icon.svg"

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
                        <p><i>
                            This product uses the TMDB API but is not 
                            endorsed or certified by TMDB.</i>
                        </p>
                    </div>
                </div>
                <div 
                    className="
                        items-center
                        gap-6

                        *:flex
                        *:gap-2
                    "
                >
                    <nav>
                        <a 
                            href="mailto:leonardoorphali2@gmail.com"
                            target="_blank"
                        >
                            Email
                        </a>
                        <a 
                            href="https://github.com/LeonardoOrphali"
                            target="_blank"
                        >
                            GitHub
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/leonardo-orphali/"
                            target="_blank"
                        >
                            Linkedin
                        </a>
                    </nav>
                    <h2>&copy; 2026 CineVerse. Desenvolvido por Leonardo Orphali</h2>
                </div>
            </div>
        </footer>
    )
}

export default Footer