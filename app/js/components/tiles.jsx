/** @jsx React.DOM */
var React = require('react/addons');
var _  = require('lodash');
var Tile  = require('./tile.jsx');
var Router = require('react-router');
var $ = require('jquery');

module.exports = React.createClass({
  mixins: [Router.State],
  getInitialState: function() {
    return {
      repos:[]
    };
  },
  componentDidMount: function() {
    $.get("https://api.github.com/orgs/MaxwellHealth/repos", function(result) {
      if (this.isMounted()) {
        this.setState({
          repos: result
        });
      }
    }.bind(this));
  },
  render: function() {
    var filteredRepos = this.state.repos;
    if (this.getParams().type && this.state.repos) {
      var self = this;
      filteredRepos = _.filter(filteredRepos, _.matches({'language': self.getParams().type}) );
    }
    filteredRepos = _.filter(filteredRepos, function(repo) {return !repo.fork;});
    filteredRepos = _.sortBy(filteredRepos,'stargazers_count');
    filteredRepos.reverse();
    return (
      <div className="tiles">
     { _.map(filteredRepos,function(project){
      return (<Tile
          name={project.name}
          description={project.description}
          link={project.html_url}
          tag={project.language}
          logo={"https://s3.amazonaws.com/maxwellv5-employers%2F/maxwell.logo-vert-blue.png"}
          stargazers={project.stargazers_count}
           />);
           })}
      </div>
    );
  }
});

