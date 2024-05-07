function generateMultiplicationTable() {
    var tableHtml = ""; 

    for ( var i = 1; i <= 10; i++) {
        tableHtml += "<tr>";
    // Initialisation de la boucle avec la variable i
    tableHtml += `<td>${i}</td>`;
    // Boucle Imbriqué pour le td verticale
    for ( var j = 1; j <= 10; j++) {
        var produit = i*j;
        tableHtml += `<td>${produit}</td>`
    // Initialisation de la boucle avec la variable j et multiplication
    }
    tableHtml +="</tr>";
    // Boucle Imbriqué pour les calculs de multiplication
    }
    document.getElementById('multiplicationTable').innerHTML += tableHtml;
    // Récupération du DOM avec l'ID multiplication avc un innerHTML et une assignation combinée
}

window.onload = generateMultiplicationTable;
// C'est un événement JavaScript qui se déclenche lorsque l'ensemble de la fenêtre avec la fonction JavaScript que nous voulons exécuter lorsque la fenêtre est chargée.
