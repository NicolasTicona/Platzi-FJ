'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {

	var translation = str;

	var reverse = function reverse(str) {
		return str.split('').reverse().join('');
	};

	function minMay(str) {
		var length = str.length;
		var translation = '';
		var capitalize = true;

		for (var i = 0; i < str.length; i++) {
			var char = str.charAt(i);
			translation += capitalize ? char.toUpperCase() : char.toLowerCase();
			capitalize = !capitalize;
		}

		return translation;
	}

	if (str == reverse(str)) {
		return minMay(str);
	} else {

		if (translation.length >= 10) {
			var firstHalf = translation.slice(0, Math.round(translation.length / 2));
			var lastHalf = translation.slice(translation.length / 2);
			translation = firstHalf + '-' + lastHalf;
		} else {
			// terminacion AR
			if (str.toLowerCase().endsWith('ar')) {
				translation = str.slice(0, -2);
			}

			// Inicio Z
			if (str.toLowerCase().startsWith('z')) {
				translation += 'pe';
			}
		}

		return translation;
	}
}