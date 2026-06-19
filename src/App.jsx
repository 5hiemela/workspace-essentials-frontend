import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-center pt-12">
      <Navbar />
      <main>
        <CatalogPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;