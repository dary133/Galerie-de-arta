import ArtworkList from "./components/ArtworkList.jsx";
import ClothesGallery from "./components/ClothesGallery.jsx";
import { useEffect, useState } from "react";

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
    artwork_type: "Painting",
    image: "/tablouri/forest.png"
  },
  {
    id: 3,
    title: "Abstract Flowers",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/flowers.png"
  },
  {
    id: 4,
    title: "Pink Blossoms",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/blossoms.png"
},
  {
    id: 5,
    title: "Forgotten Knight",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/knight.png"
},
  {
    id: 6,
    title: "Panther",
    sold: false,
    artwork_type: "Illustration",
    image: "/tablouri/panther.png"
},
  {
    id: 7,
    title: "Gold Panther",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/gold-panther.png"
},
  {
    id: 8,
    title: "Tropical Bloom",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/bloom.png"
},
  {
    id: 9,
    title: "Whispering Woods",
    sold: false,
    artwork_type: "Painting",
    image: "/tablouri/woods.png"
},
  {
    id: 10,
    title: "Mythical Forest",
    sold: false,
    artwork_type: "Digital Art",
    image: "/tablouri/mythical.jpeg"
},
  {
    id: 11,
    title: "Sakura Mountain",
    sold: false,
    artwork_type: "Digital Art",
    image: "/tablouri/sakura.jpeg"
},
  {
    id: 12,
    title: "Coastal Path",
    sold: false,
    artwork_type: "Digital Art",
    image: "/tablouri/beach.jpeg"
}
];

// Artwork types
const ARTWORK_TYPES = [
  "All",
  "Painting",
  "Illustration",
  "Digital Art"
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
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedArtwork, setSelectedArtwork] = useState(null);
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

    if (selectedArtwork?.id === id) {
      setSelectedArtwork(null);
    }
  }

  // Switch between light and dark mode
  function handleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.dataset.theme = newTheme;
  }

  // Filter artworks by type
  function handleTypeFilter(type) {
    setTypeFilter(type);
    setSearch("");
    setShowSuggestions(false);
  }

  // Open enlarged artwork
  function handlePreview(artwork) {
    setSelectedArtwork(artwork);
  }

  // Close enlarged artwork with Escape
  useEffect(() => {
    if (!selectedArtwork) {
      return;
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setSelectedArtwork(null);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedArtwork]);

  // Count available artworks
  const available = artworks.filter(
    (artwork) => !artwork.sold
  ).length;

  // Filter artworks by type and title
  const filteredArtworks = artworks.filter((artwork) => {
    const matchesType =
      typeFilter === "All" ||
      artwork.artwork_type === typeFilter;

    const matchesSearch = artwork.title
      .toLowerCase()
      .includes(search.trim().toLowerCase());

    return matchesType && matchesSearch;
  });

  // Search artworks by title
  const searchMatches = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  // Display all suggestions when reopening search
  const suggestedArtworks = showAllSuggestions
    ? artworks
    : searchMatches;

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
          <a href="#clothes">Clothes</a>
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

          {/* Artwork type filters */}
          <div
            className="artwork-type-filters"
            role="group"
            aria-label="Filter artworks by type"
          >
            {ARTWORK_TYPES.map((type) => (
              <button
                key={type}
                type="button"
                className="artwork-type-button"
                aria-pressed={typeFilter === type}
                onClick={() => handleTypeFilter(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Artwork list */}
          {filteredArtworks.length > 0 ? (
            <ArtworkList
              artworks={filteredArtworks}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onPreview={handlePreview}
            />
          ) : (
            <p className="empty">
              {artworks.length === 0
                ? "No artworks available."
                : "No artworks found."}
            </p>
          )}

          {/* Artwork search */}
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
                  setTypeFilter("All");
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
                    setTypeFilter("All");
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
                      setTypeFilter("All");
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
        
        {/* Painting on clothes */}
        <ClothesGallery />

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

      {/* Enlarged artwork preview */}
      {selectedArtwork && (
        <div
          className="artwork-lightbox-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedArtwork(null);
            }
          }}
        >
          <div
            className="artwork-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`Preview of ${selectedArtwork.title}`}
          >
            <button
              type="button"
              className="artwork-lightbox-close"
              onClick={() => setSelectedArtwork(null)}
              aria-label="Close artwork preview"
            >
              ×
            </button>

            <img
              src={selectedArtwork.image}
              alt={selectedArtwork.title}
              className="artwork-lightbox-image"
            />

            <h3>{selectedArtwork.title}</h3>
            <p>{selectedArtwork.artwork_type}</p>
          </div>
        </div>
      )}
    </>
  );
}
