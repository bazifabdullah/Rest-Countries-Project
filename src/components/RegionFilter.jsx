import { ChevronDown } from "lucide-react";

const RegionFilter = ({ selectedRegion, setSelectedRegion }) => {
  return (
    <div className="relative flex justify-between items-center bg-white dark:bg-gray-800 shadow-md rounded-md px-4 py-3">
      <select
        className="bg-white dark:bg-gray-800 rounded-md px-4 text-gray-900 dark:text-white outline-none cursor-pointer appearance-none w-full"
        defaultValue=""
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
      <ChevronDown
        className="w-5 h-5 text-gray-600 dark:text-gray-300 cursor-pointer"
        onClick={() => {
          document.querySelector("select")?.showPicker?.();
        }}
      />
    </div>
  );
};

export default RegionFilter;
