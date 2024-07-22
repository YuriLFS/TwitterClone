import { PaperPlaneRight } from "@phosphor-icons/react";

export default function ChatBoxBottom() {
    return(        
        <div className="flex absolute bottom-2 pl-1">
            <textarea className="bg-transparent pt-1 px-2 border text-nowrap overflow-hidden resize-none border-azul-twitter rounded-full w-[100vh] h-9 focus:outline-none"/>
            <button>
                <PaperPlaneRight className="text-azul-twitter w-6 h-6" weight="fill"/>
            </button>
        </div>    
    )
}