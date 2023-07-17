import Layout from "./Layout";
import {useParams} from "react-router-dom";

export default function BlogPost() {
  const {id} = useParams();

  return (
    <Layout>
      <div>Blog Post {id}</div>
    </Layout>
  );
}