import React from 'react';
import Main from './Main';
import Detail from './components/details';
import "./App.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Update from './components/Update';

function App() {
  const products = [{}, {}]
  return (
    <BrowserRouter>
      <div>
        <div className="App-header">
          <h1>Product Manager</h1>
        </div>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/product">
              <ProductList product= {products}/>
            </Route>
            <Route exact path="/product/:id">
              <Detail />
            </Route>
            <Route exact path="/product/:id/edit">
                <Update />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
