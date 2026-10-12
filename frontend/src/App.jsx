
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
        <p>
          Welcome to a platform dedicated to discovering,
          showcasing, buying, and selling art.
        </p>
        <p className="app-count">
          {artworks.length} artworks, {available} available
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Artworks</h2>
          <pre>{JSON.stringify(artworks, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}
