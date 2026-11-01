import { useNavigate } from "react-router-dom"
import { useState } from "react" 

import { CiSearch } from "react-icons/ci";

function SearchBar() {
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return

        navigate(`/search?q=${encodeURIComponent(searchQuery)}`, { viewTransition: true })

        setSearchQuery("")
    }

    return (
        <form 
            onSubmit={handleSearch}
            className="
                w-full
                min-w-0
                py-1.5
                px-4
                gap-2
                duration-300
                flex
                justify-between
                border
                rounded-2xl
                border-white/40
                hover:border-white/70
                hover:scale-x-105
                focus-within:scale-x-105
                focus-within:border-white/70

                sm:max-w-md
            "
        >
            <input 
                type="text"
                value={searchQuery}
                placeholder="Pesquisar" 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                    outline-0
                    w-full
                    min-w-0
                    text-(--main-text)
                "
            />
            <button type="submit" className="shrink-0">
                <CiSearch 
                    size={22} 
                    className="
                        hover:text-white/50
                    "
                />
            </button>
        </form>
    )
}

export default SearchBar