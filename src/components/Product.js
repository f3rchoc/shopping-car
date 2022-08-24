import { Component } from 'react';
import Button from './Button';

const styles = {
    item: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)', 
        with: '30%',
        padding: '10px 15px',
        borderRadius: '5px'
    },
    img: {
        with: '100%'
    }
}

class Product extends Component {
    render() {
        const { item, addToBasket } = this.props;
        return (
            <div style={styles.item}>
                <img style={styles.img} alt={item.name} src={item.img} />
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <Button onClick={() => addToBasket(item)}>
                    Add to car
                </Button>
            </div>
        )
    }
}

export default Product