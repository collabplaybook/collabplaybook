const React = require('react');
const Link = require('react-router-dom').Link

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */
const Header = function(){
  return (
  //    <!-- Primary Page Layout
//  –––––––––––––––––––––––––––––––––––––––––––––––––– -->
  <div class="container nav-bar">
    <div class="row">
      <ul class="navbar-list">
          <li class="navbar-item"><Link class="navbar-link" href="/about">About</Link></li>
          <li class="navbar-item"><Link class="navbar-link" href="/share">Share</Link></li>
          <li class="navbar-item"><Link class="navbar-link" href="/contribute">Contribute</Link></li>
      </ul>
    </div>
  </div>
  );
}

module.exports = Header;