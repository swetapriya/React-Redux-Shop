import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { getProducts } from '../ducks/products';
import { getNumber } from '../ducks/cart';

const mapStateToProps = (state, props) => {
    return {
        products: getProducts(state, props),
        number: getNumber(state,props)
    }
}

export default connect(mapStateToProps)(ProductList); //export default connect(mapstateToProps,mapDispatchToProps)(Component which we want to connect)
//mapStateToProps mapping global store state to componet props