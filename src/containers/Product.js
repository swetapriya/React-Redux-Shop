import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, removeFromCart, isInCart, getNumber, reduceFromCart, increaseToCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props),
        number: getNumber(state,props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id, number) => dispatch(addToCart(id, number)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    reduceFromCart: (id, number) => dispatch(reduceFromCart(id, number)),
    increaseToCart: (id, number) => dispatch(increaseToCart(id, number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
