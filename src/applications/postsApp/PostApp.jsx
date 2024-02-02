import React, { useEffect, useState } from "react";
import "./postApp.style.css";

const getUrl = "https://jsonplaceholder.typicode.com/users/1/posts";
const postUrl = "https://jsonplaceholder.typicode.com/posts";

const PostApp = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
      setPosts(data);
    } catch (error) {}
  };

  const writePost = async () => {
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(singlePost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      setPosts([data, ...posts]);
    } catch (err) {
      console.log("error", err);
    }
    //update the posts list
  };

  return (
    <div>
      <form>
        <input />
        <textarea />
        <button>post</button>
      </form>

      <div>
        {posts.map((el) => {
          return (
            <div>
              <h3>{el.title}</h3>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostApp;
