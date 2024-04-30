function kategory() {
    var alter = prompt("Bitte geben Sie Ihr Alter ein:");
    alter = parseInt(alter); // Um sicherzustellen, dass das Alter eine Zahl ist

    if (alter < 6) {
        console.log("Die Fahrt ist kostenlos.");
    } else if (alter >= 6 && alter <= 17) {
        console.log("Die Fahrt ist zum Kinderpreis.");
    } else if (alter >= 18 && alter <= 66) {
        console.log("Die Fahrt ist zum Vollpreis.");
    } else {
        console.log("Die Fahrt ist zum Seniorenpreis.");
    }
}

kategory(); // Aufrufen der Funktion zur Bestimmung der Fahrkartenpreiskategorie
