import Link from "next/link";
import { Destino } from "@/types/types";
import Style from "./Card.module.css";

interface CardProps {
    destino: Destino;
}

const Card = ({ destino }: CardProps) => {
    const { id, image, name, description } = destino;

    return (
        <Link href={`/destinos/${id}`} className={Style.card}>
            <div className={Style.card__image}>
                <img src={image} alt={`Imagem do destino ${name}`} />
            </div>
            <div className={Style.card__info}>
                <h3 className={Style.card__title}>{name}</h3>
                <p className={Style.card__description}>{description}</p>
            </div>
        </Link>
    )
}

export default Card;