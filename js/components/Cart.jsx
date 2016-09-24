'use strict';

var React = require('react');

var Product = React.createClass({
    render: function () {
        return <div className="cartProduct">
          <img src={this.props.product.image} height="50px" />
          <div className="cartTitle"> {this.props.product.title} - &#36;{this.props.product.price} x {this.props.product.quantity} </div> 

        </div>;
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
                return <Product key={p.id} product={p}>
                </Product>;
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
