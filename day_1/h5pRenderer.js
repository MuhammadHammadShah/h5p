// h5pRenderer.js

export function renderH5P(fileUrl) {
    const container = document.getElementById('h5p-container');
    container.innerHTML = '';
  
    new H5PStandalone.H5P(container, {
      h5pContent: fileUrl,
    });
  }