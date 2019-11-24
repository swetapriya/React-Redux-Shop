import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    handleClick = () => {
        const { id, addToCart, removeFromCart, isInCart } = this.props;

        if (isInCart) {
            removeFromCart(id);
        } else {
            addToCart(id);
        }
    }

    render() {
        const { name, price, image, isInCart } = this.props;

        return (
            <div className="product thumbnail">
                <img src={image} alt="product"/>
                <div className="caption">
                    <h3>{name}</h3>
                    <div className="product__price">{price} </div>
                    <div className="product__button-wrap">
                        {
                            isInCart?( 
                            <div>
                                <button className= 'btn btn-primary' onClick={this.handleClick}>
                                    -
                                </button>
                                &nbsp; &nbsp;
                                <strong>1</strong>   
                                &nbsp; &nbsp;                 
                                <button className= 'btn btn-primary'>
                                    +
                                </button>
                            </div>
                            ) : ( 
                                <button
                                    className= 'btn btn-primary'
                                    onClick={this.handleClick}
                                    >
                                    Add to cart
                                </button>
                            ) 
                        }
                    </div>
                </div>
            </div>
        );
    }
}

Product.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
}

export default Product;
