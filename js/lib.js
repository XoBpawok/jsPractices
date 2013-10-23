function getEl(arg) {

	var argArray = arg.split(' '),
		foundElemets = [],
		tmpFoundElemets = [],
		collection,
		i, j, k;

	foundElemets = prefind(argArray[0]);

	for (i = 1; i < argArray.length; i++) {
		for (j = 0; j < foundElemets.length; j++) {
			collection = prefind(argArray[i], foundElemets[j]);
			for (k = 0; k < collection.length; k++) {
				tmpFoundElemets.push(collection[k]);
			}
		}
		foundElemets = tmpFoundElemets;
		tmpFoundElemets = [];
	}

	return foundElemets;

	function find(selector, whereFind) {
		var s = selector;

		whereFind = typeof whereFind === 'undefined' ? document : whereFind;

		if (s[0] === '#') {
			return whereFind.getElementById(s.substring(1, s.length));
		} else if (s[0] === '.') {
			return whereFind.getElementsByClassName(s.substring(1, s.length));
		} else {
			return whereFind.getElementsByTagName(s);
		}
	}

	function prefind(selector, whereFind) {
		var resultArray = [];

		while (selector != '') {
			var tmp = findSelectorIdent(selector);
			resultArray.push(tmp);
			selector = selector.substring(tmp.length);
		}

		var elements = find(resultArray[0], whereFind);

		if (resultArray.length == 1) {
			return elements;
		} else {
			for (var i = 1; i < resultArray.length; i++) {
				elements = getElementsWIthSelector(resultArray[i], elements);
			}
		}

		return elements;
	}

	function getElementsWIthSelector(arrayElement, elements) {
		var tmp = elements,
			result = [];
		for (var i = 0; i < elements.length; i++) {
			if (arrayElement[0] === '#') {
				if (hasId(arrayElement.substring(1, arrayElement.length), elements[i]) !== -1) {
					result.push(tmp[i]);
				}
			} else if (arrayElement[0] === '.') {
				if (hasClass(arrayElement.substring(1, arrayElement.length), elements[i]) !== -1) {
					result.push(tmp[i]);
				}
			} else {
				if (elements[i].tagName === arrayElement) {
					result.push(tmp[i]);
				}
			}
		}

		return result;
	}

	function hasClass(cl, element) {
		var tmp = ' ' + element.className + ' ';
		return tmp.indexOf(' ' + cl + ' ');
	}

	function hasId(id, element) {
		var tmp = ' ' + element.id + ' ';
		return tmp.indexOf(' ' + id + ' ');
	}

	function parseSelector(selector) {
		var idSelector = findSelectorIdent(selector, '#'),
			classSelector = findSelectorIdent(selector, '.');

		if (classSelector < idSelector && !~classSelector) {
			parseSelector(selector.substring(classSelector + 1, selector.length));
		} else if (idSelector < classSelector && !~idSelector) {
			parseSelector(selector.substring(classSelector + 1, selector.length));
		} else {
			return selector;
		}
	}

	function findSelectorIdent(selector) {
		var idIndex = selector.substring(1, selector.length).indexOf('#') + 1;
		var classIndex = selector.substring(1, selector.length).indexOf('.') + 1;

		if (idIndex != 0) {
			if (classIndex != 0) {
				if (idIndex < classIndex) {
					return selector.substring(0, idIndex);
				} else {
					return selector.substring(0, classIndex);
				}
			} else {
				return selector.substring(0, idIndex);
			}
		} else if (classIndex != 0) {
			if (idIndex != 0) {
				if (classIndex < idIndex) {
					return selector.substring(0, classIndex);
				} else {
					return selector.substring(0, idIndex);
				}
			} else {
				return selector.substring(0, classIndex);
			}
		} else {
			return selector;
		}
	}
}