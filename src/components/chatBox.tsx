export default function ChatBox() {
    return(
        <div className="p-2 h-[68vh] w-full overflow-y-auto grid grid-rows-5">
            {/* caixa de fala do usuario */}
            
            <div className="relative w-full row-span-1">
                <div className="absolute right-0 max-w-96 overflow-hidden whitespace-normal rounded-l-full w-fit rounded-tr-full p-3 bg-azul-twitter">
                    Um texto muito longo que deve ser cortado e quebrado para a próxima linha dentro da caixa.
                </div>
            </div>
            

            {/* caixa de fala resposta */}
           
            <div className="relative w-full row-span-1">
                <div className="absolute left-0 max-w-96 overflow-hidden whitespace-normal rounded-r-full w-fit rounded-tl-full p-3 bg-gray-500">
                    Um texto muito longo que deve ser cortado e quebrado para a próxima linha dentro da caixa.
                </div>
            </div>
            
        </div>
    )
}