import { Link } from "react-router-dom";
import { Gear } from "@phosphor-icons/react";

export default function PaginaNotFound() {
    return(
        <div className="bg-preto-twitter flex justify-center items-center text-white w-screen h-screen">
            <div className="space-y-2 text-center items-center w-full">
                <div className="flex justify-center text-9xl">
                    <Gear />
                </div>
                <p className="text-xl">Opa! Caminho errado.</p>
                <p>ERROR 404</p>
                <button>
                    <Link className="underline text-azul-twitter text-xl" to="/">Retornar a página principal.</Link>
                </button>
            </div>
        </div>
    )
}