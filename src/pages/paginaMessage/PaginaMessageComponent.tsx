import ChatBox from "@/components/chatBox";
import ChatBoxBottom from "@/components/chatBoxBottom";
import ChatBoxHeader from "@/components/chatBoxHeader";
import MessageBody from "@/components/messageBody";

export default function PaginaMessageComponent() {
    return(        
        <div className="grid grid-cols-3 h-full">
            <div className="overflow-auto max-h-[93vh] col-span-1">
                <MessageBody ApelidoUsuario="Usuario1" NomeUsuario="Arroba1"/>
                <MessageBody ApelidoUsuario="Usuario2" NomeUsuario="Arroba2"/>
                <MessageBody ApelidoUsuario="Usuario3" NomeUsuario="Arroba3"/>
                <MessageBody ApelidoUsuario="Usuario4" NomeUsuario="Arroba4"/>
                <MessageBody ApelidoUsuario="Usuario5" NomeUsuario="Arroba5"/>
                <MessageBody ApelidoUsuario="Usuario6" NomeUsuario="Arroba6"/>
                <MessageBody ApelidoUsuario="Usuario7" NomeUsuario="Arroba7"/>
                <MessageBody ApelidoUsuario="Usuario8" NomeUsuario="Arroba8"/>
                <MessageBody ApelidoUsuario="Usuario9" NomeUsuario="Arroba9"/>
            </div>
            <div className="col-span-2 border-l border-gray-600">
                <ChatBoxHeader />
                <ChatBox />
                <ChatBoxBottom />
            </div>
        </div>    
    )
}