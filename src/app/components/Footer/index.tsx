import Style from './Footer.module.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={Style.footer}>
            <p className={Style.footer__text}>Portal Viagens | {year}</p>
            <p className={Style.footer__text}>&copy; Todos os direitos reservados.</p>
        </footer>
    )
}

export default Footer;