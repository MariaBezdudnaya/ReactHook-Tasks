import React, { useState, useEffect } from 'react';
import './TaskThree.css';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
};

export default function TaskThree() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };

    fetchPosts();
  }, []); 

  useEffect(() => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredPosts(filtered);
  }, [search, posts]);

  return (
    <div className="TaskThree">
      <input 
        type="text" 
        value={search}
        onChange={(event) => setSearch(event.target.value)} 
        placeholder="Search posts by title" 
      />
      <h1>Posts</h1>
      <ul>
        {filteredPosts.map((item) => (
          <li key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
