import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../containers/Product';

const ProductList = ({ products, number }) => { 
    products.forEach(element => {
        if (element.id === number.id){
            element.number = number.value
        }
    });              
    return (
        <div>
            <h3>Products</h3>
            <ul className="product-list">
              {products.map(product => ( 
                  <li key={product.id} className="product-list__item">
                    <Product {...product} />                    
                  </li>
              ))}
            </ul>
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
    number: PropTypes.object
}

export default ProductList;
