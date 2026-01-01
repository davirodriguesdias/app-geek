import style from "./Header.module.css"

function Header() {
    return(
        <header className={style.header}>
            <h1>GeekFlix</h1>
            <nav>
                <ul>
                    <a href="#">Home</a>
                    <a href="#">Assistir</a>
                </ul>
            </nav>
        </header>
    )
}

export default Header; //pesquisar