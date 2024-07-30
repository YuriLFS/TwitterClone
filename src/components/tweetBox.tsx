import { X } from "@phosphor-icons/react"
import { Card,CardContent,CardFooter,CardHeader,CardTitle } from "./ui/card"
import { ImagePlus } from "lucide-react";

interface TweetBoxProps {
    onClose: () => void; 
    isOpen: boolean;
}

export default function TweetBox({ onClose , isOpen }:TweetBoxProps) {

    const handleClose = () => {
        onClose(); 
    };

    return(
        <>
            {isOpen && (
                <div className="fixed bg-black bg-opacity-50 inset-0 fi z-10"></div>
            )}
            <Card className="w-[85vh] bg-preto-twitter text-white border-gray-600 border absolute z-40">            
                <CardHeader>
                    <CardTitle className="flex justify-between">
                        <p>Tweet</p>                   
                        <button onClick={handleClose}>
                            <X />
                        </button>                    
                    </CardTitle>                          
                </CardHeader>            
                <CardContent>
                    <textarea maxLength={655} className="w-[78vh] h-56 rounded-md px-1 border-gray-600 border resize-none break-before-all bg-transparent focus:outline-none"/>
                </CardContent>
                <CardFooter className="flex justify-end">
                    {/* <button className="hover:text-azul-twitter">
                        <ImagePlus />
                    </button> */}
                    {/* Desativado */}
                    <button className="w-20 h-10 bg-azul-twitter rounded-full text- font-semibold text-white hover:brightness-90">Publicar</button>
                </CardFooter>
            </Card>
        </> 
    )
}