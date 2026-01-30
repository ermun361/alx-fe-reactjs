# GitHub User Search Application

A React-based web application that allows users to search for GitHub profiles using the GitHub Search API. This project features advanced search capabilities, responsive design with Tailwind CSS, and seamless data fetching with Axios.

## 🚀 Features

- **Basic Search:** Search for GitHub users by their username.
- **Advanced Filtering:** Refine search results by specifying:
  - User Location
  - Minimum number of public repositories
- **Detailed Results:** Displays a list of users with their:
  - Avatar image
  - Username
  - Location
  - Repository count
  - Direct link to their GitHub profile
- **Pagination:** "Load More" functionality to browse through multiple pages of search results.
- **Dynamic UI:** Includes custom Loading states and Error handling ("Looks like we cant find the user").
- **Responsive Design:** Styled using Tailwind CSS for a mobile-friendly experience.

## 🛠️ Technologies Used

- **React.js**: Frontend library.
- **Vite**: Build tool for fast development.
- **Axios**: For handling API requests.
- **Tailwind CSS**: For utility-first styling.
- **GitHub Search API**: The data source.

## 📦 Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ermun361/alx-fe-reactjs.git
   cd alx-fe-reactjs/github-user-search