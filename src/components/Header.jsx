import React from 'react'
import NewBanner from '../assets/NewBanner.jpg';




function Header() {
    return (
        <header>
        <h1>Gemini Powered AI Chat Bot </h1>
        <h2>Ask questions about your files</h2>
        <p>Upload a file and ask questions about its content.</p>
        <p>Powered by Gemini AI</p>

     




        <img src={NewBanner} alt="Gemini AI" className="header-image" />
    

        </header>
    )
    }


export default Header;

