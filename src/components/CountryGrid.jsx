import CountryCard from "./CountryCard";

const CountryGrid = ({ countries }) => {
    return (
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {countries.map((country) => {
                return <CountryCard key={country.name.common} country={country}/>
            })}
        </section>
    )
}

export default CountryGrid;