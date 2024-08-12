import { useEffect, useState } from "react";
import { Info } from "lucide-react";
import { ArrowLeft, PaperPlaneRight } from "@phosphor-icons/react";

interface Chat {
    id: string,
    ApelidoUsuario: string,
    NomeUsuario: string,
    FotoPerfil: string,
    isSender: boolean,
    descricao: string,
    seguidores: number,
    mensagemRecebida: string,
    mensagemRecebida2: string,
    mensagemEnviada: string,
    mensagemEnviada2: string,
    dataConversa: string,
}

export default function PaginaMessageComponent() {
    
    const [chat, setChat] = useState<Chat[]>([]);
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);
    const [showMessages, setShowMessages] = useState(true)

    const fetchChat = async () => {
        const response = await fetch('http://192.168.3.112:3000/chat');
        const data = await response.json();
        return data;
    }
    
    useEffect(() => {
        fetchChat().then(data => setChat(data));
    }, []);

    const handleChatClick = (chatItem: Chat) => {
        setSelectedChat(chatItem);
        setShowMessages(false);
    };

    const handleBackToMessages = () => {
        setSelectedChat(null); // Limpa a mensagem selecionada
        setShowMessages(true); // Mostra o menu de mensagens
    };
    
    return (
        <>
            <div className="grid grid-cols-3 h-[91Vh] max-lg:hidden">
                <div className="w-full overflow-y-auto">          
                    {chat.map((chatItem, index) => (
                        <div
                            key={index}
                            className={`bg-transparent border-b border-gray-600 flex p-4 cursor-pointer`}
                            onClick={() => handleChatClick(chatItem)}
                        >
                            <img src={chatItem.FotoPerfil} alt={chatItem.ApelidoUsuario} className="h-12 w-12 object-cover rounded-full mr-4" />
                            <div className="w-full">
                                <div className="flex gap-2 max-w-72 truncate">
                                    <p>{chatItem.ApelidoUsuario}</p>
                                    <p className="text-gray-500">@{chatItem.NomeUsuario}</p>
                                    <p className="text-gray-500">•</p>
                                    <p className="text-gray-500">{chatItem.dataConversa}</p>                                                                
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 truncate max-w-72">{chatItem.mensagemEnviada}</p>                                
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full col-span-2 border-l border-gray-600">
                    {selectedChat && (
                        <div>
                            <div className="flex-col justify-center text-center items-center border-b border-gray-600 pb-10">
                                <div className="flex justify-between p-3">
                                    <h2 className="font-medium text-lg">{selectedChat.ApelidoUsuario}</h2>
                                    <Info />
                                </div>
                                <div className="flex justify-center">
                                    <img src={selectedChat.FotoPerfil} alt={selectedChat.ApelidoUsuario} className="h-16 w-16 rounded-full" />
                                </div>
                                <p className="font-medium">{selectedChat.ApelidoUsuario}</p>
                                <p className="text-gray-500">@{selectedChat.NomeUsuario}</p>
                                <p>{selectedChat.descricao}</p>
                                <div className="flex text-center justify-center gap-2 text-gray-500">
                                    <p>ingressou em junho de 2024</p>
                                    <p>•</p>
                                    <p>{selectedChat.seguidores} seguidores</p>
                                </div>
                            </div>
                            <div className="p-2 max-h-96 overflow-auto">
                                <div className={`flex justify-end pb-1 ${selectedChat.mensagemRecebida ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-azul-twitter px-2 p-1 max-w-80 rounded-l-xl rounded-tr-xl">{selectedChat.mensagemRecebida}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-end">8:45 AM</p> */}
                                    </div>
                                </div>

                                <div className={`flex justify-start pb-1 ${selectedChat.mensagemEnviada ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-gray-600 px-2 p-1 max-w-80 rounded-r-xl rounded-tl-xl">{selectedChat.mensagemEnviada}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-start">8:46 AM</p> */}
                                    </div>
                                </div>
                                
                                <div className={`flex justify-end pb-1 ${selectedChat.mensagemRecebida2 ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-azul-twitter px-2 p-1 max-w-80 rounded-l-xl rounded-tr-xl">{selectedChat.mensagemRecebida2}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-end">8:48 AM</p> */}
                                    </div>
                                </div>

                                <div className={`flex justify-start pb-1 ${selectedChat.mensagemEnviada2 ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-gray-600 px-2 p-1 max-w-80 rounded-r-xl rounded-tl-xl">{selectedChat.mensagemEnviada2}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-start">8:53 AM</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-3 flex items-center justify-center gap-1 pl-3 pt-3">
                                <input type="text" className="w-[98vh] bg-transparent rounded-3xl border border-azul-twitter" />
                                <button>
                                    <PaperPlaneRight className="text-azul-twitter" size={23} weight="fill"/>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


            {/* Versão Mobile */} {/* Eu poderia ter feito um pouco melhor no componente de cima e tals,mas eu to com fome,estressado e com alergia,então não quero pensar tanto */}
            <div className="max-lg:block hidden">
                {showMessages ? (
                    <div className={`w-72 max-h-[92Vh] overflow-y-auto ${selectedChat ? "hidden" : ""}`}>         
                        {chat.map((chatItem, index) => (
                            <div
                                key={index}
                                className={`bg-transparent border-b border-gray-600 flex p-4 cursor-pointer`}
                                onClick={() => handleChatClick(chatItem)}
                            >
                                <img src={chatItem.FotoPerfil} alt={chatItem.ApelidoUsuario} className="h-12 w-12 rounded-full mr-4" />
                                <div className="w-52">
                                    <div className="flex gap-2 max-w-72 truncate text-sm">
                                        <p>{chatItem.ApelidoUsuario}</p>
                                        <p className="text-gray-500">@{chatItem.NomeUsuario}</p>
                                        <p className="text-gray-500">•</p>
                                        <p className="text-gray-500">{chatItem.dataConversa}</p>                                                                
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 truncate max-w-72">{chatItem.mensagemEnviada}</p>                                
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                <div className="w-full col-span-2 border-l border-gray-600">
                    {selectedChat && (
                        <div>
                            <div className="flex justify-between pt-4 pb-2 px-4">
                                <div className="flex gap-3">
                                    <button onClick={handleBackToMessages}>
                                        <ArrowLeft width={24} height={24} weight="bold"/>
                                    </button>
                                    <div className="flex gap-3 items-center">
                                        <img src={selectedChat.FotoPerfil} className="rounded-full w-7" alt="" />
                                        <p className="font-medium">
                                            {selectedChat.ApelidoUsuario}
                                        </p>
                                    </div>
                                </div>
                                <Info />
                            </div>
                            <div className="p-2 max-h-96 overflow-auto space-y-2">
                                <div className={`flex justify-end pb-1 ${selectedChat.mensagemRecebida ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-azul-twitter px-2 p-1 max-w-80 rounded-l-xl rounded-tr-xl">{selectedChat.mensagemRecebida}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-end">8:45 AM</p> */}
                                    </div>
                                </div>

                                <div className={`flex justify-start pb-1 ${selectedChat.mensagemEnviada ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-gray-600 px-2 p-1 max-w-80 rounded-r-xl rounded-tl-xl">{selectedChat.mensagemEnviada}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-start">8:46 AM</p> */}
                                    </div>
                                </div>
                                
                                <div className={`flex justify-end pb-1 ${selectedChat.mensagemRecebida2 ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-azul-twitter px-2 p-1 max-w-80 rounded-l-xl rounded-tr-xl">{selectedChat.mensagemRecebida2}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-end">8:48 AM</p> */}
                                    </div>
                                </div>

                                <div className={`flex justify-start pb-1 ${selectedChat.mensagemEnviada2 ? "" : "hidden"}`}>
                                    <div>
                                        <p className="bg-gray-600 px-2 p-1 max-w-80 rounded-r-xl rounded-tl-xl">{selectedChat.mensagemEnviada2}</p>
                                        {/* <p className="text-xs text-gray-500 flex justify-start">8:53 AM</p> */}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 flex items-center justify-center gap-1 pl-3 pt-3">
                                <input type="text" className="w-60 bg-transparent rounded-3xl border border-azul-twitter" />
                                <button>
                                    <PaperPlaneRight className="text-azul-twitter" size={23} weight="fill"/>
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                )}
            </div>
        </>
    );
}
