function NavBar(){
    return(
        <div className="nav">
            <nav class="navbar navbar-expand-lg navbar">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link" href="/monsters">Monsters</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/creatures">Creatures</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/materials">Materials</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/equipment">Equipment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/treasure">Treasure</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}
export default NavBar;