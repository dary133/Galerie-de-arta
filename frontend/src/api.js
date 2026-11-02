// API address
export const API_URL =
  import.meta.env.VITE_API_URL ?? "http://localhost:3001";

// Get artworks from the server
export async function fetchArtworks() {
  const res = await fetch(`${API_URL}/artworks`);

  if (!res.ok) {
    throw new Error(`Server error: ${res.status}`);
  }

  return res.json();
}