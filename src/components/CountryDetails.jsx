import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft } from "lucide-react";

const CountryDetails = () => {
    const { name } = useParams()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [country, setCountry] = useState(null);
    const [borderCountries, setBorderCountries] = useState([]);


    useEffect(() => {
        const fetchCountry = async () => {
            try {
                const response = await axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

                setCountry(response.data[0]);

                //To fetch border countries if they exist
                if (response.data[0].borders && response.data[0].borders.length > 0) {
                    const borders = response.data[0].borders.join(",")
                    const borderResponse = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${borders}&fields=name`)
                    const borderNames = borderResponse.data.map(
                        (borderCountry) => borderCountry.name.common
                    )
                    setBorderCountries(borderNames);
                }

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
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 shadow-md px-6 py-2 rounded-md mb-10 hover:scale-[1.02] hover:font-semibold"
            >
                <ArrowLeft className="w-4 h-4 hover:font-semibold" /> Back
            </Link>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={country.flags?.svg}
                    alt={country.flags?.alt || `${country.name.common} flag`}
                    className="w-full h-auto"
                />

                <div>
                    <h2 className="text-3xl font-bold mb-6">{country.name.common}</h2>

                    <div className="grid sm:grid-cols-2 gap-6 mb-10">
                        <div>
                        <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common || "N/A"}</p>
                        <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                        <p><strong>Region:</strong> {country.region}</p>
                        <p><strong>Sub Region:</strong> {country.subregion || "N/A"}</p>
                        <p><strong>Capital:</strong> {country.capital?.[0] || "N/A"}</p>
                        </div>

                        <div>
                        <p><strong>Top Level Domain:</strong> {country.tld?.join(", ") || "N/A"}</p>
                        <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(", ") || "N/A"}</p>
                        <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(", ") || "N/A"}</p>
                        </div>
                    </div>

                    {borderCountries.length > 0 && (
                        <div className="flex flex-wrap items-center gap-3">
                            <strong>Border Countries:</strong>
                            {borderCountries.map((border) => (
                            <Link
                                key={border}
                                to={`/country/${border}`}
                                className="px-4 py-1 bg-white dark:bg-gray-800 shadow-sm rounded-sm text-sm cursor-pointer hover:scale-[1.02] hover:shadow-md hover:font-semibold"
                            >
                                {border}
                            </Link>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </section>
    )
}

export default CountryDetails;