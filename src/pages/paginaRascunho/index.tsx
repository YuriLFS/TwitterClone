import { PaperPlaneRight } from "@phosphor-icons/react";
import { Info } from "lucide-react";
import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  photo: string;
  lastMessage: string;
}

interface Message {
    senderId: number;
    receiverId: number;
    text: string;
    isSender: boolean;
}

export default function PaginaRascunho() {
    const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

    const contacts = [
        { id: 1, name: 'João Silva', photo: 'url_para_foto_de_joao_silva.jpg', lastMessage: 'Olá, como vai?' },
        { id: 2, name: 'Maria Oliveira', photo: 'url_para_foto_de_maria_oliveira.jpg', lastMessage: 'Tudo bem, obrigado!' },
        // Adicione mais contatos conforme necessário
    ];

    const messages: Message[] = [
        { senderId: 1, receiverId: 2, text: 'Hello!', isSender: true },
        { senderId: 2, receiverId: 1, text: 'Hi there!', isSender: false },
        // Adicione mais mensagens conforme necessário
    ];
    
    return (
        <div className="flex">
          {/* Coluna esquerda - Lista de contatos */}
          <div className="w-1/4 p-4 overflow-y-auto">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    onClick={() => setSelectedContact(contact)}
                    className="bg-transparent p-4 cursor-pointer hover:border"
                >
                    <img src={contact.photo} alt={contact.name} className="h-12 w-12 rounded-full mr-4" />
                    <div>
                    <p>{contact.name}</p>
                    <p className="text-sm text-gray-500">{contact.lastMessage}</p>
                    </div>
                </div>
            ))}
          </div>
    
          {/* Coluna direita - Conversa selecionada */}
          <div className={`w-3/4 p-4 border-b border-gray-600 px-3 ${selectedContact ? '' : 'hidden'}`}>
            <div className="flex justify-between text-lg">
                <h1 className="font-medium">{selectedContact?.name}</h1>
                <Info />
            </div>
            
            <div>
                <div className="flex flex-col items-center justify-center w-full pb-10">
                    <img src={selectedContact?.photo} alt={selectedContact?.name} className="h-24 w-24 rounded-full mb-4" />
                    <p>{selectedContact?.name}</p>
                    <p>@</p>
                    <div className="flex w-full justify-center">
                        <div className="flex text-gray-500 gap-2">
                            <p>Ingressou em Julho de 2024</p>
                            <p>•</p>
                            <p>9999.999 seguidores</p>
                        </div>
                    </div>
                </div>

                {/* Simulação de histórico de conversa */}
                {messages.map((message, index) => (
                    <div key={index} className={`mb-4 ${message.isSender ? 'justify-end' : 'justify-start'} mt-2`}>
                    {/* <img src={message.isSender ? selectedContact?.photo : 'url_para_foto_do_receptor.jpg'} alt={`${message.isSender ? selectedContact?.name : 'Receptor'}`} className="h-6 w-6 rounded-full inline-block mr-2" /> */}
                        <p className="inline-block bg-azul-twitter rounded-r-lg rounded-tl-lg px-2 py-1">{message.text}</p>
                    </div>
                ))}

            </div>


            <div className="flex items-center space-x-2">
                <input type="text" placeholder="Digite sua mensagem..." className="bg-transparent pt-1 px-2 border text-nowrap overflow-hidden resize-none border-azul-twitter rounded-full w-full h-9 focus:outline-none" />
                <button>
                    <PaperPlaneRight className="text-azul-twitter w-6 h-6" weight="fill"/>
                </button>
            </div>
          </div>
        </div>
    );
}