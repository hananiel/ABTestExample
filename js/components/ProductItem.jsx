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
        var {product, version} = this.props;
        var showYellowTag = product.yellowtag && version != "1.0.0";


        return (
            <li className="ProductCard">
              <div className="ProductCard-imageBlock">
                <img src={product.image} />
                </div>

                <div className="ProductCard-infoBlock">
                  <div className="ProductCard-name-surround">
                  <a className="Link ProductCard-name" href="#">{product.title}</a>

                  <div className="ProductCard-sizing">{product.quantity}</div>
                    </div>
                  <div className="PriceDisplay">
                    <span size="14" className={ showYellowTag ? "PriceYellowTag": "PriceYellowHidden" }>&#36; {product.yellowtag}</span>
                    <span size="12" className={ showYellowTag ?  "PriceStrikeOut":"Normal"}>&#36; {product.price} {}</span>
                  </div>
                </div>

                <button className="addToCartButton"
                    onClick={this.props.onAddToCartClicked}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </li>
        );
    }
});

module.exports = ProductItem;
