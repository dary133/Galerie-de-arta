
import ArtworkList from "./components/ArtworkList.jsx";
import { useState } from "react";

// Initial artworks
const INITIAL_ARTWORKS = [
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

// Detect system theme
function initialTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [artworks, setArtworks] = useState(INITIAL_ARTWORKS);
  const [search, setSearch] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showAllSuggestions, setShowAllSuggestions] = useState(false);
  const [theme, setTheme] = useState(initialTheme);

  // Change artwork status
  function handleToggle(id) {
    setArtworks((prev) =>
      prev.map((artwork) =>
        artwork.id === id
          ? { ...artwork, sold: !artwork.sold }
          : artwork
      )
    );
  }

  // Delete artwork
  function handleDelete(id) {
    setArtworks((prev) =>
      prev.filter((artwork) => artwork.id !== id)
    );
  }

  // Switch between light and dark mode
  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  // Count available artworks
  const available = artworks.filter(
    (artwork) => !artwork.sold
  ).length;

  // Search artworks by title
  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  // Display all suggestions when reopening the search
  const suggestedArtworks = showAllSuggestions
    ? artworks
    : filteredArtworks;

  return (
    <>
      <header id="home" className="app-header">

        <button
          type="button"
          className="theme-toggle"
          onClick={handleTheme}
          aria-pressed={theme === "dark"}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

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

          {filteredArtworks.length > 0 ? (
            <ArtworkList
              artworks={filteredArtworks}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ) : (
            <p className="empty">
              {artworks.length === 0
                ? "No artworks available."
                : "No artworks found."}
            </p>
          )}

          <div
            className="artwork-search"
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) {
                setShowSuggestions(false);
              }
            }}
          >
            <label htmlFor="artwork-search">
              Search artworks
            </label>

            <div className="search-field">
              <input
                id="artwork-search"
                type="search"
                placeholder="Search or select an artwork..."
                value={search}
                onFocus={() => {
                  setShowSuggestions(true);
                  setShowAllSuggestions(true);
                }}
                onClick={() => {
                  setShowSuggestions(true);
                  setShowAllSuggestions(true);
                }}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setShowSuggestions(true);
                  setShowAllSuggestions(false);
                }}
              />

              <button
                type="button"
                className="search-clear"
                onClick={() => {
                  setSearch("");
                  setShowSuggestions(true);
                  setShowAllSuggestions(true);
                }}
              >
                Clear
              </button>
            </div>

            {showSuggestions && (
              <div className="search-options">

                <button
                  type="button"
                  className="search-option"
                  onClick={() => {
                    setSearch("");
                    setShowSuggestions(false);
                    setShowAllSuggestions(true);
                  }}
                >
                  All artworks
                </button>

                {suggestedArtworks.map((artwork) => (
                  <button
                    type="button"
                    className="search-option"
                    key={artwork.id}
                    onClick={() => {
                      setSearch(artwork.title);
                      setShowSuggestions(false);
                      setShowAllSuggestions(true);
                    }}
                  >
                    {artwork.title}
                  </button>
                ))}

                {suggestedArtworks.length === 0 && (
                  <p className="search-empty">
                    No matching artworks.
                  </p>
                )}

              </div>
            )}
          </div>
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

        <a href="#home" className="back-to-top">
          ↑ Back to top
        </a>
      </main>
    </>
  );
}
