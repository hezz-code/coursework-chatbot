import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Chat from "./pages/chat";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* creating the links from the buttons to the pages*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </main>
    </>
  );
}

export default App;




