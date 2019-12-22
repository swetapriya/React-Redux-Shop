import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, reduceFromCart, removeFromCart, addToCart, increaseToCart, number }) => { 
    items.forEach(element => {
        if (element.id === number.id){
            element.number = number.value
        }
    });
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => ( 
                                    <CartItem 
                                        key={item.id} {...item} 
                                        value={ item.number} 
                                        onClick={() => item.number === 1 ? removeFromCart(item.id) : reduceFromCart(item.id, item.number-1)} 
                                        onClickAdd = {() => increaseToCart(item.id, item.number+1 )} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total.toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    number: PropTypes.object,
    reduceFromCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    increaseToCart: PropTypes.func.isRequired
}

export default Cart;
