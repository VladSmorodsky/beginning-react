import Layout from "./Layout";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Blog() {
  const {data: posts, isLoading, error} = useFetch('https://www.reddit.com/r/aww.json');

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
            {posts.data.children.map(post => (
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