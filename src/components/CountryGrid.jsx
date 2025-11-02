import CountryCard from "./CountryCard";

const CountryGrid = ({ countries }) => {
    if (!countries || countries.length === 0) {
        return (
            <p className="text-center text-gray-500 dark:text-gray-400">
                No countries to display.
            </p>
        )
    }
    
    return (
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => {
                return <CountryCard key={country.name.common} country={country}/>
            })}
        </section>
    )
}

export default CountryGrid;