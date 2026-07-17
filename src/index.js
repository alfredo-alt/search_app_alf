// index.js
// Orchestrator: the only file that knows about BOTH apiService and
// domController. Neither of those two knows about the other.

import './styles/style.css';
import { fetchRandomGif } from './modules/apiService.js';
import { render, showLoading, showGif, showError } from './modules/domController.js';

const callbacks = {
  async onFetchRandom() {
    showLoading();
    try {
      const data = await fetchRandomGif();
      showGif(data.data);
    } catch (error) {
      showError('Could not load a GIF. Please try again.');
      console.error(error);
    }
  },
};

function init() {
  render(callbacks);
  callbacks.onFetchRandom(); // load one GIF right away on page load
}

init();
