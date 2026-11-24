import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer";
import Home from "./pages/home";
import Information from "./pages/information.jsx";
import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;