const CountryCard = ({ country }) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-md overflow-hidden hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
            <img
                src={country.flag || country.flags?.png}
                alt={`${country.name}'s Flag`}
                className="w-full h-48 sm:h-40 object-cover"
            />
            <div className="p-6">
                <h2 className="font-bold text-lg mb-3">
                    {country.name}
                </h2>
                <p className="text-sm">
                    <span className="font-semibold">Population:   </span>
                    {country.population.toLocaleString()}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Region:   </span>
                    {country.region}
                </p>
                <p className="text-sm">
                    <span className="font-semibold">Capital:   </span>
                    {country.capital}
                </p>
            </div>
        </div>
    )
}

export default CountryCard;