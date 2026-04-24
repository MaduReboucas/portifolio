import "./App.css";
import { Outlet } from "react-router-dom"; // MUITO IMPORTANTE PARA ROTAS
import { useEffect } from "react"; // para o scroll
import { useLocation } from "react-router-dom"; // para o scroll

// rota
import Home from "../routes/home/Home";

//components
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function App() {
  const location = useLocation(); // para o scroll

  useEffect(() => {
    // para o scroll
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
