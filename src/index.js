module.exports = function check(str, bracketsConfig) {
	let openBrackets = [];
	let closeBrackets = [];
	for (let i = 0; i < bracketsConfig.length; i++) {
		openBrackets.push(bracketsConfig[i][0]);
		closeBrackets.push(bracketsConfig[i][1]);
	}
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		if (closeBrackets.includes(str[i]) && stack.length > 0 && closeBrackets.indexOf(str[i]) === openBrackets.indexOf(stack[stack.length - 1])) {
			stack.pop();
		} else if (openBrackets.includes(str[i])) {
			stack.push(str[i]);
		} else {
			return false;
		}
	}
	if (stack.length !== 0) {
		return false;
	} else
		return true;
}
