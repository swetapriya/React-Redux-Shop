import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getTotal, removeFromCart, getNumber, reduceFromCart, increaseToCart } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        items: getItems(state, props),
        total: getTotal(state, props),
        number: getNumber(state, props)
    }
}

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    reduceFromCart: (id) => dispatch(reduceFromCart(id)),
    increaseToCart: (id) => dispatch(increaseToCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
