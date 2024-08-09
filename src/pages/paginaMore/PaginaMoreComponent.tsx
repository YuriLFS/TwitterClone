import { Bell, DotsThreeCircle, Lock, PersonSimpleCircle, Question, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export default function PaginaMoreComponent() {

    const opcoes = [
        {
            icone: <User height={44} width={28}/>,
            titulo: "Sua conta",
            descricao: "Veja informações sobre a sua conta,baixe um arquivo com seus dados ou saiba mais sobre as opções de desativação de conta.",
            link: "https://trex-runner.com/",
        },
        {
            icone: <Lock height={44} width={28}/>,
            titulo: "Segurança e acesso à conta",
            descricao: "Gerencie a segurança da sua conta e monitore o uso deka,inclusive os aplicativos conectados a ela.",
            link: "http://www.hackertyper.com/",
        },
        {
            icone: <Bell height={44} width={28}/>,
            titulo: "Notificações",
            descricao: "Selecione os tipos de notificações que você recebe sobre atividades,interesses e recomendações.",
            link: "https://soundscape.world/",
        },
        {
            icone: <PersonSimpleCircle height={44} width={28}/>,
            titulo: "Acessibilidade",
            descricao: "Gerencie a forma como o conteúdo no site é exibido para você.",
            link: "https://clicking.toys/flip-grid/neat-nine/3-holes/",
        },
        {
            icone: <DotsThreeCircle height={44} width={28}/> ,
            titulo: "Recursos adicionais",
            descricao: "Verifique em outros lugares informações úteis para saber mais sobre os produtos e serviços do site.",
            link: "https://longdogechallenge.com/",
        },
        {
            icone: <Question height={44} width={28}/>,
            titulo: "Central de Ajuda",
            descricao: "Entre em contato com a nossa equipe para pedir informações.",
            link: "https://www.youtube.com/shorts/BkTo6KpulqE",
        },
    ]

    return(
        <div>
            <div className="p-3">
                <input className="rounded-full bg-gray-600/50 w-full px-4 py-2" placeholder="Buscar configuração"/>
            </div>
            <div className="max-lg:max-h-[80Vh] overflow-auto">                
                {opcoes.map((opcao, index) => {
                    return(
                        <Link key={index} target="_blank" to={opcao.link}>
                            <button className="flex p-5 gap-7 h-28 w-full max-lg:mb-16">
                                <div className="flex">
                                    {opcao.icone}
                                </div>
                                <div className="text-left">
                                    <h1>{opcao.titulo}</h1>
                                    <p className="text-gray-500">{opcao.descricao}</p>
                                </div>                    
                            </button>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}