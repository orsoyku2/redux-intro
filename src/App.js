import {Route} from 'react-router-dom'
import Products from './components/products/index'
import Carts from './components/carts/index'
import Header from './components/header/index'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Carts} />
    </div>
  );
}

export default (App);
