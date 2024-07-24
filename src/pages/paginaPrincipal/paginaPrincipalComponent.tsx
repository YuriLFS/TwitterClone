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

    const fetchPosts = async () => {
        const response = await fetch('http://localhost:3000/post');
        const data = await response.json();
        return data;
    };

    useEffect(() => {
        fetchPosts().then(data => setPosts(data));
    }, []);

    return(
        <div className="col-span-4">
            {/* Onde o usuário vai escrever e postar as publicações */}
            <TimeLineHeader />
            
            {/* TimeLine de outros posts */}
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
    )
}