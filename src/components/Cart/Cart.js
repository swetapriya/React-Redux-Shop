import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ items, total, reduceFromCart, removeFromCart, addToCart, number }) => { console.log('items,--', items)
    return (
        <div>
            <h3>Shopping Cart</h3>

            <div className="cart">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id+Math.random()} {...item} number={number} onClick={() => number === 1 ? removeFromCart(item.id) : reduceFromCart(item.id)} onClickAdd = {() => addToCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info">Cart is empty</div>
                        )}
                        <div className="cart__total">Total: {total}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    number: PropTypes.number,
    reduceFromCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
