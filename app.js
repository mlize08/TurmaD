 // Selecionar a imagem
 const image = document.getElementById('hover-image');
 

 // Adicionar o efeito ao passar o mouse
 image.addEventListener('mouseenter', () => {
   image.style.transform = 'scale(1.2)'; // Aumenta a escala
 });

 // Remover o efeito ao tirar o mouse
 image.addEventListener('mouseleave', () => {
   image.style.transform = 'scale(1)'; // Volta ao tamanho original
 });