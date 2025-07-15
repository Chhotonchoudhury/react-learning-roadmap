function ListRenderer({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>🍎 {item}</li>
      ))}
    </ul>
  );
}

export default ListRenderer;
