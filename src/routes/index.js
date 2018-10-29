import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Cart from '../pages/cart';
import Product from '../pages/product';
import Action from '../pages/category';
import Romance from '../pages/romance';
import Literatura from '../pages/literatura';
import Religiao from '../pages/religiao';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Action} />
    <Route path="/category/" component={Action} />
    <Route path="/romance/" component={Romance} />
    <Route path="/literatura/" component={Literatura} />
    <Route path="/religiao/" component={Religiao} />
    <Route path="/products/:id" component={Product} />
    <Route path="/cart/" component={Cart} />
  </Switch>
);

export default Routes;
