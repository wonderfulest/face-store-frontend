import React, { useState, useEffect, useRef } from 'react';

const SearchCard = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef(null);
  
  // Popular search keywords
  const keywords = [
    'Digital', 'Analog', 'Sport', 'Fitness', 'Minimal', 
    'Classic', 'Modern', 'Dark', 'Colorful', 'Weather',
    'Battery', 'Steps', 'Heart Rate', 'Elegant'
  ];
  
  // Category keywords
  const categories = [
    'Animal', 'Flower', 'Landscape', 'Fantasy', 'Digital',
    'Christmas', 'Venu', 'Whole'
  ];

  // Rotate through keywords for placeholder
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCurrentPlaceholder(keywords[currentIndex]);
      currentIndex = (currentIndex + 1) % keywords.length;
    }, 2000); // Change keyword every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    if (event) event.preventDefault(); // Prevent page reload
    onSearch(searchTerm); // Trigger search operation
    setShowSuggestions(false); // Hide suggestions after search
  };

  const handleKeywordClick = (keyword) => {
    setSearchTerm(keyword);
    setTimeout(() => {
      onSearch(keyword); // Auto search when a keyword is clicked
      setShowSuggestions(false);
    }, 100);
  };

  const handleInputFocus = () => {
    setShowSuggestions(true);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="search-card w-full relative" ref={inputRef}>
      <form onSubmit={handleSearch} className="flex items-center bg-white rounded-full shadow-md px-6 py-3 border border-gray-200 hover:shadow-lg transition-shadow duration-200 max-w-2xl mx-auto">
        <svg className="h-6 w-6 text-gray-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder={`Try "${currentPlaceholder}"...`}
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          className="appearance-none bg-transparent border-none w-full text-gray-700 py-2 px-3 text-lg leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 text-base"
        >
          Search
        </button>
      </form>
      
      {/* Keyword suggestions */}
      {showSuggestions && (
        <div className="absolute z-20 mt-2 w-full bg-white rounded-xl shadow-xl py-3 border border-gray-100 animate-fadeIn">
          <div className="flex flex-wrap px-4 pb-3 border-b border-gray-100">
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mr-2 mt-1">Popular:</span>
            {keywords.slice(0, 6).map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-sm rounded-full px-3 py-1 mr-2 mt-1 transition-all duration-200 border border-gray-100 hover:border-blue-200"
              >
                {keyword}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap px-4 py-3 border-b border-gray-100">
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mr-2 mt-1">Categories:</span>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(category)}
                className="bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-sm rounded-full px-3 py-1 mr-2 mt-1 transition-all duration-200 border border-gray-100 hover:border-blue-200"
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap px-4 pt-3">
            <span className="text-gray-500 text-xs font-medium uppercase tracking-wider mr-2 mt-1">Features:</span>
            {keywords.slice(6).map((keyword, index) => (
              <button
                key={index}
                onClick={() => handleKeywordClick(keyword)}
                className="bg-gray-50 hover:bg-blue-50 hover:text-blue-600 text-gray-700 text-sm rounded-full px-3 py-1 mr-2 mt-1 transition-all duration-200 border border-gray-100 hover:border-blue-200"
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchCard;
