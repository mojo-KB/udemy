const req = new XMLHttpRequest();

req.onload = function() {
    console.log("It loaded.");
    console.log(this);
}

req.onerror = function() {
    console.log("Error!!!!")
    console.log(this);
}
req.open("GET", "https://swapi.dev/people/1/");
req.send();