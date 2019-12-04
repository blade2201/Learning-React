import React from "react";
import "./search-box.styles.css";

/*
questo è un functional component quindi non ha accesso a STATE perchè non ha 
accesso al constructor perchè è un metodo del COMPONENT di REACT e non ha neanche
i Life-Cycle-Methods sono solamente utili a renderizzare HTML
*/

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
