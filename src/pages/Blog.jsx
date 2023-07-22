import Layout from "./Layout";
import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import {useQuery} from "react-query";

export default function Blog() {
  // const {data: posts, isLoading, error} = useFetch('https://www.reddit.com/r/aww.json');
  const fetchPosts = () => {
    return fetch('https://www.reddit.com/r/aww.json').then(response => response.json());
  }

  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error
  } = useQuery(
      'posts',
      fetchPosts,{
        retry: false,
        refetchOnWindowFocus: false
    });

  return (
    <Layout>

      {isLoading && (
        <p>Loading...</p>
      )}

      {isError && (
        <p>{error.message}</p>
      )}

      {isSuccess && (
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