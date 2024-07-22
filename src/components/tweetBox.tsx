import { X } from "@phosphor-icons/react"
import { Card,CardContent,CardFooter,CardHeader,CardTitle } from "./ui/card"

export default function TweetBox() {

    return(
        <Card className="w-[85vh] bg-preto-twitter text-white border-gray-600 border">            
            <CardHeader>
                <CardTitle className="flex justify-between">
                    <p>Tweet</p>                   
                    <button>
                        <X />
                    </button>                    
                </CardTitle>                          
            </CardHeader>            
            <CardContent>
                <textarea className="w-[78vh] h-56 rounded-md px-1 border-gray-600 border resize-none break-before-all bg-transparent focus:outline-none"/>
            </CardContent>
            <CardFooter className="flex justify-end">
                <button className="w-20 h-10 bg-azul-twitter rounded-full text- font-semibold text-white hover:brightness-90">Publicar</button>
            </CardFooter>
        </Card>
    )
}