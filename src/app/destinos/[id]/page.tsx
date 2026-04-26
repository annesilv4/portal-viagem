import { Items } from "@/lib/destinos";
import Style from "./DetalheDestino.module.css";

type DetalheDestinoProps = {
    params: Promise<{ id: string }>;
}

export default async function DetalheDestino({ params }: DetalheDestinoProps) {
    const { id } = await params;
    const destinoId = Number(id);
    const destino = Items.find((item) => item.id === destinoId);

    if (!destino) {
        return <p>Destino não encontrado</p>
    }

    return (
        <main className={Style.container}>
            <div className={Style.card}>
                <img
                    src={destino.image}
                    alt={destino.name}
                    className={Style.image}
                />

                <div className={Style.info}>
                    <h1 className={Style.title}>Destino: {destino.name}</h1>
                    <p className={Style.description}>{destino.description}</p>
                </div>
            </div>
        </main>
    )
}