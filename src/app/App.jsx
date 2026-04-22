import "./App.css";
import { Outlet } from "react-router-dom"; // MUITO IMPORTANTE PARA ROTAS

// rota
import Home from "../routes/home/Home";

//components
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function App() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
