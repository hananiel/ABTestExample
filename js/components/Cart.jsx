'use strict';

var React = require('react');

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var Cart = React.createClass({
    propTypes: {
        products: React.PropTypes.arrayOf(React.PropTypes.shape({
            id: React.PropTypes.number.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            quantity: React.PropTypes.number.isRequired,
        })).isRequired,
        total: React.PropTypes.string.isRequired,
        onCheckoutClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var products = this.props.products;

        var hasProducts = products.length > 0;
        var nodes = !hasProducts ?
            <div>Please add some products to cart.</div> :
            products.map(function (p) {
                return <Product key={p.id}>{p.title} - &#36;{p.price} x {p.quantity}</Product>;
            });

        return (
            <div className="cart ">
                <div className="greeting"> Good Morning, Hananiel  </div>
                <img src="images/clicklist.png" />
                <img src="images/triplabel.png" />
                <div className="">{nodes}</div>
                <div className="">Estimated Total: &#36;{this.props.total}</div>
                <button className=""
                    onClick={this.props.onCheckoutClicked}
                    disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
            </div>
        );
    },
});

module.exports = Cart;
