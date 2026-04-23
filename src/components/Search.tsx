import React, { useState } from 'react';

const Search: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSearch = () => {
        console.log('Searching for:', query);
        // Add your search logic here
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="w-full max-w-md">
                <input
                    name="search"
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <button
                    onClick={handleSearch}
                    className="w-full p-2 bg-blue-500 text-white rounded"
                >
                    Search
                </button>
            </div>
            <p>
                Searching for {query}
            </p>
        </div>
    );
};

export default Search;