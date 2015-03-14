/** @jsx React.DOM */
var React = require('react/addons');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hover: false
    };
  },
  getDefaultProps: function() {
    return {
      name: 'foo',
      description: '',
      link:'http://www.github.com/maxwellhealth'
    };
  },
  componentDidMount: function() {
  },
  hoverIn: function() {
    this.setState({'hover': true});
  },
  hoverOut: function() {
    this.setState({'hover': false});
  },
  render: function() {
    var cx = React.addons.classSet;
    var hoverOverlay = cx({
      'hover-overlay': true,
      'text-left': true,
      'hide': !this.state.hover
    });
    //{truncate(this.props.description, 200)}
    return (
      <div className='tile'  onMouseEnter={this.hoverIn} onMouseLeave={this.hoverOut}>
        <div className={hoverOverlay}>
          <strong>{this.props.name}</strong><br />
          <hr />
          <p>{this.props.description}</p>
          <a href={this.props.link}>MORE DETAILS &gt;</a><br />
        </div>
        <img src={this.props.logo} />
        <h4>{this.props.name}</h4>
        <br />

        <hr />
        {this.props.description}
        <br />

        <div className="row productTags">
          <i className="fa fa-star"></i> {this.props.stargazers}
        </div>
        <hr />
        <div className="row productTags">
          <div className="col-sm-6">
            <div className="tag">{this.props.tag}</div>
          </div>
        </div>
      </div>);
  }
});
