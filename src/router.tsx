import { RouteObject, createBrowserRouter } from "react-router-dom"
import PaginaPrincipal from "./pages/paginaPrincipal"
import PaginaExplore from "./pages/paginaExplore"
import PaginaNotifications from "./pages/paginaNotificacations"
import PaginaMessage from "./pages/paginaMessage"
import PaginaRascunho from "./pages/paginaRascunho"
import PaginaNotFound from "./pages/paginaNotFound"
import PaginaPerfil from "./pages/paginaProfile"
import PaginaMore from "./pages/paginaMore"

const routes: RouteObject[] = [
    {
        path: "/",
        element: <PaginaPrincipal />,
    },
    // {
    //     path: "/explore",
    //     element: <PaginaExplore />
    // },
    {
        path: "/notifications",
        element: <PaginaNotifications />
    },
    {
        path: "/message",
        element: <PaginaMessage />
    },
    // {
    //     path: "/bookmarks",
    //     element: <PaginaNotifications />
    // },
    // {
    //     path: "/lists",
    //     element: <PaginaNotifications />
    // },
    {
        path: "/profile",
        element: <PaginaPerfil />
    },
    {
        path: "/more",
        element: <PaginaMore />
    },
    {
        path: "/rascunho",
        element: <PaginaRascunho />
    },
    {
        path: "*",
        element: <PaginaNotFound />
    }

]

export const router = createBrowserRouter(routes)