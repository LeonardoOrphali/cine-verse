import { Link } from "react-router-dom"

import SearchBar from "./SearchBar"
import ProjectorLogo from "../../assets/ProjectorLogo-icon.png"

function Header() {
    return(
        <header 
            className="
                top-0
                left-0
                z-50
                fixed
                w-full
                flex
                items-center
                justify-center
            "
        >
            <div 
                className="
                    h-13
                    pr-10
                    pl-10
                    mt-2
                    container 
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    border-2
                    border-(--background)/10
                    bg-(--background)/20
                    backdrop-blur-sm
                "
            >
                <div 
                    className="
                        gap-4
                        flex 
                        flex-row 
                        items-center
                    "
                >
                    <img
                        src={ProjectorLogo}
                        alt="CineVerse logo" 
                        className="
                            w-10
                        "
                    />
                    <nav>
                        <ul 
                            className="
                                flex 
                                gap-2
                            "
                        >
                            <Link to="/">
                                <li className="hover:text-(--main-text)/80">Home</li>
                            </Link>
                            <li className="hover:text-(--main-text)/70">Populares</li>
                            <li className="hover:text-(--main-text)/70">Em alta</li>
                        </ul>
                    </nav>
                </div>
                <div 
                    className="
                        w-lg
                        flex
                        items-center
                        justify-end
                    "
                >
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}

export default Header