var elTextIn = document.getElementById('in');
var elTextOut = document.getElementById('out');
var btnExelToMetas = document.getElementById('exel2metas');
var btnReset = document.getElementById('reset');

btnExelToMetas.onclick = function (event) {
	event.preventDefault();
	processMetas();
};

btnReset.onclick = function (event) {
	event.preventDefault();
	clearText();
};

function processMetas() {
	var outText = '$arMetas = array(' + "\r\n";
	var text = elTextIn.value.replace(/	/g, ";").trim().split("\n");
	text.forEach(function (str) {
		str = str.split(';');
		outText += '	\'' + str[0] + '\' => array(' + "\r\n";
		outText += '		\'title\' => \'' + (str[1] ? str[1] : '') + '\',' + "\r\n";
		outText += '		\'descr\' => \'' + (str[2] ? str[2] : '') + '\',' + "\r\n";
		outText += '		\'keywd\' => \'' + (str[3] ? str[3] : '') + '\',' + "\r\n";
		outText += '		\'h1\' => \'' + (str[4] ? str[4] : '') + '\',' + "\r\n";
		outText += '	),' + "\r\n";
	});
	outText += ');';
	elTextOut.value = outText;

	elTextOut.select(); // выделить готовый текст
}

function clearText() {
	elTextIn.value  = '';
	elTextOut.value = '';
}