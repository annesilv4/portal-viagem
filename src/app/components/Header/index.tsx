import Link from "next/link";
import Style from './Header.module.css';

const Header = () => {
    return (
        <header className={Style.header}>
            <div className={Style.header__container}>
                <h1 className={Style.header__logo}>
                    <Link href="/">
                        Portal Viagens
                    </Link>
                </h1>
                <nav className={Style.header__nav}>
                    <Link href="/">Início</Link>
                    <Link href="/destinos">Destinos</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header;