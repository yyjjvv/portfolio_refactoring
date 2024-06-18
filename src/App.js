import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import About from "./pages/About";
import WebPublishing from "./pages/WebPublishing";
import Frontend from "./pages/Frontend";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollTopBtn from "./components/layout/ScrollTopBtn";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/web-publishing" element={<WebPublishing />} />
                <Route path="/frontend" element={<Frontend />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <ScrollTopBtn />
        </BrowserRouter>
    );
}

export default App;
