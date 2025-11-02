import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

const CountryDetails = () => {
    const { name } = useParams()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState(null);


    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

                setCountry(response.data[0]);
                setLoading(false)
            } catch (err) {
                setError("Failed to load country details.")
                setLoading(false)
            }
        };

        fetchCountry();
    }, [name])

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>
    if (!country) return null;

    return (
        <section>
            <Link
                to={"/"}
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-6 py-2 rounded-md mb-10"
                
            >
                <ArrowLeft className="w-4 h-4" /> Back
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={country.flags?.svg}
                    alt={country.flags?.alt || `${country.name.common} flag`}
                    className="w-full h-auto"
                />

                <div>
                    <h2 className="text-2xl font-bold mb-6">{country.name.common}</h2>
                    <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> {country.region}</p>
                    <p><strong>Subregion:</strong> {country.subregion}</p>
                    <p><strong>Capital:</strong> {country.capital?.[0]}</p>
                </div>
            </div>
        </section>
    )
}

export default CountryDetails;