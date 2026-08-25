import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import SearchBar from "./SearchBar"
import CineVerseLogo from "../../assets/CineVerseLogo.svg"

function Header() {
    const { pathname } = useLocation()

    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 30);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 30) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        <header 
            className={`
                top-0
                left-0
                w-full
                h-18
                px-20
                z-50
                fixed
                flex
                items-center
                justify-between
                transition-colors
                duration-800
                ${
                    isScrolled 
                        ?   'bg-black'
                        :   'bg-transparent'
                
                }
            `}
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
                                src={CineVerseLogo}
                                alt="CineVerse logo" 
                                title="Home"
                                className="
                                    cursor-pointer
                                "
                            />
                        :   <Link to="/" viewTransition>
                                <img
                                    src={CineVerseLogo}
                                    alt="CineVerse logo" 
                                    title="Home"
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
                    <p>Profile</p>
                </div>
        </header>
    )
}

export default Header