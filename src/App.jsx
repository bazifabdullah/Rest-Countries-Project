import { useState,useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";
import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("")

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population");

        setCountries(response.data)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching countries:", err);
        setError("Failed to load countries. ")
        setLoading(false)
      }
    };

    fetchCountries();
  }, [])

  //Function to filter countries by search and region
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesRegion && matchesSearch;
  })

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Link to={"/"}>
        {<Header />}
      </Link>
      <main className="px-6 py-10 max-w-7xl mx-auto">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex flex-col sm:flex-row justify-between gap-6 mb-10">
                  <SearchBar search={search} setSearch={setSearch}/>
                  <RegionFilter selectedRegion={selectedRegion} setSelectedRegion={setSelectedRegion}/>
                </div>
        
                {loading ? (
                    <p className="text-center">Loading Countries...</p>
                  ) : error ? (
                      <p className="text-center text-red-500 font-semibold">{error}</p>
                  ) : filteredCountries.length === 0 ? (
                      <p className="text-center text-red-500 font-semibold">No Country Found. 404</p>
                  ) : (
                      <CountryGrid countries={filteredCountries} />
                  )
                }
              </>
            }
          />

          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
