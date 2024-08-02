import MessageBody from "@/components/messageBody";
import { useEffect, useState } from "react";
import ChatBoxComponent from "@/components/chatBoxComponent";

interface Post {
    ApelidoUsuario: string;
    NomeUsuario: string;
    FotoPerfil: string,
}

export default function PaginaMessageComponent({}:Post) {
    
    const [messages, setMessages] = useState<Post[]>([]);

    const fetchMessage = async () => {
        const response = await fetch('http://localhost:3000/chat');
        const data = await response.json();
        return data;
    }

    useEffect(() => {
        fetchMessage().then(data => setMessages(data))
    }, []);

    return(        
        <div className="grid grid-cols-3 h-full">
            <div className="overflow-auto max-h-[93vh] col-span-1">
                {messages.map((messages, index) => (
                <MessageBody key={index} ApelidoUsuario={messages.ApelidoUsuario} NomeUsuario={messages.NomeUsuario} FotoPerfil={messages.FotoPerfil}/>
                ))}
            </div>
            <ChatBoxComponent ApelidoUsuario="Usuario" NomeUsuario="Usuario" tituloUsuario="Usuario"/>
        </div>    
    )
}