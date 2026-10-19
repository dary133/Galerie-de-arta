
export default function ArtworkCard({ artwork }) {
  const typeClass = artwork.artwork_type === "Digital Art"
    ? "digital"
    : artwork.artwork_type.toLowerCase();

  return (
    <li className={artwork.sold ? "item-card done" : "item-card"}>
      <div>
        <h3>{artwork.title}</h3>
        <span className={`badge badge-${typeClass}`}>
          {artwork.artwork_type}
        </span>
      </div>

      <span className="status">
        {artwork.sold ? "Sold" : "Available"}
      </span>
    </li>
  );
}
