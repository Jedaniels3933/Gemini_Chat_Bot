import React from 'react'
import NewBanner from '../assets/NewBanner.jpg';




function Header() {
    return (
        <header>
         
         <h1 style={{color: "red"}}>Gemini AI Upload Bot </h1> 
        <h1 style={{color: 'blue'}}>Ask questions about your files </h1>
        <h2 style={{color: 'blue'}}>Upload a file and ask questions about its content.</h2>
        <p>Powered by Gemini Flash 1.5</p>

     

        <div class="bg-blue-500 md:bg-green-500 ...">
        <img
          src={NewBanner}
          alt="Gemini AI"
          className="mt-6 mx-auto w-full max-w-3xl rounded-lg shadow-lg"
        />
</div>




        
    

        </header>
    )
    }
export default Header;

