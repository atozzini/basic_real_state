// import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Imobi from "./pages/Imobi";
// import Home from "./pages/Home";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Header />
      <Imobi />
      {/* <Banner />
      <Home /> */}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
