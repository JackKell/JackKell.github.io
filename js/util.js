function load(scriptId, htmlPath) {
	var scriptEl = document.getElementById(scriptId);
	document.body.removeChild(scriptEl);

	var link = document.querySelector('link[rel="import"]');
	var content = link.import;
	var el = content.querySelector('.partial');
	document.body.appendChild(el.cloneNode(true));
}