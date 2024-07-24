import { useState } from "react";
import { Pagination, PaginationContent, PaginationItem } from "./ui/pagination";

export default function BodyPerfil() {

    const [activeTab, setActiveTab] = useState("publicacoes");

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return(
        <div className="w-full">            
            <Pagination className="py-5">
                <PaginationContent className="grid grid-cols-4 divide-x text-center py-2 border-b border-gray-600 w-full">
                    <PaginationItem>
                        <button 
                            onClick={() => handleTabClick("publicacoes")} 
                            className={`font-medium text-lg ${activeTab === "publicacoes" ? " border-b-2 w-44 pb-2 relative top-2 border-azul-twitter" : "pt-1"}`}
                        >
                            Publicações
                        </button>
                    </PaginationItem>
                    <PaginationItem>
                        <button 
                            onClick={() => handleTabClick("respostas")} 
                            className={`font-medium text-lg ${activeTab === "respostas" ? "border-b-2 w-44 pb-2 relative top-2 border-azul-twitter" : "pt-1"}`}
                        >
                            Respostas
                        </button>
                    </PaginationItem>
                    <PaginationItem>
                        <button 
                            onClick={() => handleTabClick("midia")} 
                            className={`font-medium text-lg ${activeTab === "midia" ? "border-b-2 w-44 pb-2 relative top-2 border-azul-twitter" : "pt-1"}`}
                        >
                            Mídia
                        </button>
                    </PaginationItem>
                    <PaginationItem>
                        <button 
                            onClick={() => handleTabClick("curtidas")} 
                            className={`font-medium text-lg ${activeTab === "curtidas" ? "border-b-2 w-44 pb-2 relative top-2 border-azul-twitter" : "pt-1"}`}
                        >
                            Curtidas
                        </button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            {activeTab === "publicacoes" && (
                <div className="flex items-center text-center justify-center">Nada aqui por enquanto</div>
            )}
            {activeTab === "respostas" && (
                <div className="flex items-center text-center justify-center">Nada aqui por enquanto</div>
            )}
            {activeTab === "midia" && (
                <div className="flex items-center text-center justify-center">Nada aqui por enquanto</div>
            )}
            {activeTab === "curtidas" && (
                <div className="flex items-center text-center justify-center">Nada aqui por enquanto</div>
            )}
        
        </div>
    )
}