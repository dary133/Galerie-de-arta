
import ArtworkList from "./components/ArtworkList.jsx";

const artworks = [
  {
    id: 1,
    title: "Sunset Landscape",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/sunset.png"
  },
  {
    id: 2,
    title: "Silent Forest",
    sold: true,
    artwork_type: "Digital Art",
    image: "/tablouri/forest.png"
  },
  {
    id: 3,
    title: "Abstract Flowers",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/flowers.png"
  }
];

export default function App() {
  const available = artworks.filter((artwork) => !artwork.sold).length;

  return (
    <>
      <header id="home" className="app-header">

        <nav className="main-nav">
          <a href="#home">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </nav>

        <h1>Art Gallery</h1>
        <p>Discover, showcase, buy and sell artworks.</p>
        <p className="app-count">
          {artworks.length} artworks, {available} available
        </p>
      </header>

      <main className="container">
        <section id="gallery" className="panel">
          <h2>My Artworks</h2>
          <ArtworkList artworks={artworks} />
        </section>

        <section id="about" className="panel">
          <h2>About Art Gallery</h2>
          <p>
            Art Gallery is a platform dedicated to discovering,
            showcasing, buying and selling artworks.
            It allows artists to share their creations
            and art enthusiasts to explore different types of art.
          </p>
        </section>
      </main>
    </>
  );
}
