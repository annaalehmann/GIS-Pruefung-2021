"use strict";
var pruefungsabgabe;
(function (pruefungsabgabe) {
    /*Variablen Deklaration für den Login-BUtton*/
    let buttonLogin = document.querySelector("button#login");
    /*Beim klicken auf den Button wird die Funktion handleLogin durchgeführt*/
    buttonLogin.addEventListener("click", handleLogin);
    /*Variablen Deklaration für den Registrieren-BUtton*/
    let buttonRegistrierung = document.querySelector("button#registrierung");
    /**Beim klicken auf den Button wird die Funktion handleLogin durchgeführt**/
    buttonRegistrierung.addEventListener("click", handleRegistrierung);
    async function handleRegistrierung() {
        /*Zugriff auf die Formularwerte des Formulars "formular"*/
        let formData = new FormData(document.forms[0]);
        /*Mit URLSearchParams Daten aus dem FormData-Objekt generieren, any, da Typescript FormData als Parameter nicht akzeptiert*/
        let query = new URLSearchParams(formData);
        /*let url: string = "https://gis-pruefung-2021.herokuapp.com";*/
        let _url = "http://localhost:8100";
        _url += "/registrierung" + "?" + query.toString();
        await fetch(_url);
    }
    /*async: Funktion als asynchrone Kommunikation deklariert, Promise: liefert Antwort vom Server, void: kein Wert? */
    async function handleLogin() {
        /*Zugriff auf die Formularwerte des Formulars "formular"*/
        let formData = new FormData(document.forms[0]);
        /*Mit URLSearchParams Daten aus dem FormData-Objekt generieren, any, da Typescript FormData als Parameter nicht akzeptiert*/
        let query = new URLSearchParams(formData);
        /* let _url: string = "https://gis-pruefung-2021.herokuapp.com";*/
        let _url = "http://localhost:8100";
        _url = _url + "/login" + "?" + query.toString();
        /*await: Ausführung der Funktion kann unterbrochen und zu einem späteren Zeitpunkt fortgesetzt werden, fetch: an den Server Anfrage verschicken und auf Antwort warten */
        let response = await fetch(_url);
        let responseText = await response.text();
        console.log(responseText);
        if (responseText == "true") {
            localStorage.setItem("user", responseText);
            window.location.href = "index.html";
        }
    }
})(pruefungsabgabe || (pruefungsabgabe = {}));
//# sourceMappingURL=login.js.map