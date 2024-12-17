// import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
// import Cadastro from "./pages/Cadastro";
// import Login from "./pages/Login";
// import Imobi from "./pages/Imobi";
// import Home from "./pages/Home";
import Global from "./styles/Global";

function App() {
  return (
    <div>
      <Header />
      <Error />
      {/* <Cadastro /> */}
      {/* <Login /> */}
      {/* <Imobi /> */}
      {/* <Banner />
      <Home /> */}
      <Footer />
      <Global />
    </div>
  );
}

export default App;
