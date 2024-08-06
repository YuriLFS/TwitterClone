import { Info } from "lucide-react";

interface ChatBoxHeaderProp {
    tituloUsuario: string,
    ApelidoUsuario: string,
    NomeUsuario: string,
}

export default function ChatBoxHeader({tituloUsuario,ApelidoUsuario,NomeUsuario}:ChatBoxHeaderProp) {
    return (
        <div className="border-b border-gray-600 px-3">
            <div className="flex justify-between text-lg pt-2">
                <h1 className="font-medium">{tituloUsuario}</h1>
                <Info />
            </div>
            <div className="flex flex-col items-center justify-center w-full pb-10">
                <div className="w-full max-w-md">
                    <img className="rounded-full h-20 mx-auto" src="src/assets/clove.jpg" alt="" />
                    <h2 className="font-semibold text-center">{ApelidoUsuario}</h2>
                    <h3 className="text-gray-500 text-center">@{NomeUsuario}</h3>
                    <div className="flex w-full justify-center">
                        <div className="flex text-gray-500 gap-2">
                            <p>Ingressou em Julho de 2024</p>
                            <p>•</p>
                            <p>9999.999 seguidores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
