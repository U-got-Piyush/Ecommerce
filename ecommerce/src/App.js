import {React, useState, useEffect}from "react";
import Navbar from "./Navbar/Navbar";
import Categories from "./Categories/Categories";
import Home from "./Views/Home";
import Routing from "./Routing/Routes";
import SellerLogin from "./Views/SellerLogin";

import store from './Store/Store';
import {Provider} from 'react-redux'

function App() {

  store.subscribe( () => {
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()));
})

const [Auth , setAuth] = useState(false)

useEffect( () => {
    console.log(localStorage.getItem('auth'))
})

  return (
    <>
    <Provider store={store}>

    <Navbar />
    <Categories />
    <Routing />

    </Provider>
    </>
  );
}

export default App;
