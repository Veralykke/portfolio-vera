function validation() {
    var navn = document.getElementById("navn").value;
    var overskrift = document.getElementById("overskrift").value;
    var telefonnummer = document.getElementById("telefonnummer").value;
    var email = document.getElementById("email").value;
    var beskjed = document.getElementById("beskjed").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    if (navn.length < 5) {
        text = "Vennligst skriv inn gyldig navn ";
        error_message.innerHTML = text;
        return false;
    }
    if (overskrift.length < 10) {
        text = "Vennligst skriv inn en gyldig overskrift ";
        error_message.innerHTML = text;
        return false;
    }
    if (isNAN(telefonnummer || telefonnummer.length != 10)) {
        text = "Vennligst skriv inn et gyldig telefonnummer ";
        error_message.innerHTML = text;
        return false;
    }
    if (email.indexOf("@") === -1 || email.length < 6) {
        text = "Vennligst skriv inn en gyldig Email ";
        error_message.innerHTML = text;
        return false;
    }
    if (message.length <= 140) {
        text = "Please enter more than !";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully");
    return true;
}