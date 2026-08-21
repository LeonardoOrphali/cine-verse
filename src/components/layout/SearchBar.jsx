import { useNavigate } from "react-router-dom"
import { useState } from "react" 

import { CiSearch } from "react-icons/ci";

function SearchBar() {
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        if (!searchQuery.trim()) return

        navigate(`/search?q=${encodeURIComponent(searchQuery)}`)

        setSearchQuery("")
    }

    return (
        <form 
            onSubmit={handleSearch}
            className="
                py-1
                px-2
                gap-2
                duration-300
                flex
                border
                rounded-2xl
                border-(--background)/20
                hover:border-(--background)/25
                hover:scale-x-105
                focus-within:scale-x-105
            "
        >
            <input 
                type="text"
                value={searchQuery}
                placeholder="Pesquisar" 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                    ml-2
                    outline-0
                    text-(--main-text)
                "
            />
            <button type="submit">
                <CiSearch 
                    size={22} 
                    className="
                        hover:text-(--secondary-text)
                    "
                />
            </button>
        </form>
    )
}

export default SearchBar