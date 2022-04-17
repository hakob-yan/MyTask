import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./AlbumItems.css";

const AlbumItems = () => {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(10)
  const { categoryId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=1&category_ids=${categoryId}`
      );
      const resultJson = await result.json();
      setItems(resultJson);

    };
    fetchData();
  }, [categoryId, limit]);


  return (
    <div className="pictures-container">
      <p className="page-title-message">
        This is <span>Album {categoryId}</span>
      </p>
      <div className="items-container">
        {items.map((item) => (
          <img className="img" key={item.id} src={item.url} alt={`data thumbnail`} />
        ))}
      </div>
      <button className="show-more" onClick={() => setLimit(limit + 10)} >Show more</button>
    </div>
  );
};

export default AlbumItems;
