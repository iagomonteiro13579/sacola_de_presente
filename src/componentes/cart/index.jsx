import "./style.css";
import img from "../../assets/QRcode.jpg";
import setSelectedProduct from "../../App.jsx";

export function numberToCurrency(
  amount,
  currency = "BRL",
  countryCode = "pt-BR"
) {
  return new Intl.NumberFormat(countryCode, {
    style: "currency",
    currency,
  }).format(amount);
}

const copyPixToClipboard = (pixValue) => {
  const tempInput = document.createElement("input");
  tempInput.value = pixValue;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Número do Pix copiado para a área de transferência");
};

const Cart = ({ selectedProduct, setSelectedProduct }) => {
  const handleBackButtonClick = () => {
    setSelectedProduct(null);
  };
  return (
    <div className="payment-container">
      <div className="left-content">
        <img
          className="PIX"
          src="https://upload.wikimedia.org/wikipedia/commons/d/de/Logo_-_pix_powered_by_Banco_Central_%28Brazil%2C_2020%29.png"
          alt="PIX"
        />
        <p>Valor do Produto: {numberToCurrency(selectedProduct.value)}</p>
        <button className="Back" onClick={handleBackButtonClick}>
          Voltar
        </button>
      </div>
      <div className="right-content">
        <h1 className="thank-you-text">
          OBRIGADO por fazer o casamento dos noivos mais Feliz
        </h1>
        <h2 className="open-bank-app-text">
          Abra o seu aplicativo de banco e aponte a câmera do seu celular para o
          QR Code Pix
        </h2>

        <img
          className="QRcode_cam"
          src="https://elejase-app.com.br/img_download3.png"
          alt="QRcode_cam"
        />
        <img className="qr-code" src={img} alt="QR Code" />
        <div
          onClick={() => copyPixToClipboard("68999347866")}
          style={{ cursor: "pointer" }}
        >
          <h2>Pix: 68999347866</h2>
          <p className="click_aq">Clique para copiar</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
