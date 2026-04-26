import type { Destino } from "@/types/types";
import Style from "./Grid.module.css";
import Card from "../Card";

type GridProps = {
    destinos: Destino[];
}

const Grid = ({ destinos }: GridProps) => {
    return (
        <section className={Style.grid}>
            {destinos.map((destino) => (
                <Card key={destino.id} destino={destino} />
            ))}
        </section>
    )
}

export default Grid;