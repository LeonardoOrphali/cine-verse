import { Link, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaRegHeart } from 'react-icons/fa'

import SearchBar from "./SearchBar"

function Header() {
    const { pathname } = useLocation()

    const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 30)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <header 
            className={`
                top-0
                left-0
                w-full
                min-h-18
                px-4
                py-3
                gap-x-4
                gap-y-3
                flex-wrap
                sm:flex-nowrap
                sm:h-18
                sm:py-0
                z-50
                fixed
                flex
                items-center
                justify-between
                transition-colors
                duration-800

                sm:px-14
                ${
                    isScrolled 
                        ?   'bg-(--background)'
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
                                src="/logoCineVerse.png"
                                alt="CineVerse logo" 
                                title="Home"
                                className="
                                    cursor-pointer
                                    w-12
                                    shrink-0
                                "
                            />
                        :   <Link to="/" viewTransition>
                                <img
                                    src="/logoCineVerse.png"
                                    alt="CineVerse logo" 
                                    title="Home"
                                    className="w-12 shrink-0"
                                />
                            </Link>
                    }
                </div>
                <div 
                    className="
                        order-last
                        w-full
                        min-w-0
                        sm:order-none
                        sm:flex-1
                        sm:max-w-lg
                        flex
                        items-center
                        justify-center
                    "
                >
                    <SearchBar />
                </div>
                <div className="shrink-0">
                    <Link
                        to="/favoritos"
                        aria-label="Favoritos"
                        title="Favoritos"
                        viewTransition
                        aria-current={pathname === '/favoritos' ? 'page' : undefined}
                        className={`flex min-h-11 min-w-11 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${pathname === '/favoritos' ? 'text-(--primary)' : 'text-(--main-text) hover:text-white/70'}`}
                    >
                        <FaRegHeart size={20} aria-hidden="true" />
                    </Link>
                </div>
        </header>
    )
}

export default Header
