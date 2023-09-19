const hexadecimalCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
];

function genHexColor() {
    let hexadecimalColor = "";
    const hexadecimalColorSize = 8;

    while (hexadecimalColor.length < hexadecimalColorSize) {
        const randomCharacterIndex = Math.floor(
            Math.random() * hexadecimalCharacters.length
        );

        hexadecimalColor += hexadecimalCharacters[randomCharacterIndex];
    }

    return "#" + hexadecimalColor;
}

export { genHexColor };
