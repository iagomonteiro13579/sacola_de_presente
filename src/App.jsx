import "./App.css";
import Header from "./componentes/header";
import Main from "./componentes/main";
import Cart from "./componentes/cart";
import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  console.log(selectedProduct);
  return (
    <div>
      <Header />
      {selectedProduct ? (
        <Cart selectedProduct={selectedProduct} />
      ) : (
        <Main setSelectedProduct={setSelectedProduct} />
      )}
    </div>
  );
}

export default App;
