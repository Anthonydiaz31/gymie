import React from 'react'
import name from "../pictures/exercises.png"
import muscle from "../pictures/muscle.png"
import equipment from "../pictures/bell.png"

function Icons() {
  return (
    <section className='icon-container'>   
          <div className='icons'>
            <img src={name} alt="exercise-name" />
            <p>Filter through thousands of workouts sorted by name...</p>
          </div>
          <div className='icons'>
            <img src={muscle} alt="muscle-name" />
            <p>Filter through thousands of workouts sorted by muscle...</p>
            </div>
            <div className='icons'>
            <img src={equipment} alt="equipment-name" />
            <p>Filter through thousands of workouts sorted by equipment type...</p>
            </div>
            
    </section>
  )
}
export default Icons;