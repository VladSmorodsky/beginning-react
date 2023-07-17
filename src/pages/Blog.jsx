import Layout from "./Layout";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://www.reddit.com/r/aww.json')
      .then(response => response.json())
      .then(result => {
        setIsLoading(false);
        setPosts(result.data.children);
      })
      .catch(error => {
        setIsLoading(false);
        setError(error);
      });
  }, []);
  return (
    <Layout>

      {isLoading && (
        <p>Loading...</p>
      )}

      {error && (
        <p>There is an error</p>
      )}

      {posts && (
        <div>
          <ul>
            {posts.map(post => (
              <li key={post.data.id}>
                <Link to={`/blog/${post.data.id}`}>{post.data.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Layout>
  );
}