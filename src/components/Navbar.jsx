function Navbar(){

    return(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
    
    <div className="container">
    
    <a href="#" className="navbar-brand fw-bold">
    PromptAI
    </a>
    
    <button
    className="navbar-toggler"
    data-bs-toggle="collapse"
    data-bs-target="#navmenu"
    >
    <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navmenu">
    
    <ul className="navbar-nav ms-auto">
    
    <li className="nav-item">
    <a href="#features" className="nav-link">Features</a>
    </li>
    
    <li className="nav-item">
    <a href="#pricing" className="nav-link">Pricing</a>
    </li>
    
    <li className="nav-item">
    <a href="#faq" className="nav-link">FAQ</a>
    </li>
    
    </ul>
    
    <button className="btn btn-primary ms-3">
    Get Started
    </button>
    
    </div>
    
    </div>
    
    </nav>
    
    )
    
    }
    
    export default Navbar