import { useState } from 'react';

// Custom hook for authentication
export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        // Simulate an API call for authentication
        setTimeout(() => {
            setIsAuthenticated(true);
        }, 1000);
    };
    const logout = () => {
        setIsAuthenticated(false);
    };
    return { isAuthenticated, login, logout };
};

export default useAuth;