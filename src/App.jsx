import "./App.css";
import Header from "./componentes/header";
import Main from "./componentes/main";
import Cart from "./componentes/cart";
import { useState } from "react";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div>
      <Header />
      {selectedProduct ? (
        <Cart
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ) : (
        <Main setSelectedProduct={setSelectedProduct} />
      )}
    </div>
  );
}

export default App;
