/** @jsx React.DOM */
var React = require('react/addons');
var _  = require('lodash');
var Tile  = require('./tile.jsx');
var repos = require('../repos.json');
var Router = require('react-router');

module.exports = React.createClass({
  mixins: [Router.State],
  render: function() {
    filteredRepos = repos;
    if (this.getParams().type) {
      var self = this;
      filteredRepos = _.filter(repos, _.matches({'language': self.getParams().type}) );
    }
    
    return (
      <div className="tiles">
     { _.map(filteredRepos,function(project){
      return <Tile 
    name={project.name}
    description={project.description}
    link={project.html_url}
    logo={"https://s3.amazonaws.com/maxwellv5-employers%2F/maxwell.logo-vert-blue.png"}
    tag={project.language}
     />
           })}
      </div>
    );
  }
});

