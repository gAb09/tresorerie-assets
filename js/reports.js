function basculeReportable(ligne, path) {
	document.location.href=path;
	if (ligne.className === ""){
		ligne.className = "reportable";
	}else
		ligne.className = "";

}

