import { useState,useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population");

        const filtered = response.data.filter(
          (country) =>
          country.name.common !== "Israel"
        );

        setCountries(filtered)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries. ")
        setLoading(false)
      }
    };

    fetchCountries();
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
          <SearchBar />
          <RegionFilter />
        </div>
        
        {loading ? (
          <p className="text-center">Loading Countries...</p>
        ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : (
            <CountryGrid countries={countries} />
        )
        }
      </main>
    </div>
  );
}

export default App;
