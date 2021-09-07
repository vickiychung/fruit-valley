import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FruitsIndexContainer from './fruits/fruits_index_container';
import ModalContainer from './modal/modal_container';

const App = () => (
  <div>
    <ModalContainer />

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <FruitsIndexContainer />
    </BrowserRouter>
  </div>
);

export default App;