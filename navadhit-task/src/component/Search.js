import { useState } from "react";
import "../styles.css";
var data = require("../drug.json");

export default function Search() {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search result
    console.log("search ", searchTerm);
  };

  return (
    <div className="App">
      <h1>Search</h1>

      <div className="search-container">
        <div className="search-inner">
          <input type="text" value={value} onChange={onChange} />
          <button onClick={() => onSearch(value)}> Search </button>
        </div>
        <div className="dropdown">
          {data.fields.filter((item) => {
              const searchTerm = value.toLowerCase();
              console.log(searchTerm)
              const label = item.label.toLowerCase();

              return (
                searchTerm &&
                label.startsWith(searchTerm) &&
                label !== searchTerm
              );
            })
            .slice(0,5)
            .map((item) => (
              
              <div
                onClick={() => onSearch(item.label)
                }
                className="dropdown-row"
                key={item.label}
              >
                {item.label}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
