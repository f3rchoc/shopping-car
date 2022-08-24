import { Component } from "react";
import BubbleAlert from './BubbleAlert'
import BasketDetails from './BasketDetails'

const styles = {
    basket: {
        backgroundColor: '#359A2C',
        color: '#FFF',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20
    }
}

class Basket extends Component {
    render () {
        const { basket, isVisibleBasket, showBasket } = this.props;
        const quantity = basket.reduce((acc, el) => acc + el.quantity, 0);
        console.log(isVisibleBasket)
        return (
            <div>
                <span style={styles.bubble}>
                    {(quantity === 0) ? null:<BubbleAlert value={quantity}/>}
                </span>
                <button onClick = {showBasket} style = {styles.basket}>
                    Basket
                </button>
                { isVisibleBasket ? <BasketDetails basket = { basket }/> : null }
                
            </div>
        )
    }
}

export default Basket