function basculeReportable(ligne, path) {
	document.location.href=path;
	if (ligne.className === ""){
		ligne.className = "reportable";
	}else
	ligne.className = "";

	var xhr = getXMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status === 0)) {

		}
		xhr.open("GET", "reports/setReportable/"+ligne.id, true);
		xhr.send(null);
	};
}