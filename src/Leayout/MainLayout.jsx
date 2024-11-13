import { Outlet } from "react-router-dom"
import Navber from "../Components/Navber/Navber"
import Footer from "../Components/Footer/Footer"
import WhatsappIcon from "../Components/WhatsAppIcon/WhatsappIcon"



function MainLayout() {
  return (
    <>
    <Navber />

    <WhatsappIcon />
     
     <div className="min-h-[calc(100vh-24px-56px-204px)]">
     <Outlet />
     </div>
    
    <Footer />
    </>
  )
}

export default MainLayout
