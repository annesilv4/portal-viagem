import Link from 'next/link';
import Style from './Home.module.css';

export default function Home() {
    return (
        <main className={Style.hero}>
            <div>
                <h1 className={Style.hero__title}>Descubra os melhores destinos para as suas viagens</h1>
                <p className={Style.hero__description}>Explore uma variedade de destinos incríveis e planeje suas próximas aventuras com facilidade.</p>

                <Link href="/destinos" className={Style.hero__button}>
                    Ver destinos
                </Link>
            </div>
        </main>
    )
}
