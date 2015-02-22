	/* NOTA : peut accéder à 2 tableaux créés dans le constructeur et passé via la page html.
	Nommés "separateurs" et "statut_justif", il contiennent respectivement les valeurs 
	de statut_justif et de séparateur pour chaque type d'écriture existant.
	*/
	function toggleJustif(select) {
		/* Extraction de l'indicateur. Mis dans une variable (num). 
		Ceci permet de n'utiliser qu'une seule fonction 
		que l'on agisse sur l'écriture principale ou l'écriture liée.
		Valeur 1 pour l'écriture principale.
		Valeur 2 pour l'écriture liée s'il s'agit d'un écriture double. */
		var num = select.id.replace('type_id', '');

		/* Mise en variable des éléments devant être modifiés (en tenant compte de num) */
		// La div principale
		var div = document.getElementById("divjustificatif" + num);
		// Le label
		var label = div.getElementsByTagName("label")[0];
		// Le séparateur
		var span = document.getElementById("sep" + num);
		/* L'input caché contenant l'indication si un justificatif est requis
		Attention on passe par un input pour pouvoir appliquer une règle de validation ensuite */
		var pour_validation = document.getElementById("statut_justif" + num);

		var type_id = select.value;

		pour_validation.value = statut_justif[type_id];

		// alert("num : "+num+
		// "\njustif requis ? : "+statut_justif[type_id]+
		// "\npour_validation : "+pour_validation.value);
		

		if(statut_justif[type_id] === '0')
		{
			div.className = 'input locked';
			label.innerHTML = "Justificatif non requis";
		}else{
			var sep = separateurs[type_id];
			div.className = 'input';
			label.innerHTML = "Justificatif requis";
			span.innerHTML = sep;
		}

	}