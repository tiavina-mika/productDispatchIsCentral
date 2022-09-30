import "./styles.css";

// ------------------------------- //
// ----- change these values ----- //
// ------------------------------- //
const productDispatch = {
  prodWarehouse: null,
  isReusable: false
};

const exeptedProduction = 500;

// ------------------------------- //
// ------------ codes ------------ //
// ------------------------------- //
const getIsCentral = (productDispatch, expectedProduction) => {
  if (productDispatch.isReusable) {
    return false;
  }
  // -------- prodWarehouse null -------- //
  if (productDispatch.prodWarehouse === null) {
    if (expectedProduction < 75) {
      return false;
    }

    return true;
  }

  // -------- prodWarehouse not null -------- //
  if (productDispatch.prodWarehouse < 75) {
    return false;
  }

  return true;
};

console.log("isCentral", getIsCentral(productDispatch, exeptedProduction));

export default function App() {
  return (
    <div className="App">
      <h1>Is central?</h1>
      <h2>{getIsCentral(productDispatch, exeptedProduction) + ""}</h2>
    </div>
  );
}
