

const Navbar = ({setCategory}) => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary px-4 py-4 mx-2 my-2" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">News</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav gap-2px">
       <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("business")}></div>Business</li>
        <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div></li>
                 <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("health")}>Health</div></li>
         <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("science")}>Science</div></li>
 <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div></li>
      </ul>
    </div>
  </div>
</nav>


    
  )
}

export default Navbar


// {/* <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("business")}></div>Business</li>
//         <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div></li>
//         <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("health")}>Health</div></li>
//         <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("science")}>Science</div></li>
//         // <li className="nav-item"><div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div></li> */}