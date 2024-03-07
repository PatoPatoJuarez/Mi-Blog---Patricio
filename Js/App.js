document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector('#carouselExampleIndicators'), {
        interval: 5000, // Cambia la imagen cada 5 segundos (ajusta según tus preferencias)
        wrap: true // Permite que el carrusel se repita automáticamente
    });
});
