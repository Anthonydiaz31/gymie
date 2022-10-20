import React from 'react'

function Navbar() {
  return (
 <nav class="navbar mx-5">
  <div class="container-fluid">
    <a class="navbar-brand" href='/'>Gymie</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-light" type="submit">Search</button>
    </form>
  </div>
</nav>
    
  )
}

export default Navbar