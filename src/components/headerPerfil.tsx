import { Calendar, MapPin } from "@phosphor-icons/react";
import { Button } from "./ui/button";

export default function HeaderPerfil() {

    const perfilData = new Date
    const dataFormatada = perfilData.toLocaleDateString('pt-BR',{
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    return(
        <div className="space-y-3">
            <div>
                <img className="h-36 w-full object-cover border-b border-preto-twitter" src="src/assets/leblanc.jpg" alt="Banner" />
                <div className="flex justify-between px-5">
                    <img className="rounded-full w-28 border border-preto-twitter absolute top-32" src="https://github.com/YuriLFS.png" alt="Foto Perfil" />
                    <div></div>
                    <div className="pt-3">
                        <Button className="rounded-full bg-transparent bg-azul-twitter hover:bg-azul-twitter/90">Editar Perfil</Button>
                    </div>
                </div>
            </div>
            <div className="px-5 space-y-2">
                <div>
                    <p className="text-3xl font-medium">Nome</p>
                    <p className="text-gray-400">@Usuario</p>
                </div>
                <div>
                    <p>Descrição grande para não dar tantas linhas e verificar até quando isso poe ficar a mostar na tela sera que da ver eqnuanto eu vejo vendo nao consigo maner pensamento minha mente da um devandeio alatorio de palavras talvez milk out side the bag out side milk bag ai prencisa ser amior,esta pouco ainda,tenho que deixar pelo menos 3 linhas para verificar isso aqui de forma correta,colovar umas virgulas e etc. acho que ja ta tudo certo por agora maios mais mais umpouqinho e chego acho</p>
                </div>
                <div className="text-gray-400 flex gap-5">
                    <div className="flex items-center gap-1">
                        <MapPin />
                        <p>Rio de Janeiro</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar />
                        <p>Entrou em {dataFormatada}</p>
                    </div>
                </div>
                <div className="text-gray-400 flex gap-5">
                    <p>00 Seguindo</p>
                    <p>00 Seguidores</p>
                </div>
            </div>
        </div>
    )
}