import { connect } from 'react-redux';
import Product from '../components/Product';
import { addToCart, removeFromCart, isInCart, getNumber, reduceFromCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        isInCart: isInCart(state, props),
        number: getNumber(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    reduceFromCart: (id) => dispatch(reduceFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);
