function toggleJustif() {
	var label = document.getElementById("justif_label");
	var check = document.getElementById("justif_check");
	var div = document.getElementById("statut_justif_div");

	if (check.checked === true)
	{
		label.innerHTML = "requis";
		div.className="";
	}
	else
	{
		label.innerHTML = "non requis";
		div.className="invisible";
	}
}