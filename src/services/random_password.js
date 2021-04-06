module.exports = {
  getRandomPassword: function (length) {
    var result = "";
    var capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var simpleLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialCharacters = '!"$%&@=?';

    //var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += capitalLetters.charAt(
        Math.floor(Math.random() * capitalLetters.length)
      );
      result += simpleLetters.charAt(
        Math.floor(Math.random() * simpleLetters.length)
      );
      result += numbers.charAt(Math.floor(Math.random() * numbers.length));
      result += specialCharacters.charAt(
        Math.floor(Math.random() * specialCharacters.length)
      );
    }
    return result;
  },
};
