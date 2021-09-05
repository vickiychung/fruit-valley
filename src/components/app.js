import React from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import FruitsIndexContainer from './fruits/fruits_index_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />

    <BrowserRouter>
      <FruitsIndexContainer />
    </BrowserRouter>
    {/* <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/'} component={FruitsIndexContainer} />
      <Redirect exact from={process.env.PUBLIC_URL + '/*'} to={process.env.PUBLIC_URL + '/'} />
    </Switch> */}
  </div>
);

export default App;