import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing";
import Header from "./components/header";
import AboutPage from "./pages/about";
import OperationsPage from "./pages/operations";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/hakkimizda" element={<AboutPage />} />
        <Route path="/faaliyet_alanlarimiz" element={<OperationsPage />} />
        <Route path="/ekibimiz" element={<TeamPage />} />
        <Route path="/iletisim" element={<ContactPage />} />
      </Routes> 
    </Router>
  );
}



export default App
