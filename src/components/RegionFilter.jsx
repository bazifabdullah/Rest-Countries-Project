const RegionFilter = () => {
  return (
    <select
      className="bg-white dark:bg-gray-800 shadow-md rounded-md px-4 py-3 text-gray-900 dark:text-white outline-none cursor-pointer appearance-none"
      defaultValue=""
    >
      <option value="" disabled>
        Filter by Region
      </option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default RegionFilter;
