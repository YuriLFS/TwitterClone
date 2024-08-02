import ChatBox from "./chatBox";
import ChatBoxBottom from "./chatBoxBottom";
import ChatBoxHeader from "./chatBoxHeader";

interface ChatBoxComponentProps {
    tituloUsuario:string,
    NomeUsuario:string,
    ApelidoUsuario:string,
}

export default function ChatBoxComponent({ApelidoUsuario,NomeUsuario,tituloUsuario}:ChatBoxComponentProps) {
    return(
        <div className="col-span-2 border-l border-gray-600">
                <ChatBoxHeader tituloUsuario={tituloUsuario} ApelidoUsuario={ApelidoUsuario} NomeUsuario={NomeUsuario}/>
                <ChatBox />
                <ChatBoxBottom />
            </div>
    )
}