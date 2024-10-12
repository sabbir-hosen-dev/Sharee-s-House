import { BsWhatsapp } from "react-icons/bs"; 
import React from 'react'

function WhatsappIcon() {
  return (
    <div className='absolute bottom-10 right-10'>
        <a target="_blank" href="https://wa.me/01789282050" rel="noreferrer">
        <BsWhatsapp className="text-green-500 text-4xl cursor-pointer transition-all hover:text-green-300 " />
        </a>
    </div>
  )
}

export default WhatsappIcon
