"use strict";
var pruefungsabgabe;
(function (pruefungsabgabe) {
    let publishButton = document.getElementById("publish");
    publishButton.addEventListener("click", handlePublishRecipes);
    async function handlePublishRecipes() {
        let formData = new FormData(document.forms[0]);
        let query = new URLSearchParams(formData);
        /* let url: string = "https://gis-pruefung-2021.herokuapp.com";*/
        let _url = "http://localhost:8100";
        _url += "/publish" + "?" + query.toString();
        let response = await fetch(_url, { method: "get" });
        let responseText = await response.text();
        document.getElementById("myRecipes").innerHTML = responseText;
    }
})(pruefungsabgabe || (pruefungsabgabe = {}));
//# sourceMappingURL=script.js.map