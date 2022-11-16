import React, { useState, useEffect } from "react";
import { data } from "./Products";
import { Link } from "react-router-dom";
function Men() {
  //useState
  const [posts, setPosts] = useState(data);
  const [filterMen, setFilterMen] = useState([]);
  //useEffect
  useEffect(() => {
    fetchMen();
  }, []);

  const fetchMen =async () => {
    data.map((post) => {
      if (post.gender == "Men") {
        setPosts(post);
        console.log(posts);
      }
    });
  };

  return (
    <>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-2 space-x-2 space-y-2"></div>
    </>
  );
}

export default Men;
