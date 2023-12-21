const argCoords = { lat: 40.286887, lng: -111.6375428 }
        let map;

        function initMap() {
            map = new google.maps.Map(document.getElementById("map"), {
            center: argCoords,
            zoom: 16,
            });
            marker = new google.maps.Marker({
                position: argCoords,
                map: map,
            })
        }