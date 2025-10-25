import { Outlet } from "react-router-dom"
import  Footer  from "./Footer"
import BackToTopButton from "../ux/BackTop"
import Header from "./Header"

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet />
            <Footer />
            <BackToTopButton />
        </>
    )
}