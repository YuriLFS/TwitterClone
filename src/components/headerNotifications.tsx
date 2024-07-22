import { Pagination,PaginationContent,PaginationItem,PaginationLink } from "@/components/ui/pagination"

export default function NotificationsHeader() {
    return(
        <Pagination>
            <PaginationContent className="grid grid-cols-2 text-center py-2 border-b border-gray-600 w-full">
                <PaginationItem className="border-r border-gray-600">
                    <button>
                        Todos 
                    </button> 
                </PaginationItem>
                <PaginationItem>
                    <button>
                        Menções
                    </button> 
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        // <div className="grid grid-cols-2 text-center border-b border-gray-600 py-2">
        //     <div className="border-r border-gray-600">
        //         <p className="underline text-azul-twitter">
        //             Todos
        //         </p>
        //     </div>
        //     <div >
        //         <p>
        //             Menções
        //         </p>
        //     </div>
        // </div>
    )
}