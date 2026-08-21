
function SideBar({ movie }) {

   const formatNum = (num) => { 
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            notation: 'compact',
            compactDisplay: 'short'
        }).format(num)
    }

    return (
        <aside
            className="
                w-[80%]
                h-115
                flex
                bg-(--surface)
                border-(--border)
                border-2
                rounded-xl
                justify-self-end
            "
        >
            <div
                className="
                    mx-10
                    h-full
                    w-full
                    flex
                    flex-col
                    items-start
                    justify-center
                "
            >
                <h2
                    className="
                        text-2xl
                        mb-3
                    "
                >
                    Detalhes da produção
                </h2>
                <h3
                    className="
                        text-lg
                    "
                >
                    Diretor
                </h3>
                 <p
                    className="
                        text-xl
                        text-(--secondary-text)
                    "
                 >
                    {movie.director}
                 </p>
                 <hr 
                    className="
                        my-2
                        border-(--border)
                        w-full
                    " 
                 />
                <h3
                    className="
                        text-lg
                    "
                >
                    Escritores
                </h3>
                 <div 
                    className="
                        flex
                        flex-wrap
                        gap-1
                    "
                 >
                  {movie.writers.map((writer, index) => (
                    <span 
                        key={writer.id}
                        className="
                            text-(--secondary-text)
                            text-xl
                        "
                    >
                        {writer.name}
                        {index < movie.writers.length - 1 ? "," : ""}
                    </span>
                  ))}
                 </div>
                <hr 
                    className="
                        my-2
                        border-(--border)
                        w-full
                    " 
                 />
                <h3 
                    className="
                        text-lg
                    "
                >
                    Orçamento
                </h3>
                 <p
                    className="
                        text-xl
                        text-(--secondary-text)
                    "
                 >
                    {formatNum(movie.budget)}
                 </p>
                <hr 
                    className="
                        my-2
                        border-(--border)
                        w-full
                    " 
                 />
                <h3 
                    className="
                        text-lg
                    "
                >
                    Bilheteria
                </h3>
                 <p
                    className="
                        text-xl
                        text-(--secondary-text)
                    "
                 >
                    {formatNum(movie.revenue)}
                 </p>
            </div>
        </aside>
    )
}

export default SideBar