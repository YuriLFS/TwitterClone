import Layout from "@/components/layout";
import PaginaPrincipalComponente from "./paginaPrincipalComponent";

export default function PaginaPrincipal() {
    return(
        <Layout NomeDaPagina="Home">
            <PaginaPrincipalComponente 
                ApelidoUsuario=""
                FotoPerfil=""
                NomeUsuario=""
                QuantComentarios={0}
                QuantCurtidas={0}
                QuantRePostagem={0}
                Tweet=""
                id=""
                key={0}
            />
        </Layout>
    )
}