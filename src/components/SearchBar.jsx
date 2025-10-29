import { Search } from "lucide-react";

const SearchBar = () => {
    return (
        <div className="flex items-center bg-white dark:bg-gray-800 shadow-md rounded-md px-4 py-3 w-full sm:w-80">
            <Search className="w-5 h-5 text-gray-500 dark:text-gray-300 mr-3" />
            <input
                type="text"
                placeholder="Search for a country..."
                className="w-full bg-transparent outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
        </div>
    )
}

export default SearchBar;