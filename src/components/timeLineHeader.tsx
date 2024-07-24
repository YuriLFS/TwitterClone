import { ImagePlus } from "lucide-react";

export default function TimeLineHeader() {

    return(
        <div className="border-b border-gray-600">
            <div className="px-3 py-3">
                <div className="flex pb-2 gap-1">
                    <img src="https://github.com/YuriLFS.png" alt="Foto Usuário" className="rounded-full w-14 h-14" />
                    <textarea maxLength={655} className="w-full h-20 px-1 resize-none break-before-all bg-transparent focus:outline-none" placeholder="Whats happening?"/>
                </div>
                <div className="flex justify-between">
                    <button className="pl-16 hover:text-azul-twitter">
                        <ImagePlus />
                    </button>
                    <button className="w-24 h-9 bg-azul-twitter rounded-full text- font-semibold text-white hover:brightness-90">Tweet</button>
                </div>
            </div>
        </div>
    )
}