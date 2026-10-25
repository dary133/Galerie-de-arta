
export default function ArtworkCard({ artwork }) {
  const typeClass = artwork.artwork_type === "Digital Art"
    ? "digital"
    : artwork.artwork_type.toLowerCase();

  return (
    <li className={artwork.sold ? "item-card done" : "item-card"}>
      <div className="artwork-content">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="artwork-image"
        />

        <div className="artwork-info">
          <h3>{artwork.title}</h3>
          <span className={`badge badge-${typeClass}`}>
            {artwork.artwork_type}
          </span>
        </div>
      </div>

      <span className="status">
        {artwork.sold ? "Sold" : "Available"}
      </span>
    </li>
  );
}
