import { Pagination,PaginationContent,PaginationItem } from "@/components/ui/pagination"
import { useState } from "react"
import BodyNotifications from "./bodyNotifications";
// import BodyMentions from "./bodyMentions";

export default function NotificationsHeader() {
    const [activeTab, setActiveTab] = useState("todos");

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <Pagination>
                <PaginationContent className="text-center py-2 border-b border-gray-600 w-full"> {/* grid grid-cols-2 */}
                    <PaginationItem className="w-full text-center">
                        <button 
                            onClick={() => handleTabClick("todos")} 
                            className={`font-medium text-lg ${activeTab === "todos" ? "underline text-azul-twitter" : ""}`}
                        >
                            Todos
                        </button>
                    </PaginationItem>
                    {/* <PaginationItem>
                        <button 
                            onClick={() => handleTabClick("menções")} 
                            className={`font-medium text-lg ${activeTab === "menções" ? "underline text-azul-twitter" : ""}`}
                        >
                            Menções
                        </button>
                    </PaginationItem> */}
                </PaginationContent>
            </Pagination>
            {activeTab === "todos" && (
                <BodyNotifications ApelidoUsuario="aaaaa" NomeUsuario="aaaaaa" QuantComentarios={2} QuantCurtidas={1} QuantRePostagem={0} FotoPerfil="https://github.com/YuriLFS.png"/>
            )}
            {/* {activeTab === "menções" && (
                <BodyMentions />
            )} */}
        </>
    );
}