import React, { useState } from 'react';

const SearchCard = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();  // 防止页面重新加载
    console.log('searchTerm 1111:', searchTerm);
    onSearch(searchTerm);  // 触发搜索操作，这应该是一个父组件传递的函数
  };

  return (
    <div className="search-card my-10 mx-auto max-w-xl">
      <form onSubmit={handleSearch} className="flex items-center border-b border-teal-500 py-2">
        <input
          type="text"
          placeholder="Search all faces..."
          value={searchTerm}
          onChange={handleInputChange}
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchCard;
