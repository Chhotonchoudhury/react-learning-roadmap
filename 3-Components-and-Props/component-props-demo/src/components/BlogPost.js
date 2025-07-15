function BlogPost({ title, author, content }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", margin: "10px 0" }}>
      <h2>{title}</h2>
      <h4>By {author}</h4>
      <p>{content}</p>
    </div>
  );
}

export default BlogPost;
