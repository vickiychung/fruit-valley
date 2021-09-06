import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import FruitsIndexContainer from './fruits/fruits_index_container';
import ModalContainer from './modal/modal_container';
// import { useEffect, useState } from 'react';

export default class App extends Component {
  state = {
    message: "",
    error: "",
    eee: "",
    text: ""
  };

  componentDidMount = () => this.fetchAPIMessage();

  fetchAPIMessage = async () => {
    try {
      const res = await fetch(`/api/fruit/all`);
      const { message } = await res.json();
      this.setState({ message });
    } catch (err) {
      console.error(err);
    }
  };

  render = () => (
    <div>
      <ModalContainer />

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <FruitsIndexContainer />
      </BrowserRouter>
    </div>
  );
}

// function App() {
//   const makeAPICall = async () => {
//     try {
//       const response = await fetch('https://www.fruityvice.com/api/fruit/all', { mode: 'cors' });
//       const data = await response.json();
//       console.log({ data })
//     }
//     catch (e) {
//       console.log(e)
//     }
//   }
//   useEffect(() => {
//     makeAPICall();
//   }, [])
//   return (
    // <div>
    //   <ModalContainer />

    //   <BrowserRouter basename={process.env.PUBLIC_URL}>
    //     <FruitsIndexContainer />
    //   </BrowserRouter>
    // </div>
//   );
// }

// export default App;