import { ArrowsClockwise, Bookmark, BookmarkSimple, ChatCircle, DotsThree, Heart, Share, ShareNetwork } from "@phosphor-icons/react";
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
    const [reTwt, setReTwt] = useState(false)
    const [salvo, setSalvo] = useState(false)

    const onFav = () => {
        setFav(!fav)
    }

    const onReTwt = () => {
        setReTwt(!reTwt)
    }

    const onSalvo = () => {
        setSalvo(!salvo)
    }

    return(
        <div className="border-y border-gray-600">
            <div className="px-3 py-3">
                <div className="flex pb-2 gap-1">
                    <img src={FotoPerfil} alt="Foto Usuário" className="rounded-full w-14 h-14" />
                    <div className="px-5 w-full">
                        <div className="flex gap-1 justify-between">
                            <div className="flex gap-2">
                                <h2 className="font-medium">{ApelidoUsuario}</h2>
                                <h3>@{NomeUsuario}</h3>
                            </div>
                            <button>
                                <DotsThree />
                            </button>
                        </div>
                        <div className=" w-full max-h-72 overflow-y-auto py-3">
                            {children}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex gap-16">
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
                                    <p>{QuantRePostagem}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={onFav}>
                                        {
                                            fav ?
                                            <Heart weight="fill" className="text-red-600"/>
                                            :
                                            <Heart />
                                        }
                                    </button>
                                    <p>{QuantCurtidas}</p>
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