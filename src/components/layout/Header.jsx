import { Link, useLocation } from "react-router-dom"

import SearchBar from "./SearchBar"
import ProjectorLogo from "../../assets/ProjectorLogo-icon.png"

function Header() {
    const { pathname } = useLocation()

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
                    border-2
                    container 
                    flex
                    items-center
                    justify-between
                    rounded-2xl
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
                    {pathname === "/" 
                        ?   <img
                                src={ProjectorLogo}
                                alt="CineVerse logo" 
                                title="Home"
                                className="
                                    w-10
                                    cursor-pointer
                                "
                            />
                        :   <Link to="/" viewTransition>
                                <img
                                    src={ProjectorLogo}
                                    alt="CineVerse logo" 
                                    title="Home"
                                    className="
                                        w-10
                                    "
                                />
                            </Link>
                    }
                </div>
                <div 
                    className="
                        w-lg
                        flex
                        items-center
                        justify-center
                    "
                >
                    <SearchBar />
                </div>
                <div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header