
import ArtworkList from "./components/ArtworkList.jsx";

const artworks = [
  {
    id: 1,
    title: "Sunset Landscape",
    sold: false,
    artwork_type: "Painting"
  },
  {
    id: 2,
    title: "Silent Forest",
    sold: true,
    artwork_type: "Digital Art"
  },
  {
    id: 3,
    title: "Abstract Flowers",
    sold: false,
    artwork_type: "Painting"
  }
];

export default function App() {
  const available = artworks.filter((artwork) => !artwork.sold).length;

  return (
    <>
      <header className="app-header">
        <h1>Art Gallery</h1>
        <p>Discover, showcase, buy and sell artworks.</p>
        <p className="app-count">
          {artworks.length} artworks, {available} available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>My Artworks</h2>
          <ArtworkList artworks={artworks} />
        </section>
      </main>
    </>
  );
}
