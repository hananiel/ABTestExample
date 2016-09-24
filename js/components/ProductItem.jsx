'use strict';

var React = require('react');

var ProductItem = React.createClass({
    propTypes: {
        product: React.PropTypes.shape({
            image: React.PropTypes.string.isRequired,
            title: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            inventory: React.PropTypes.number.isRequired
        }).isRequired,
        onAddToCartClicked: React.PropTypes.func.isRequired
    },

    render: function () {
        var product = this.props.product;

        return (
            <li className="ProductCard">
              <div className="ProductCard-imageBlock">
                <img src={product.image} />
                </div>

                <div className="ProductCard-infoBlock">
                  <a className="Link ProductCard-name" href="#">{product.title}</a>
                  <div className="ProductCard-sizing">{product.quantity}</div>
                  <div className="PriceDisplay">
                    <span data-icon="" data-text="" className="Text Color" size="12">{product.price}</span>
                  </div>
                </div>

                <button className="uk-button uk-button-small uk-button-primary"
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </li>
        );
    }
});

module.exports = ProductItem;
