import Arrivals from "./components/Arrivals/Arrivals";
import Brands from "./components/Brands/Brands";
import Favourite from "./components/Favourite/Favourite";
import Header from "./components/Header/Header";
import Promo from "./components/Promo/Promo";
import Sale from "./components/Sale/Sale";

function App() {

  return (
		<div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Sale />
      <Favourite />
		</div>
  );
}

export default App;
