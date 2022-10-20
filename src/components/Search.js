import React, {useState} from 'react'
import Exercise from './Exercise';
import Link from "react-router-dom";

function Search() {
  
  const [search,setSearch] = useState("");
  
  

  <Exercise search={search} />
  
  return (
    <section className='search-container'>
      <div className='search-heading'>
        <h1>Search Workouts:</h1>
        <input type="search" placeholder="Search..." onChange={e =>setSearch(e.target.value) }/>
        <button >Search</button>
        </div> 



        
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
         <div class="btn-group" role="group">
           <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Muscle Groups
           </button>
           <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/exercises">Core</a></li> 
              <li><a class="dropdown-item" href="/exercises">Back</a></li>
              <li><a class="dropdown-item" href="/exercises">Legs</a></li>
              <li><a class="dropdown-item" href="/exercises">Arms</a></li>
            </ul>
          </div>
        </div>
     </section>
  )
}

export default Search