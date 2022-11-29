import React from 'react';
function HeaderFile() {
  return <header>
    <div className='logo'>
      <img className='header-img' alt="Original Trombones" src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png" />
    </div>
    <nav className="nav-bar">
      <ul>
        <li><a class="nav-link" href="#features">Features</a></li>
        <li><a class="nav-link" href="#how-it-works">How It Works</a></li>
        <li><a class="nav-link" href="#pricing">Pricing</a></li>
      </ul>
    </nav>
  </header>
}

export default HeaderFile 