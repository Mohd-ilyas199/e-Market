// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Home from './Components/Home';
import { ConfigStore } from './Components/Store/ConfigStore';
import { getProduct } from "./Components/Service/product"



function App() {
  const localStore = ConfigStore();
  const allproduct = async () => {
    const products = await getProduct();
    console.log("product--->", products)

  }

  useEffect(() => {
    allproduct();
  }, [])

  return (
    <div >
      <Provider store={localStore}>
        <Home />
        {/* <ProductItem /> */}
       

      </Provider>
    </div>
  );
}

export default App;