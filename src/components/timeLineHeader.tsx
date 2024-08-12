import { X } from "@phosphor-icons/react";
import { ImagePlus } from "lucide-react";
import { useState } from "react";

interface TimeLineHeaderProps {
    onPostChange?: (text: string) => void; // Adicionando a propriedade opcional onPostChange
}

export default function TimeLineHeader({ onPostChange }: TimeLineHeaderProps) {

    const [imageUrl, setImageUrl] = useState('');
    const [tweetText, setTweetText] = useState('')

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Garante que o arquivo existe antes de prosseguir
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                setImageUrl(event.target?.result as string); // Atualiza a URL da imagem
            };
            reader.readAsDataURL(file); // Lê o arquivo como Data URL
        }
    };

    const handleCloseImage = () => {
        setImageUrl('')
    }

    const publishTweet = async () => {
        try {
          const response = await fetch('http://192.168.3.112:3000/post', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ApelidoUsuario: "Usuário",
              NomeUsuario: "Usuário",
              QuantComentarios: 0,
              QuantRePostagem: 0,
              QuantCurtidas: 0,
              FotoPerfil: "https://github.com/YuriLFS.png",
              Tweet: tweetText
            })
          });
      
          if (!response.ok) {
            throw new Error('Erro ao publicar o tweet');
          }      
          // Chamando onPostChange com o texto da postagem
          if (onPostChange) {
            onPostChange(tweetText);
          }
        } catch (error) {
          if (error instanceof Error) {
            console.log(error.message);
          } else {
            console.log("Erro desconhecido");
          }
        }
    };
      

    return(
        <div className="border-b border-gray-600 max-lg:hidden">
            <div className="px-3 py-3">
                <div className="flex pb-2 gap-1">
                    <img src={"https://github.com/YuriLFS.png"} alt="Foto Usuário" className="rounded-full w-14 h-14" />
                    <div className="space-y-2 w-full">
                        <textarea value={tweetText} onChange={(e) => setTweetText(e.target.value)} maxLength={655} className="w-full h-20 px-1 resize-none break-before-all bg-transparent focus:outline-none" placeholder="Whats happening?"/>
                        {imageUrl && (
                            <div>                                
                                <button onClick={handleCloseImage} className="absolute rounded-full bg-gray-600 bg-opacity-50 hover:bg-opacity-100 w-6 h-6 flex items-center justify-center">
                                    <X />
                                </button>
                                
                                <img className="max-w-96 max-h-64 rounded-lg" src={imageUrl}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between">
                    <input type="file" accept="image/*" hidden onChange={handleFileSelect} />
                    <button onClick={() => {
                        const fileInput = document.querySelector('input[type="file"]');
                        if (fileInput instanceof HTMLInputElement) {
                            fileInput.click();
                        }
                    }} aria-label="Add image" className="pl-16 hover:text-blue-500">
                        <ImagePlus />
                    </button>
                    <button aria-label="Publish tweet" className="w-24 h-9 bg-blue-500 rounded-full text-white font-semibold hover:brightness-90" onClick={publishTweet}>Tweet</button>
                </div>
            </div>
        </div>
    )
}