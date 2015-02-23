var React = require('react/addons');
var Router = require('react-router');

var Tiles = require('./components/tiles.jsx');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  mixins: [Router.State, Router.Navigation],
  onChange: function() {
    this.transitionTo('/'+this.refs.selectBox.getDOMNode().value);
  },
  render: function() {
    return (
      <div>
        <div className="header">
         <div className="row">
          <div className="col-sm-5">
            <h3>OPEN SOURCE PROJECTS</h3>
          </div>
         </div>
        </div>
        <div className="form-container">
          <div className="alert alert-info no-margin">
            <div className="form-group">
            <label className="form-label">Language</label>
            <select className="form-control" ref="selectBox" onChange={this.onChange} defaultValue={this.getParams().type}>
              <option value="">All</option>
              <option  value="Go">Go</option>
              <option value="JavaScript">JavaScript</option>
              <option value="PHP">PHP</option>
             </select>
            </div>
          </div>
        </div>

        <RouteHandler />
      </div>
    );
  }
});
var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Tiles} />
    <Route name="type" path="/:type" handler={Tiles} />
    <NotFoundRoute handler={Tiles}/>
  </Route>
);


// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, function (Handler) {
  React.render( <Handler/> ,
  document.getElementById('products'));
});


