import React, { useEffect, useState } from "react";
import "./postApp.style.css";

const PostApp = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log("data", data);
      setPosts(data);
    } catch (err) {}
  };

  const addPost = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: "Askar",
            body: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, ullam?",
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      console.log(await response.json());
    } catch (err) {}
  };

  useEffect(() => {
    getPosts();
    addPost();
  }, []);
  return (
    <div>
      {posts.map((el) => (
        <p>{el.body}</p>
      ))}
    </div>
  );
};

export default PostApp;
