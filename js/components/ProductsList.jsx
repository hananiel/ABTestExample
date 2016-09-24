'use strict';

var React = require('react');

var ProductsList = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return (

                  <div>
                    <label className="ContainerGrid-header-title">{this.props.title}</label>
                      <div className="ContainerGrid-navLinks">
                        <a className="Link" href="#">Sale Items For You</a>
                      <a className="Link" href="#">Recent Purchases</a>
                    </div>

                    <ul className="grid">{this.props.children} </ul>
                  </div>

        );
    }
});

module.exports = ProductsList;
