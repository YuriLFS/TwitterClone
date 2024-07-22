interface MessageBodyProps {
    ApelidoUsuario: string,
    NomeUsuario: string,
}


export default function MessageBody({ ApelidoUsuario, NomeUsuario }: MessageBodyProps) {

    const today = new Date
    const formattedDate = today.toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    return(
        <div className="border-b border-gray-600">
            <button>
                <div className="flex px-3 gap-2 h-24 items-center">
                    <img src="https://github.com/YuriLFS.png" alt="Foto Usuário" className="rounded-full w-12 h-12" />
                    <div className="w-full">
                        <div className="flex gap-1 justify-between">
                            <div className="flex gap-2">
                                <h2 className="font-medium truncate text-left w-20">{ApelidoUsuario}</h2>
                                <h3 className="truncate text-left w-20">@{NomeUsuario}</h3>
                                <h4 className="truncate text-left w-36">{formattedDate}</h4>
                            </div>
                        </div>
                        <div className="truncate w-[38vh]">
                            <p>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdadsasdasdasdasdasdasdasdasdasdasdasdadasdasdasdasdasdasd</p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    )
}