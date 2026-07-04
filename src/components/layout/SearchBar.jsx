import { useNavigate } from "react-router-dom"
import { useState } from "react" 
      
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
        <form onSubmit={handleSearch}>
            <input 
                type="text"
                value={searchQuery}
                placeholder="Pesquisar" 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
                    border
                    rounded-md
                    border-(--border)
                    text-(--main-text)
                "
            />
            <button type="submit">
                    Buscar
            </button>
        </form>
    )
}

export default SearchBar