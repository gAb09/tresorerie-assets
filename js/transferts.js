function basculeTransferable(ligne, path) {
	document.location.href=path;
	if (ligne.className === ""){
		ligne.className = "transferable";
	}else
	ligne.className = "";

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {

		}
		xhr.open("GET", "transferts/setTransferable/"+ligne.id, true);
		xhr.send(null);
	};
}