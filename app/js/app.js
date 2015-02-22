var React = require('react/addons');
var repos = require('./repos.json');
var Tiles = require('./components/tiles.jsx');


React.render(
  <div>
    <div className="header">
     <div className="row">
      <div className="col-sm-5">
        <h3>OPEN SOURCE PROJECTS</h3>
      </div>
     </div>
    </div>
  <Tiles projects={repos} />
  </div>,
  document.getElementById('products')
);

