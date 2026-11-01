import { FaHeart, FaRegHeart } from 'react-icons/fa'
import useFavorites from '../../hooks/useFavorites'

export default function FavoriteButton({ movie, onRemove }) {
    const { isFavorite, toggleFavorite } = useFavorites()
    const active = isFavorite(movie.id)
    const label = `${active ? 'Remover' : 'Adicionar'} ${movie.title || movie.name || 'Filme sem título'} ${active ? 'dos' : 'aos'} favoritos`
    const Heart = active ? FaHeart : FaRegHeart

    function handleClick(event) {
        event.preventDefault()
        event.stopPropagation()
        // Record the next focus target before the focused card is removed.
        if (active && event.detail === 0) onRemove?.(movie.id)
        toggleFavorite(movie)
    }

    return (
        <button
            type="button"
            aria-label={label}
            aria-pressed={active}
            title={label}
            data-favorite-id={movie.id}
            onClick={handleClick}
            onPointerDown={event => event.stopPropagation()}
            className={`favorite-button swiper-no-swiping absolute right-2 top-2 z-20 flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-md cursor-pointer transition-[opacity,background-color,color] hover:bg-black/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? 'text-(--primary)' : 'text-white'}`}
        >
            <Heart size={20} aria-hidden="true" />
        </button>
    )
}
