import React from "react";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Ordering from "./components/odering/Ordering";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="main-title title">Оформление заказа</h1>
        <Ordering/>
      </div>
      <Footer />
    </>
  );
}

export default App;
