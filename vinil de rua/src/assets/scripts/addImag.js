const zonaUpload = document.getElementById('zonaUpload');
const inputArquivo = document.getElementById('inputArquivo');
const imagemPreview = document.getElementById('imagemPreview');
const iconeUpload = document.getElementById('iconeUpload');
const botaoAdicionar = document.getElementById('botaoAdicionar');


zonaUpload.addEventListener('click', () => inputArquivo.click());

// quando o caba escolhe a img
inputArquivo.addEventListener('change', e => {
  const arquivo = e.target.files[0];
  mostrarPreview(arquivo);
});

// arrastar img
['dragenter', 'dragover'].forEach(evento => {
  zonaUpload.addEventListener(evento, e => {
    e.preventDefault();
    zonaUpload.classList.add('arrastando');
  });
});

['dragleave', 'drop'].forEach(evento => {
  zonaUpload.addEventListener(evento, e => {
    e.preventDefault();
    zonaUpload.classList.remove('arrastando');
  });
});

zonaUpload.addEventListener('drop', e => {
  const arquivo = e.dataTransfer.files[0];
  mostrarPreview(arquivo);
});



// mostraa imagem
function mostrarPreview(arquivo) {
  if (!arquivo || !arquivo.type.startsWith('image/')) return;
  const leitor = new FileReader();
  leitor.onload = () => {
    imagemPreview.src = leitor.result;
    imagemPreview.style.display = 'block';
    iconeUpload.style.display = 'none';
  };
  leitor.readAsDataURL(arquivo);
}

// mensagem q adicionou
botaoAdicionar.addEventListener('click', () => {
  if (imagemPreview.src) {
    alert('Imagem adicionada com sucesso!');
  } else {
    alert('Por favor, selecione uma imagem antes.');
  }
});