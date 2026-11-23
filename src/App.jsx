import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;