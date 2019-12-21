import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
    constructor(){
        super();
        this.state={
            number : 0,
            show: false
        }
    }
    
    handleClick = () => { 
        const { id, addToCart, removeFromCart, isInCart, number, inventory, reduceFromCart } = this.props;
        this.setState({show : false})
        if (isInCart) {
            if (this.state.number === 1){
                this.setState({number: this.state.number-1})
                removeFromCart(id);
            }else {
                reduceFromCart(id, this.state.number-1);
                this.setState({number: this.state.number-1})
            }
        } else {
            this.setState({number: this.state.number+1})
            addToCart(id, this.state.number+1);
        }
    }

    handleAdd = () => { 
        const { id, increaseToCart, inventory } = this.props;
        if ( this.state.number === inventory){
            this.setState({show : true})
        }else {
            this.setState({number: this.state.number+1})
            increaseToCart(id, this.state.number+1);
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
                                <strong>{this.state.number}</strong>   
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
                    <div className="alert alert-danger" style={{ "display" : this.state.show? "block" : "none"}}>
                        <strong>Error!</strong> Can't add more than {this.state.number}
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
    increaseToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    reduceFromCart: PropTypes.func.isRequired,
}

export default Product;
