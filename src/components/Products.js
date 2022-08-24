import { Component } from 'react';
import Product from './Product';

const styles = {
    items:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
}

class Products extends Component {
    render() {
        const { products, addToBasket } = this.props;
        return (
            <div style={styles.items}>
                { products.map(item => 
                    <Product 
                        addToBasket = { addToBasket }
                        key = { item.name }
                        item = { item }
                    />) }
            </div>
        )
    }

}

export default Products