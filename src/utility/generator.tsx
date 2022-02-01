function generateArray(from: number, to: number): number[] {
  const array = [];
  for (let i = from; i <= to; i++) {
    array.push(i);
  }
  return array;
}
const getLowerCase = () => generateArray(97, 122);
const getUpperCase = () => generateArray(65, 90);
const getNumbers = () => generateArray(48, 57);
const getSymbol = () =>
  generateArray(33, 47)
    .concat(generateArray(58, 64))
    .concat(generateArray(91, 96))
    .concat(generateArray(123, 126));

export function generatePassword(
  charlength: number,
  includeUppercase?: boolean,
  includeNumbers?: boolean,
  includeSymbols?: boolean
): string {
  let charCodes = getLowerCase();
  if (includeUppercase) charCodes = charCodes.concat(getUpperCase());
  if (includeNumbers) charCodes = charCodes.concat(getNumbers());
  if (includeSymbols) charCodes = charCodes.concat(getSymbol());

  const passwordCharacters = [];
  for (let i = 0; i < charlength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];

    passwordCharacters.push(String.fromCharCode(characterCode));
  }

  return passwordCharacters.join("");
}
