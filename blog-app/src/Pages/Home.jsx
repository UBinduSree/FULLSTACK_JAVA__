import React from "react";

function Home({darkMode}) {
  const blogs = [
    { id: 1, title: "React Basics", content: "React makes UI development easier." },
    { id: 2, title: "Using React Router", content: "Helps in navigation without page reload." },
    { id: 3, title: "Components in React", content: "Components are reusable building blocks." },
  ];

  return (
    <div style={{color: darkMode ? "#ddd" : "#333"}}>
      <h1>Home Page - Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog.id} style={{ marginBottom: "15px", padding: "10px", border: "2px solid #ccc" }}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;