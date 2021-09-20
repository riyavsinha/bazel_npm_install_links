
export function twoCharacters(): string {
  return generateCharacter() + generateCharacter();
}

function generateCharacter(): string {
  const n = Math.floor(Math.random() * 26);
  return String.fromCharCode('A'.charCodeAt(0) + n);
}
