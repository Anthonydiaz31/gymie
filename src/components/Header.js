import React from 'react'
import headerIMG from "../pictures/header-weights.jpg"


function Header() {
  return (
    <header className='header-container'>
        <div className='header-left'>
           <h1>Gym<span>ie</span></h1>
           <p>Filter through thousands of workouts <br />
              sorted by name, muscle, or equipment!
           </p>
        </div>
        <div className='header-right'>
            <img src={headerIMG} alt="man-lifting-weights" />
        </div>
    </header>
  )
}

export default Header