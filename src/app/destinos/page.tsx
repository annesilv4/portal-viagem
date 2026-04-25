import Grid from "../components/Grid";
import { Items } from "@/lib/destinos";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Portal Viagens | Destinos",
}

export default function Destinos() {
    return (
        <>
            <Grid destinos={Items} />
        </>
    )
}