// Create Map
const map = L.map('mapid').setView([-22.3605157, -47.3824384], 16);

// Create and Add TileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
});

let marker;

// Create and Add Marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map);
})

// Add photo field
function addPhotoField() {
    // Get photo containers #images
    const container = document.querySelector('#images');

    // Container duplicate #new-image
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // Clone last image add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // Verify if field is empty
    // If YES, not add field on container of photos
    const input = newFieldContainer.children[0];

    if (input.value == '') {
        // If the flow meet a return, so the block code has been finished.
        // Do not continue the end code.
        return
    }

    // Clean field before add on container
    newFieldContainer.children[0].value = '';

    // Add clone on container #images
    container.appendChild(newFieldContainer);
}

function deleteField(event) {
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        // Clear field value
        span.parentNode.children[0].value = '';
        return
    }

    // Delete field
    span.parentNode.remove();
}

// Select YES or NO
function toggleSelect(event) {
    // Remove the .active class of all buttons
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
    })

    // Put the .active class on button clicked
    const button = event.currentTarget;
    button.classList.add('active');

    // Update my input hidden with select value
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
}