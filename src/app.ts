const keyToText = {
    "0": [" "],
    "1": ["a", "b", "c"],
    "2": ["d", "e", "f"],
    "3": ["g", "h", "i"],
    "4": ["j", "k", "l"],
    "5": ["m", "n", "o"],
    "6": ["p", "q", "r", "s"],
    "7": ["t", "u", "v"],
    "8": ["w", "x", "y", "z"],
    "9": [],
    "*": [],
    "#": [],
};

const input: string = "c u l8tr";

let count: number = 0;
for (const char of input.toLowerCase()) {
    for (const entry of Object.entries(keyToText)) {
        const key = entry[0];
        const value = entry[1];
        if(key === char) {
            count += value.length + 1;
            break
        }
        const index = value.findIndex(value => value === char);
        if(index >= 0) {
            count += index + 1;
            break
        }
    }
}
console.log(`input: ${input}`);
console.log(`presses: ${count}`);
