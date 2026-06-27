function SearchBar({ city, setCity, handleSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={handleSearch}>
        Get Weather
      </button>
    </div>
  );
}

export default SearchBar;