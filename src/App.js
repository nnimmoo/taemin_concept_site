import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./pages/home";
import Discography from "./pages/disco";
import Header from "./elements/header";
import About from "./pages/about";
function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/Menu" element={<Menu />} /> */}

                    <Route path="/Discography" element={<Discography />} />
                    <Route path="/About" element={<About />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;