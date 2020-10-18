const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// Create Map
const map = L.map('mapid', options).setView([-22.3605157, -47.3824384], 16);

// Create and Add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});


// Create em add marker
L.marker([-22.3605157, -47.3824384], { icon }).addTo(map)

// Image Gallery
function selectImage(event) {
    const button = event.currentTarget;
    const buttons = document.querySelectorAll(".images button")

    // Remover todas as classes .active
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
        button.classList.remove('active');
    }

    // Selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    // Atualizar o container de Image
    imageContainer.src = image.src;

    // Adicionar a classe .active para este botao
    button.classList.add('active');

}