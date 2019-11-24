import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    
    handleClick = () => { 
        const { id, addToCart, removeFromCart, isInCart, number, inventory, reduceFromCart } = this.props;

        if (isInCart) {
            if (number === 1){
                removeFromCart(id);
            }else {
                reduceFromCart(id);
            }
        } else {
            addToCart(id, inventory);
        }
    }

    handleAdd = () => { 
        const { id, addToCart, inventory } = this.props;
        addToCart(id, inventory);
    }

    render() {
        const { name, price, image, isInCart, number } = this.props;
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
                                <strong>{number}</strong>   
                                &nbsp; &nbsp;                 
                                <button className= 'btn btn-primary' onClick={this.handleAdd}>
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
    number: PropTypes.number.isRequired,
    price: PropTypes.number,
    currency: PropTypes.string,
    image: PropTypes.string,
    isInCart: PropTypes.bool.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    reduceFromCart: PropTypes.func.isRequired,
}

export default Product;
