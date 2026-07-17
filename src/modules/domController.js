// domController.js
// Single Responsibility (S in SOLID): ONLY knows how to build/update DOM
// elements. It never imports apiService — it receives data and callback
// functions from the orchestrator (index.js). Same Dependency Inversion
// pattern as the todo-list project: this module could be swapped out
// without apiService ever knowing.

const appRoot = document.getElementById('app');

function render(callbacks) {
  appRoot.innerHTML = '';

  const container = document.createElement('div');
  container.className = 'app-container';

  const heading = document.createElement('h1');
  heading.textContent = 'Random GIF';
  container.appendChild(heading);

  const fetchBtn = document.createElement('button');
  fetchBtn.textContent = 'New GIF';
  fetchBtn.className = 'btn btn--primary';
  fetchBtn.addEventListener('click', () => callbacks.onFetchRandom());
  container.appendChild(fetchBtn);

  const imageArea = document.createElement('div');
  imageArea.className = 'image-area';
  imageArea.id = 'image-area';
  container.appendChild(imageArea);

  appRoot.appendChild(container);
}

function showLoading() {
  const imageArea = document.getElementById('image-area');
  imageArea.innerHTML = '<p class="status-text">Loading...</p>';
}

function showGif(gifData) {
  const imageArea = document.getElementById('image-area');
  imageArea.innerHTML = '';

  const img = document.createElement('img');
  img.src = gifData.images.original.url;
  img.alt = gifData.title || 'GIF';
  img.className = 'gif-image';

  imageArea.appendChild(img);
}

function showError(message) {
  const imageArea = document.getElementById('image-area');
  imageArea.innerHTML = `<p class="status-text status-text--error">${message}</p>`;
}

export { render, showLoading, showGif, showError };
