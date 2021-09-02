import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route>404 Not Found</Route>
        </Switch>
        <Header />
      </div>
    </Router>
  );
}

export default App;
