/* NUMBER TO WORDS FUNCTION || Adapted from https://gist.github.com/ForbesLindesay/5467742 */
const numToWords = (num) => {
	const ones = [
		"",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine",
		"ten",
		"eleven",
		"twelve",
		"thirteen",
		"fourteen",
		"fifteen",
		"sixteen",
		"seventeen",
		"eighteen",
		"nineteen",
	];
	const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	const numString = num.toString();

	if (num < 0) throw new Error("Negative numbers are not supported.");
	if (num === 0) return "zero";

	// 1 to 20
	if (num < 20) return ones[num];
	if (numString.length === 2) return tens[numString[0]] + " " + ones[numString[1]];

	// 100 and more
	if (numString.length == 3) {
		if (numString[1] === "0" && numString[2] === "0") return ones[numString[0]] + " hundred";
		else return ones[numString[0]] + " hundred and " + convert(+(numString[1] + numString[2]));
	}

	if (numString.length === 4) {
		const end = +(numString[1] + numString[2] + numString[3]);
		if (end === 0) return ones[numString[0]] + " thousand";
		if (end < 100) return ones[numString[0]] + " thousand and " + convert(end);
		return ones[numString[0]] + " thousand " + convert(end);
	}
};

/* CAPITALIZE FUNCTION */
const capitalize = (str) => {
	if (typeof str !== "string") return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
};

/* DEFAULT OBJECT */
const helperFunctions = { numToWords, capitalize };

/* EXPORT */
export default helperFunctions;
