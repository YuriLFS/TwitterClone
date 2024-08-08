import { PropsWithChildren, useState } from "react";
import SideBar from "./sidebar";
import { Sparkle } from "lucide-react";
import { GithubLogo } from "@phosphor-icons/react";

interface LayoutProps extends PropsWithChildren {
    NomeDaPagina: string
}

export default function Layout({ children, NomeDaPagina }:LayoutProps) {

    const [theme, setTheme] = useState(true)

    const [modoEscuro, setLocalModoEscuro] = useState(true);

    const onClick = () => {
        setLocalModoEscuro(!modoEscuro);
        setTheme(!modoEscuro); // Agora você pode chamar setTheme diretamente
    };

    return(
        <div className={`grid grid-cols-5 h-screen overflow-hidden ${ theme ? "bg-preto-twitter text-white " : "bg-white text-black" }`}>
            <div className="col-span-1">
                <SideBar />
            </div>
            <div className="col-span-4">                
                <div className="grid grid-rows-12">
                    <div className="row-span-1">
                        <div className="px-3 flex justify-between h-full text-azul-twitter text-xl items-center border-b border-gray-600">
                            <h1 className="font-bold text-white">{NomeDaPagina}</h1>
                            <div className="space-x-5">
                                <button className="border border-azul-twitter rounded-full p-1.5 hover:border-white hover:text-white hover:bg-azul-twitter">
                                    <a target="_blank" href="https://github.com/YuriLFS">
                                        <GithubLogo />
                                    </a>
                                </button>
                                <button onClick={onClick}>
                                    <Sparkle />
                                </button>
                            </div>                                
                        </div>
                    </div>
                    <div className="row-span-11">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}