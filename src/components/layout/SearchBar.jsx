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
                w-50
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

                sm:w-sm
                lg:w-md
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
                    text-(--main-text)
                "
            />
            <button type="submit">
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