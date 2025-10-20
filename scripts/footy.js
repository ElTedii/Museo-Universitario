fetch("footy.html")
    .then(response => response.text())
    .then(data => {
        console.log(data);
    document.getElementById("footy").innerHTML = data;
});