import { Info } from "lucide-react";

export default function ChatBoxHeader() {
    return(
        <div className="border-b border-gray-600 px-3">
            <div className="flex justify-between text-lg pt-2">
                <h1 className="font-medium">usuario</h1>
                <Info />
            </div>
            <div className="flex text-center justify-center w-full pb-10">
                <div>
                    <img className="rounded-full w-20" src="https://github.com/YuriLFS.png" alt="" />
                    <h2 className="font-semibold">Usuario</h2>
                    <h3 className="text-gray-500">@Usuario</h3>
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
    )
}