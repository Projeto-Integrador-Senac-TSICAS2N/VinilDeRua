document.querySelectorAll('.imgProduto img').forEach(img => {
  img.addEventListener('click', function() {
    // Cria o overlay
    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    overlay.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
    document.body.appendChild(overlay);

    overlay.addEventListener('click', function() {
      overlay.remove();
    });
  });
});