import React, {useEffect, useState} from 'react'
import {apiOptions, fetchData} from "../utils/fetchData"

function Exercise() {
  const [search,setSearch] = useState("");
  const [exercises,setExercises] = useState([]);



const handleChange = async (e) => {
  setSearch(e.target.value);
  if (search) {
    const res = await fetchData("https://exercisedb.p.rapidapi.com/exercises", apiOptions);
      const filteredExercises = res.filter((exercise) => {
        return (
          exercise.bodyPart.toLowerCase().includes(search) || 
          exercise.id.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) || 
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
        )
  })
  setExercises(filteredExercises)
  }
}

 
  return (
    <div className='Exercise-container'>
      <h1> Exercise Results:      </h1>
      <input type="search" value={search} onChange={handleChange} placeholder="Search..." />
      
      <div className='exercise-cards'>
        {exercises.map((workout) => {
          let separateWords = workout.name.split(" ") ;
          let capsTitle = separateWords.map((word) => word.charAt(0).toUpperCase() + word.slice(1)+ " ")
          
          
          return (<>
            <h1>{capsTitle}</h1>
            <img src={workout.gifUrl} alt="gif" />
            <p>{workout.bodyPart.charAt(0).toUpperCase()  +workout.bodyPart.slice(1)}</p>
            <p>{workout.equipment.charAt(0).toUpperCase() + workout.equipment.slice(1)}</p>
            
          </>)
        })}
        
       
      </div>
    </div>
  )
}

export default Exercise