// apiService.js
// Single Responsibility (S in SOLID): ONLY knows how to talk to the Giphy
// API and return parsed data. It never touches the DOM.
//
// Note on the API key: this is Giphy's public "beta" demo key
// (dc6zaTOxFJmzC), commonly used for learning projects like this one.
// It's rate-limited and not meant for production use, but it's fine here.

const API_KEY = '94bbyg0y50hv5aL0N7iUMt2RlQyeCj76';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

/**
 * Fetches a single random GIF.
 * Returns the parsed JSON on success.
 * Throws an Error (with a readable message) if the request fails or the
 * API responds with a non-2xx status — this lets the caller handle both
 * cases the same way with a single try/catch or .catch().
 */
async function fetchRandomGif() {
  const url = `${BASE_URL}/random?api_key=${API_KEY}&rating=g`;

  const response = await fetch(url);

  if (!response.ok) {
    // fetch() does NOT throw on 404/500/etc, so we throw manually here.
    throw new Error(`Giphy API responded with status ${response.status}`);
  }

  return response.json();
}

export { fetchRandomGif };
