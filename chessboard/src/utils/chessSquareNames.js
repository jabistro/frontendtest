export const chessSquareNames = () => {
    let namesArr = [];
    let letter = "a";
    let number = 8;
    for (let i = 1; i <= 64; i++) {
      namesArr = [...namesArr, letter + number.toString()];
      if (i % 8 === 0) {
        number--;
      }
      if (letter === "h") letter = "a"
      else letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
    return namesArr;
}