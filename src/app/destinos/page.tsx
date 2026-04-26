import Grid from "../components/Grid";
import { Items } from "@/lib/destinos";
import type { Metadata } from "next";
import Title from "../components/Title";

export const metadata: Metadata = {
    title: "Portal Viagens | Destinos",
}

export default function Destinos() {
    return (
        <>
            <Title title="Destinos" />
            <Grid destinos={Items} />
        </>
    )
}