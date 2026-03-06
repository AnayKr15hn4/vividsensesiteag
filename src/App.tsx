import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { SurroundingScannerPage } from "./pages/SurroundingScannerPage";
import { ProductsPage } from "./pages/ProductsPage";
import { TeamPage } from "./pages/TeamPage";
import { PartnerPage } from "./pages/PartnerPage";
import { ApplyPage } from "./pages/ApplyPage";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/surrounding-scanner"
            element={<SurroundingScannerPage />}
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
