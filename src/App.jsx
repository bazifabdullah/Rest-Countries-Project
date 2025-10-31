import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import mockCountries from "./data/mockCountries";
import CountryGrid from "./components/CountryGrid";

function App() {
  console.log("App rendering mockCountries:", mockCountries)

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
          <SearchBar />
          <RegionFilter />
        </div>
        {console.log(mockCountries)}
        <CountryGrid countries={mockCountries} />
      </main>
    </div>
  );
}

export default App;
