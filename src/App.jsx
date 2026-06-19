import Navbar from "./components/Navbar";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-center pt-12">
      <Navbar />
      <main>
        <CatalogPage />
      </main>
    </div>
  );
}

export default App;