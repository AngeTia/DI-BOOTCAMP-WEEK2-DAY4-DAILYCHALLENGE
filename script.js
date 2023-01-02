// DAILY CHALLENGE

let userWords = prompt("Veuillez entrer plusieurs mots (séparés par des virgules)");
let tabWords = userWords.split(",");

function wordsBigger(userWords) {
  let lengthWordsBig = 0;
  for (let i = 0; i < tabWords.length; i++) {
    if (lengthWordsBig < tabWords[i].length) {
      lengthWordsBig = tabWords[i].length;
    }
  }
  return lengthWordsBig;
}
// Affiche les étoiles au dessus
console.log("*".repeat(wordsBigger() + 4));

for (let i = 0; i < tabWords.length; i++) {
  console.log(
    // Les étoiles encadrant les mots de l'utilisateur
    "* " + tabWords[i] + " ".repeat(wordsBigger() - tabWords[i].length) + " *"
  );
}
// Affiche les étoiles à la fin du programme
console.log("*".repeat(wordsBigger() + 4));
