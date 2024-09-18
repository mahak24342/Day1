const Blog = ({ children }) => {
  return <>{children}</>; // Using React fragment to wrap the children
}

export default Blog;

export async function generateMetadata({ params }) {
  return {
    title: params.id, // Make sure params.id exists
  };
}
