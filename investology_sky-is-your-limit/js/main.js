// Making a map and titles
const mymap = L.map('map').setView([37.976225, 23.777586], 17);
// add a icon-marker
var myIcon = L.icon({
    iconUrl: '../img/logo-icon.png',
    iconSize: [100, 95],
    iconAnchor: [25, 16],
    // popupAnchor: [-3, -76],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

// add a marker
const marker = L.marker([37.976225, 23.777586], { icon: myIcon }).addTo(mymap);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);


// Sticky menu background 
window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
})




// Smooth Scrolling
$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});


// add currnet year to the footer
let currentDay = new Date()
let year = currentDay.getFullYear()
document.getElementById('year').innerHTML = year;
