import { useEffect, useState } from "react";
import TimeLineBody from "../../components/timeLineBody";
import TimeLineHeader from "../../components/timeLineHeader";

interface Post {
    id: string;
    ApelidoUsuario: string;
    NomeUsuario: string;
    QuantComentarios: number;
    QuantRePostagem: number;
    QuantCurtidas: number;
    FotoPerfil: string;
    Tweet: string;
}

export default function PaginaPrincipalComponente({}: Post) {

    const [posts, setPosts] = useState<Post[]>([]);
    const [userPost, setUserPost] = useState<string>(''); // Estado para a publicação do usuário

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/post');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    return (
        <div className="col-span-4">
            {/* Renderizando a publicação do usuário */}
            <TimeLineHeader onPostChange={setUserPost} />

            {/* Renderizando a publicação do usuário */}
            {userPost && (
                <TimeLineBody
                    key={`user-post-${Math.random()}`} // Gerando uma chave única para evitar avisos do React
                    FotoPerfil="https://github.com/YuriLFS.png"
                    ApelidoUsuario="Nome"
                    NomeUsuario="Usuário"
                    QuantComentarios={0}
                    QuantCurtidas={0}
                    QuantRePostagem={0}
                >
                    {userPost}
                </TimeLineBody>
            )}

            {/* Timeline de outras postagens */}
            <div className="overflow-y-auto max-h-[calc(81vh-60px)]">
                {posts.map(post => (
                    <TimeLineBody
                        key={post.id}
                        FotoPerfil={post.FotoPerfil}
                        ApelidoUsuario={post.ApelidoUsuario}
                        NomeUsuario={post.NomeUsuario}
                        QuantComentarios={post.QuantComentarios}
                        QuantCurtidas={post.QuantCurtidas}
                        QuantRePostagem={post.QuantRePostagem}
                    >
                        {post.Tweet}
                    </TimeLineBody>
                ))}
            </div>
        </div>
    );
}
