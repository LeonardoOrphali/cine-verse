
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
                h-100
                flex
                bg-(--surface)
                rounded-xl
            "
        >
            <div
                className="
                    mx-10
                    my-12
                    h-full
                    w-full
                    flex
                    flex-col
                    items-start
                "
            >
                <h2>
                    Detalhes da produção
                </h2>
                <h3>
                    Diretor
                </h3>
                 <p>
                    {movie.director}
                 </p>
                <h3>
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
                    <span key={writer.id}>
                        {writer.name}
                        {index < movie.writers.length - 1 ? "," : ""}
                    </span>
                  ))}
                 </div>
                <h3>
                    Orçamento
                </h3>
                 <p>
                    {formatNum(movie.budget)}
                 </p>
                <h3>
                    Bilheteria
                </h3>
                 <p>
                    {formatNum(movie.revenue)}
                 </p>
            </div>
        </aside>
    )
}

export default SideBar