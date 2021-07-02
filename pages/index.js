import Link from "next/link";

export default function IndexPage({ posts }) {
  return (
    <div>
      <h2>Latest Articles</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <Link href={`/post/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=3"
  );
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  };
}
