// const axios = require('axios');

const fetchS = () => {
    console.log("I'm here")
    // Make a request for a user with a given ID
    axios.get('http://localhost:8817/subscribe')
    .then(function (response) {
    // handle success
        console.log(response)
        printT(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .then(function () {
    // always executed
    });
}

const printT = (response) => {
    let targetDiv = document.getElementById("title");
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild);
    }
    response.forEach(element => {
        targetDiv.append(document.createElement("p").appendChild(document.createTextNode(element.title + " " + element.itemsCounter)))
        targetDiv.append(document.createElement("br"));
    });
}

document.onload = fetchS();