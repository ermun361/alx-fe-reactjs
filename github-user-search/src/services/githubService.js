import axios from 'axios';

const fetchAdvancedUserData = async (username, location, minRepos, page = 1) => {
    // Construct the query string according to GitHub's syntax
    let queryParts = [];
    if (username) queryParts.push(`${username}`);
    if (location) queryParts.push(`location:${location}`);
    if (minRepos) queryParts.push(`repos:>=${minRepos}`);
    
    const query = queryParts.join('+');
    
    // If query is empty, don't make the call to avoid 422 errors
    if (!query) return { items: [] };

    const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}`
    );
    return response.data;
};

export default fetchAdvancedUserData;