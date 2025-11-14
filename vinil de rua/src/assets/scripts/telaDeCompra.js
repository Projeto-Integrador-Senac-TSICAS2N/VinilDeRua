window.onload = function() {
    // Pegar produto selecionado do localStorage
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    
    if (produtoSelecionado) {
        // Atualizar imagem principal
        document.querySelector('.imgProduto > img').src = produtoSelecionado.img;
        
        // Atualizar título
        document.querySelector('.nomeProduto h1').textContent = produtoSelecionado.titulo;
        
        // Atualizar preço
        document.querySelector('.finalizarCompra p').textContent = 
            `R$ ${produtoSelecionado.preco.toFixed(2)}`;
    }
}

// Função para comprar
function comprarAgora() {
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    
    // Adicionar ao carrinho
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtoSelecionado);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    
    alert('Produto adicionado ao carrinho!');
    window.location.href = '/src/assets/pages/carrinho.html';
}

// No arquivo do catálogo/cards
function selecionarProduto(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify({
        id: produto.id,
        titulo: produto.titulo,
        img: produto.img,
        preco: produto.preco,
        // outros dados necessários...
    }));
    
    window.location.href = '/src/assets/pages/teladecompra.html';
}


// ==============================================
// SPOTIFY - Mostrar faixas e prévias do álbum
// ==============================================
async function buscarAlbumSpotify(nomeAlbum) {
    const token = ''; // 🔑 substitua pelo seu token temporário do Spotify

    const res = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(nomeAlbum)}&type=album&limit=1`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    return data.albums.items[0]; // primeiro resultado
}

async function pegarFaixasSpotify(albumId) {
    const token = '';
    const res = await fetch(
        `https://api.spotify.com/v1/albums/${albumId}/tracks`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    return data.items;
}

// Exibir na tela
async function mostrarTracklistSpotify(nomeAlbum) {
    const album = await buscarAlbumSpotify(nomeAlbum);
    if (!album) {
        console.warn('Álbum não encontrado no Spotify.');
        return;
    }

    const faixas = await pegarFaixasSpotify(album.id);

    const section = document.createElement('section');
    section.classList.add('spotifyPreview');
    section.innerHTML = `
        <h2>Prévia das faixas</h2>
        <img src="${album.images[0].url}" alt="${album.name}" class="capaSpotify">
        <ul class="listaFaixas">
            ${faixas.map(f => `
                <li>
                    <span>${f.track_number}. ${f.name}</span>
                    ${f.preview_url ? `<audio controls src="${f.preview_url}"></audio>` : '<small>(sem prévia disponível)</small>'}
                </li>
            `).join('')}
        </ul>
    `;

    document.querySelector('.infosProduto').after(section);
}

// Rodar tudo depois de carregar produto
window.onload = async function() {
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));
    
    if (produtoSelecionado) {
        // Atualizar imagem principal
        document.querySelector('.imgProduto > img').src = produtoSelecionado.img;
        
        // Atualizar título
        document.querySelector('.nomeProduto h1').textContent = produtoSelecionado.titulo;
        
        // Atualizar preço
        document.querySelector('.finalizarCompra p').textContent = 
            `R$ ${produtoSelecionado.preco.toFixed(2)}`;

        // 🔥 Chamar Spotify baseado no nome do álbum
        await mostrarTracklistSpotify(produtoSelecionado.titulo);
    }
};



// ========================================================
// Exibir produto selecionado + player Spotify dinâmico
// ========================================================

// Função para buscar álbum no Spotify
async function buscarAlbumSpotify(nomeAlbum) {
    const token = ''; // 🔑
    const res = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(nomeAlbum)}&type=album&limit=1`,
        { headers: { Authorization: `Bearer ${token}` } }
    );
    const data = await res.json();
    return data.albums?.items[0];
}

// Função para atualizar o iframe com o álbum encontrado
async function atualizarEmbedSpotify(nomeAlbum) {
    const album = await buscarAlbumSpotify(nomeAlbum);
    const iframe = document.querySelector('.tracklist iframe');

    if (album) {
        // Substitui o SRC do iframe com o ID do álbum encontrado
        iframe.src = `https://open.spotify.com/embed/album/${album.id}?utm_source=generator&theme=0`;
    } else {
        // Se não encontrar o álbum
        iframe.outerHTML = `<p style="color: #303030ff;">Álbum não encontrado no Spotify :(</p>`;
    }
}

// Quando a página carregar...
window.onload = async function() {
    // Recuperar produto do localStorage
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));

    if (produtoSelecionado) {
        // Atualizar imagem principal
        const img = document.querySelector('.imgProduto > img');
        if (img) img.src = produtoSelecionado.img;

        // Atualizar título
        document.querySelector('.nomeProduto h1').textContent = produtoSelecionado.titulo;

        // Atualizar preço
        document.querySelector('.finalizarCompra p').textContent = 
            `R$ ${produtoSelecionado.preco.toFixed(2)}`;

        // 🎧 Atualizar o player Spotify com base no nome do produto
        await atualizarEmbedSpotify(produtoSelecionado.titulo);
    }
};

// Função para comprar
function comprarAgora() {
    const produtoSelecionado = JSON.parse(localStorage.getItem("produtoSelecionado"));

    // Adicionar ao carrinho
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push(produtoSelecionado);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert('Produto adicionado ao carrinho!');
    window.location.href = '/src/assets/pages/carrinho.html';
}

// Função do catálogo (para referência)
function selecionarProduto(produto) {
    localStorage.setItem("produtoSelecionado", JSON.stringify({
        id: produto.id,
        titulo: produto.titulo,
        img: produto.img,
        preco: produto.preco,
    }));

    window.location.href = '/src/assets/pages/teladecompra.html';
}

