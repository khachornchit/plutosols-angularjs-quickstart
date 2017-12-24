var HomeImages;
var NavbarImages;
var Products;
var Dresses;
var NewArrivals;

(
    function () {
        HomeImages = getHomeImages();
        NavbarImages = getNavbarImages();
        Products = getProducts();
        Dresses = getDresses();
        NewArrivals = getNewArrivals();

        function getHomeImages() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", '/api/homeImages', false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            return JSON.parse(xhttp.responseText);
        };

        function getNavbarImages() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", '/api/navbarImages', false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            return JSON.parse(xhttp.responseText);
        };

        function getProducts() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", '/api/products', false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            return JSON.parse(xhttp.responseText);
        };

        function getDresses() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", '/api/dresses', false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            return JSON.parse(xhttp.responseText);
        };

        function getNewArrivals() {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", '/api/newarrival', false);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
            return JSON.parse(xhttp.responseText);
        };
    }
)();