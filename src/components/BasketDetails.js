import { Component } from "react";

const styles = {
    basketDetails: {
        backgroundColor: '#FFF',
        position: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadios: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    item: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class BasketDetails extends Component {
    render () {
        const { basket } = this.props;
        console.log(basket)
        return (
            <div style={styles.basketDetails}>
                <ul style={styles.ul}>
                    { basket.map(it => 
                        <li style={styles.item} key={it.name}>
                            <img alt={it.name} src={it.img} width='50' height='32'/>
                            {it.name} <span>{it.quantity}</span>
                        </li>) 
                    }
                </ul>
            </div>
        )
    }
}

export default BasketDetails