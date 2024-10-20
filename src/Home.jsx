import { useEffect, useState } from "react";
import axios from "axios";

export function Home() {
  const [articles, setArticles] = useState({});

  const getArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=61fa4ab21d5c4d58b8f9ee9f17fda171"
      )
      .then((response) => {
        // Set the articles data in state
        setArticles(response.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  };

  // Fetch articles when the component mounts
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <main>
      <h1>articles go here</h1>
      <p>{articles}</p>

      {/* <ul>
        {articles.map((article, index) => (
          <li key={index}>
            {article.title} - {article.author}
          </li>
        ))}
      </ul> */}
    </main>
  );
}
