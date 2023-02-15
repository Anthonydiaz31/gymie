import React from 'react'
import headerIMG from "../pictures/header-weights.jpg"


function Header() {
  return (
    <header className='header-container'>
        <div className='header-left'>
           <h1>Gym<span>ie</span></h1>
           <p>Find your new favorite workout! <br />
            Search through <span>thousands</span> of exercises showing what equipment you'll need,  <br /> proper form, and which muscles you are targeting.
           </p>
           </div>
        <div className='header-right'>
            <img src={headerIMG} alt="man-lifting-weights" />
        </div>
        
    </header>
  )
}

export default Header