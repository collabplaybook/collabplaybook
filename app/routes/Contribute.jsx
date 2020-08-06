const React = require('react');
const Link = require('react-router-dom').Link

/* the main page for the about route of this app */
const Contribute = function() {
  return (
    <div>
      <h1>Contribute</h1>

      <Link to='/'>Go home</Link>
    </div>
  );
}

module.exports = Contribute;