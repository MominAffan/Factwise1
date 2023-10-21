import React, { useState } from "react";
import Accordion from "./Accordion";

// const getFilteredItems = (query, jsonData) => {
//   // console.log(query,jsonData);
//   if (!query) {
//     return jsonData;
//   } 
//     return jsonData.filter(item => item.first.includes(query));
// };
function Searchbar({ data }) {
    const [query, setQuery] = useState('');
  
    const filteredData = data.filter(person => {
      const fullName = `${person.first} ${person.last}`.toLowerCase();
      return fullName.includes(query.toLowerCase());
    });

  return (
    <>
      <form class="d-flex">
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <Accordion data={filteredData}/>
    </>
  );
}

export default Searchbar;
