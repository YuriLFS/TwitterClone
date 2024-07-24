import { X } from "@phosphor-icons/react"
import { Card,CardContent,CardFooter,CardHeader,CardTitle } from "./ui/card"
import { ImagePlus } from "lucide-react";

interface TweetBoxProps {
    onClose: () => void; 
}

export default function TweetBox({ onClose }:TweetBoxProps) {

    const handleClose = () => {
        onClose(); 
    };

    return(
        <Card className="w-[85vh] bg-preto-twitter text-white border-gray-600 border">            
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
            <CardFooter className="flex justify-between">
                <button className="hover:text-azul-twitter">
                    <ImagePlus />
                </button>
                <button className="w-20 h-10 bg-azul-twitter rounded-full text- font-semibold text-white hover:brightness-90">Publicar</button>
            </CardFooter>
        </Card>    
    )
}