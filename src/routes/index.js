import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Proposta } from '../pages/Proposta';
import { Home } from '../pages/Home';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/proposta" component={Proposta} />
    </Switch>
  );
}