// String.prototype.customCapitalize = function() {
//     let result = this.charAt(0).toUpperCase() + this.slice(1);
//     return result;
// };

// const str = "hello";
// console.log(str.customCapitalize());

// String.prototype.customReverse = function() {
//     let result = '';
//     for (let i = this.length - 1; i >= 0; i--) {
//         result += this[i];
//     }
//     return result;
// }

// const str = "bruh";
// console.log(str.customReverse());

String.prototype.customVowelCapitalize = function () {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    if (this[i] == "a" || this[i] == "e" || this[i] == "u" || this[i] == "i" || this[i] == "o") {
      result += this[i].toUpperCase();
    } else {
      result += this[i];
    }
  }
  return result;
};

const str = "words with vowels: some random words. P.S. sorry for doing that shit while shaking hands, it's not some silly joke, ive just felt kinda nervous and it happened on its own";
console.log(str.customVowelCapitalize());
