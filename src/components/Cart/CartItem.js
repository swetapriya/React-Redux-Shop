import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, onClick , onClickAdd, number}) => { 
    return (
        <div className="cart-item">
            <div>
                <span className="cart-item__name">{name}</span>
                <br/>
                <button onClick={onClick} className= 'btn btn-primary'>-</button> 
                    &nbsp; &nbsp;
                    <strong>{number}</strong>   
                    &nbsp; &nbsp;  
                <button className= 'btn btn-primary'  onClick={onClickAdd}>+</button> 
                {/* <button className="btn btn-danger btn-xs" onClick={onClick}>X</button> */}
            </div>
            <div className="cart-item__price">{(number*price).toFixed(2)} </div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
