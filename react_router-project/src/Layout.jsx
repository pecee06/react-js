import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      {/* Outlet works like a variable. Header & Footer are rendered once and in between the content changes in every section*/}
      <Footer/>
    </>
  )
}