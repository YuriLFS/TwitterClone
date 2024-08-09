import { ArrowsClockwise, BookmarkSimple, ChatCircle, DotsThree, Heart, ShareNetwork } from "@phosphor-icons/react";
import { TimeLineBodyProps } from "./timeLineBody";
import { useState } from "react";

export default function BodyNotifications({ ApelidoUsuario,NomeUsuario,QuantComentarios,QuantCurtidas,QuantRePostagem,FotoPerfil }:TimeLineBodyProps) {

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
        <div className="overflow-auto max-lg:max-h-[85Vh]">
            {/* Componente para Curtida */}
            <div className="w-full border-b border-gray-600 p-3">
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-1 flex justify-end">
                        <Heart weight="fill" className="text-pink-600 w-5 h-5" />
                    </div>
                    <div className="col-span-11 space-y-1 overflow-hidden">
                        <img src={FotoPerfil} alt="" className="rounded-full w-8 h-8"/>
                        <h2 className="font-medium">"Usuário" curtiu seu post</h2>
                        <div className="max-h-24">
                            <p>Texto do Post Texto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do PostTexto do Post</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Componente de Resposta */}
            <div className="w-full border-b border-gray-600 p-3">
                <div className="grid grid-cols-12 max-lg:grid-cols-4 gap-3">
                    <div className="col-span-1 flex justify-end">
                        <img src="https://github.com/YuriLFS.png" alt="" className="rounded-full w-14 h-14"/>
                    </div>
                    <div className="col-span-11 max-lg:col-span-3 space-y-1">
                        <div className="justify-between flex">
                            <div>
                                <div className="flex gap-2">
                                    <h2 className="font-semibold">{ApelidoUsuario}</h2>
                                    <h2>@{NomeUsuario}</h2>
                                    <h2>Data</h2>
                                </div>
                                <div>
                                    Em resposta a
                                </div>
                            </div>
                            <button>
                                <DotsThree />
                            </button>
                        </div>

                        <div className="break-before-auto">
                            Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto Texto 
                        </div>

                        <div className="flex justify-between max-lg:-ml-16">
                            <div className="flex gap-16 max-lg:gap-10">
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