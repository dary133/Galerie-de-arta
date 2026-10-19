
import ArtworkCard from "./ArtworkCard.jsx";

export default function ArtworkList({ artworks }) {
  if (artworks.length === 0) {
    return <p className="empty">No artworks available.</p>;
  }

  return (
    <ul className="item-list">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.id} artwork={artwork} />
      ))}
    </ul>
  );
}
