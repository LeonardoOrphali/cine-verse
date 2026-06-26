
function Header() {
    return(
        <header className="
            top-0
            left-0
            z-50
            fixed
            w-full
            flex
            items-center
            justify-center
        ">
            <div className="
                h-13
                pr-10
                pl-10
                mt-2
                container 
                flex
                items-center
                justify-between
                rounded-full
                bg-[#0B0F14]/30
                backdrop-blur-sm
            ">
                <div className="
                    flex 
                    flex-row 
                    items-center
                ">
                    <img 
                        src="#" 
                        alt="logo" 
                        className="
                            h-10 w-10
                        " 
                    />
                    <nav>
                        <ul className="
                            flex 
                            gap-2
                        ">
                            <li>Populares</li>
                            <li>Em alta</li>
                        </ul>
                    </nav>
                </div>
                <div className="
                    w-lg
                    flex
                    items-center
                    justify-end
                ">
                    <div className="
                        flex 
                        gap-2
                    ">
                        <form>
                            <input 
                                type="text" 
                                id="a" 
                                placeholder=" Pesquisar" 
                                className="
                                    border
                                    rounded-md
                                    border-[#232A35]
                                  text-black 
                                 " />
                        </form>
                        <button>Login</button>
                        <button>DarkMode</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header