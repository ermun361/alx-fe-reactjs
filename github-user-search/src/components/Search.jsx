import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!username && !location && !minRepos) return;

        setLoading(true);
        setError(false);
        setResults([]);

        try {
            const data = await fetchUserData(username, location, minRepos);
            if (data && data.items) {
                setResults(data.items);
            } else {
                setResults([]);
            }
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-10">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 justify-center bg-gray-100 p-6 rounded shadow">
                <input
                    type="text"
                    placeholder="Username"
                    className="p-2 border rounded"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Location"
                    className="p-2 border rounded"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Min Repos"
                    className="p-2 border rounded"
                    value={minRepos}
                    onChange={(e) => setMinRepos(e.target.value)}
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Search
                </button>
            </form>

            <div className="mt-10">
                {loading && <p className="text-center font-bold">Loading...</p>}
                {error && <p className="text-center text-red-500">Looks like we cant find the user</p>}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {results.length > 0 ? (
                        results.map((user) => (
                            <div key={user.id} className="border p-4 rounded shadow hover:bg-gray-50 flex flex-col items-center">
                                <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-4" />
                                <h2 className="font-bold text-lg">{user.login}</h2>
                                {/* Displaying fields required by Step 3 */}
                                <p className="text-gray-600">Location: {user.location || "N/A"}</p>
                                <p className="text-gray-600">Repos: {user.public_repos || "N/A"}</p>
                                <a
                                    href={user.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-2 text-blue-500 hover:underline"
                                >
                                    View Profile
                                </a>
                            </div>
                        ))
                    ) : (
                        !loading && !error && <p className="text-center col-span-3">No results found. Try a different search.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;