import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://api.thecatapi.com/v1/categories");
      const resultJson = await result.json();
      setCategories(resultJson)
    };
    fetchData();
  }, []);



  return (
    <div className={'sidebar'} >

      {categories.map(category => (
        <NavLink
          to={`/${category.id}/photos`}
          key={category.id}
          className={'link'}
          activeClassName='is-active'
        >
          {category.name}
        </NavLink >
      ))}

    </div>
  )
};

export default Sidebar;
