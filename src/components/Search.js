import React, {useState} from 'react'
import Exercise from './Exercise';

function Search() {
  
  const [search,setSearch] = useState("");

  function handleChange(e) {
    const {value} = e.target;
    setSearch(value)
  }

  
  
  
  return (
    <section className='search-container'>
      <div className='search-heading'>
        <h1>Search Workouts:</h1>
        <input type="search" placeholder="Search..." />
        <button >Search</button>
        </div> 



        
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
         <div class="btn-group" role="group">
           <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Muscle Groups
           </button>
           <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Core</a></li>
              <li><a class="dropdown-item" href="/">Back</a></li>
              <li><a class="dropdown-item" href="/">Legs</a></li>
              <li><a class="dropdown-item" href="/">Arms</a></li>
            </ul>
          </div>
        </div>
     </section>
  )
}

export default Search