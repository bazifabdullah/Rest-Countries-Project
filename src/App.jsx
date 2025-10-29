import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
          <SearchBar />
          <RegionFilter />
        </div>

        <h2 className="text-center text-xl font-semibold opacity-70">
          Country grid..
        </h2>
      </main>
    </div>
  );
}

export default App;
