import { ArrowsClockwise, BookmarkSimple, ChatCircle, DotsThree, Heart, ShareNetwork } from "@phosphor-icons/react";
import { PropsWithChildren, useState } from "react";

export interface TimeLineBodyProps extends PropsWithChildren {
    ApelidoUsuario: string,
    NomeUsuario: string,
    QuantCurtidas: number,
    QuantRePostagem: number,
    QuantComentarios: number,
    FotoPerfil: string,
}

export default function TimeLineBody({ ApelidoUsuario,NomeUsuario,QuantComentarios,QuantCurtidas,QuantRePostagem,FotoPerfil,children }: TimeLineBodyProps) {

    const [fav, setFav] = useState(false)
    const [curtidas, setCurtidas] = useState(QuantCurtidas)
    const [reTwt, setReTwt] = useState(false)
    const [rePostagens, setRePostagens] = useState(QuantRePostagem);
    const [salvo, setSalvo] = useState(false)

    const onFav = () => {
        if (fav) {
            setCurtidas(curtidas - 1);
        } else {
            setCurtidas(curtidas + 1);
        }
        setFav(!fav);
    };

    const onReTwt = () => {
        if (reTwt) {
            setRePostagens(rePostagens - 1);
        } else {
            setRePostagens(rePostagens + 1);
        }
        setReTwt(!reTwt);
    };

    const onSalvo = () => {
        setSalvo(!salvo)
    }

    return(
        <div className="border-y border-gray-600 max-lg:w-72">
            <div className="px-3 py-3">
                <div className="flex pb-2 gap-1 max-lg:gap-0">
                    <img src={FotoPerfil} alt="Foto Usuário" className="rounded-full w-14 h-14 max-lg:w-10 max-lg:h-10" />
                    <div className="px-5 w-full">
                        <div className="flex gap-1 justify-between">
                            <div className="flex gap-2">
                                <h2 className="font-medium max-lg:truncate">{ApelidoUsuario}</h2>
                                <h3 className="max-lg:truncate max-lg:w-28">@{NomeUsuario}</h3>
                            </div>
                            <button className="max-lg:hidden">
                                <DotsThree />
                            </button>
                        </div>
                        <div className=" w-full max-h-72 overflow-y-auto py-3 max-lg:py-0 max-lg:pb-2">
                            {children}
                        </div>
                        <div className="flex lg:justify-between max-lg:text-sm max-lg:-ml-14 max-lg:gap-4">
                            <div className="flex gap-16 max-lg:gap-8">
                                <div className="flex items-center gap-2">
                                    <button>
                                        <ChatCircle />
                                    </button>
                                    <p>{QuantComentarios}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={onReTwt}>
                                        <ArrowsClockwise className={`${ reTwt ? "text-green-600" : "text-white" }`} /> 
                                    </button>   
                                    <p>{rePostagens}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={onFav}>
                                        {fav ? <Heart weight="fill" className="text-red-600" /> : <Heart />}
                                    </button>
                                    <p>{curtidas}</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <button onClick={onSalvo}>
                                    { salvo ?
                                    <BookmarkSimple weight="fill" className="text-azul-twitter"/>
                                    :
                                    <BookmarkSimple />
                                    }
                                </button>
                                <button>
                                    <ShareNetwork />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}