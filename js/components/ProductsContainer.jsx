import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { getVisibleProducts } from '../reducers/products';
import ProductItem from './ProductItem.jsx';
import ProductsList from './ProductsList.jsx';

class ProductsContainer extends Component {
    render() {
        const { products } = this.props;
        return (
          <div>
            <img src="images/header.png" />
            <img src="images/hero.png" />
              <img src="images/fuelcenter.png" />
            <ProductsList title="Your Next Shop">
                {products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
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
