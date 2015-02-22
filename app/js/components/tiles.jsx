/** @jsx React.DOM */
var React = require('react/addons');
var _  = require('lodash');
var Tile  = require('./tile.jsx');


module.exports = React.createClass({
  render: function() {
    return (
      <div className="tiles">
     { _.map(this.props.projects,function(project){
      return <Tile 
    name={project.name}
    description={project.description}
    link={project.html_url}
    logo={project.owner.avatar_url}
    tag={project.language}
     />
           })}
      </div>
    );
  }
});

