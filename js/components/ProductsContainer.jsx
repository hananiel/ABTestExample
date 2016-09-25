import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from './ProductItem.jsx';
import ProductsList from './ProductsList.jsx';

class ProductsContainer extends Component {
      constructor(props, context) {
        super(props, context);
        var regex = /version=([^&]*)/;
        var matches;

        if ((matches = regex.exec(window.location.search)) !== null) {
            if (matches.index === regex.lastIndex) {
                re.lastIndex++;
            }

        }
        this.state = {
          version: (matches && matches[1])? matches[1] : "1.0.0"
        };
    };
    render() {
        const { products } = this.props;
        const { version } = this.state;
        return (
          <div>
            <img src="images/header.png" />
            <img src="images/hero.png" />
              <img src="images/fuelcenter.png" />
            <ProductsList title="Your Next Shop" version={version} >
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        version={version}
                        onAddToCartClicked={() => this.props.addToCart(product.id)}
                    />
                )}
            </ProductsList>
              <img src="images/footer.png" />
          </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        products: getVisibleProducts(state.products)
    };
}

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)
