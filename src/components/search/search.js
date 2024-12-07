import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import citiesData from "../../citiesData";
import "./search.css"; 

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
  
    const filteredCities = citiesData.filter((city) =>
      city.localityName.toLowerCase().includes(inputValue.toLowerCase())
    );

  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          options: filteredCities.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.localityName}, ${city.cityName}`,
          })),
        });
      }, 500); 
    });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="search-container">
      <label className="search-label">Search for a locality</label>
      <AsyncPaginate
        placeholder="Type a locality"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        className="search-input"
      />
    </div>
  );
};

export default Search ;
