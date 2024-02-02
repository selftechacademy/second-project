import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DogCard from "../../components/dogCard/DogCard";

import "./dogApp.style.css";
const url = "https://dog.ceo/api/breeds/image/random";

const DogApp = () => {
  const [dogImageList, setDogImageList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setDogImageList([
        ...dogImageList,
        { url: data.message, id: uuidv4(), likes: 0 },
      ]);
      setIsLoading(false);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    getDog();
  }, []);

  const onDeleteClick = (id) => {
    console.log("delete clicked", id);
  };

  const onLikeClick = (id) => {
    console.log("like clicked", id);
  };

  return (
    <div>
      <button onClick={getDog}>{isLoading ? "loading..." : "Get Dog"} </button>
      <div className="dog-container">
        {dogImageList.map((el) => (
          <DogCard
            key={el.id}
            url={el.url}
            id={el.id}
            likes={el.likes}
            onDeleteClick={onDeleteClick}
            onLikeClick={onLikeClick}
          />
        ))}
      </div>
    </div>
  );
};

export default DogApp;
