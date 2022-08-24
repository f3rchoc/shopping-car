import { Component } from 'react';
import Products from './components/Products'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'

class App extends Component {

  state = {
    items: [
      { name: 'tomato', price: 12.36, img: '/items/tomato.jpeg' },
      { name: 'chickpeas', price: 19.36, img: '/items/chickpeas.jpeg' },
      { name: 'lettuce', price: 12.36, img: '/items/lettuce.jpeg' }
    ],
    basket: [],
    isVisibleBasket: false,
  }
  
  addToBasket = (item) => {

    const { basket } = this.state;
    if (basket.find(it => it.name === item.name)) {
      const newBasket = basket.map(it => it.name === item.name 
        ? ({
            ...it,
            quantity: it.quantity + 1
        }) 
        : it);
        return this.setState({basket: newBasket});
    }

    return this.setState({
      basket: this.state.basket.concat({
        ...item,
        quantity: 1
      })
    })
  }

  showBasket = () => {
    if (!this.state.basket.length) {
      return;
    }
    this.setState({isVisibleBasket: !this.state.isVisibleBasket});
  }

  render() {
    return (
      <div>
        <Navbar basket = {this.state.basket} 
          isVisibleBasket = {this.state.isVisibleBasket} 
          showBasket = {this.showBasket}/>
        <Layout>
          <Title />
          <Products 
            addToBasket = {this.addToBasket}
            products = { this.state.items }
          />
        </Layout>
      </div>
    )
  }
}

export default App;
