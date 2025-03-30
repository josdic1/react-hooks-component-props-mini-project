import React from "react";
import Header from '../components/Header.js'
import About from '../components/About.js'
import ArticleList from '../components/ArticleList.js'
import blogData from "../data/blog";

const { name, image, about , posts  } = blogData

function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About 
        image={image} 
        about={about}
      />
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
