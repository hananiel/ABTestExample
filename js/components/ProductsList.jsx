'use strict';

var React = require('react');

var ProductsList = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired
    },

    render: function () {
        return (

                  <div className="ContainerGrid">
                    <h1>{this.props.title} v{this.props.version}</h1>
                    <ul className="grid">{this.props.children} </ul>
                  </div>

        );
    }
});

module.exports = ProductsList;
