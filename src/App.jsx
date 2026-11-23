import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import Home from "./pages/home";
import Information from "./pages/information.jsx";
import Chat from "./pages/chat";
import Accessibility from "./pages/accessibility.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* creating the links from the buttons to the pages*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/information" element={<Information />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/accessibility" element={<Accessibility />} />
        </Routes>
      </main>
    </>
  );
}

export default App;