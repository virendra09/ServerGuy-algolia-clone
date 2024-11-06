import React, { useState } from 'react';
import PostList from './PostList';
import logo from '../images/logo.png';
import './Dashboard.css';


const Dashboard = () => {
  const username = localStorage.getItem('username');
  const [query, setQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearch = (searchTerm) => {
    const newHistory = [...searchHistory, { searchTerm, timestamp: new Date().toLocaleString() }];
    setSearchHistory(newHistory);
    setQuery(searchTerm);
  };

  return (
    <div className="dashboard">
      <h2>Welcome, {username || 'User'}</h2>
      <nav className="navbar">
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
          <span className="navbar-title">Search Hacker<br></br> News</span>
        </div>
        <div className="search-section">
          <input
            type="text"
            className="search-input"
            placeholder="Search stories by title, url or author"
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(e.target.value)}
          />
          <span className="search-powered">Search by algolia</span>
        </div>
      </nav>

      <PostList query={query} />
      <h3>Search History</h3>
      <ul>
        {searchHistory.map((item, index) => (
          <li key={index}>{item.searchTerm} - {item.timestamp}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
