import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { DonatePage } from "./pages/DonatePage";
import { SurroundingScannerPage } from "./pages/SurroundingScannerPage";
import { ProductsPage } from "./pages/ProductsPage";
import { TeamPage } from "./pages/TeamPage";
import { PartnerPage } from "./pages/PartnerPage";
import { ApplyPage } from "./pages/ApplyPage";
import { DexarmPage } from "./pages/DexarmPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function AppContent() {
  const location = useLocation();
  const isDonate = location.pathname === "/donate";
  const knownRoutes = ["/", "/donate", "/product/surrounding-scanner", "/products", "/team", "/partner", "/product/dexarm", "/apply"];
  const is404 = !knownRoutes.includes(location.pathname);
  const hideFooter = isDonate || is404;
  const hideRoundedBottom = isDonate || is404;

  return (
    <>
      <ScrollToTop />
      <Layout>
        <div 
          className={`relative z-10 bg-black ${hideRoundedBottom ? "" : "rounded-b-[40px]"}`} 
          style={hideRoundedBottom ? {} : { marginBottom: "-200px" }}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route
              path="/product/surrounding-scanner"
              element={<SurroundingScannerPage />}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/partner" element={<PartnerPage />} />
            <Route path="/product/dexarm" element={<DexarmPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        {!hideFooter && <Footer />}
      </Layout>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
