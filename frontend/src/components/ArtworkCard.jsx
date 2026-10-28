
export default function ArtworkCard({ artwork, onToggle, onDelete }) {
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
          <h3>
            <label className="artwork-toggle">
              <input
                type="checkbox"
                checked={artwork.sold}
                onChange={() => onToggle(artwork.id)}
              />
              <span>{artwork.title}</span>
            </label>
          </h3>

          <span className={`badge badge-${typeClass}`}>
            {artwork.artwork_type}
          </span>
        </div>
      </div>

      <div className="artwork-actions">
        <span className="status">
          {artwork.sold ? "Sold" : "Available"}
        </span>

        <button
          type="button"
          className="btn-danger"
          onClick={() => onDelete(artwork.id)}
          aria-label={`Delete ${artwork.title}`}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
