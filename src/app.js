import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const excuseElement = document.querySelector('#DomainGen')
const Pronouns = ['the', 'our'];
const Adjs = ['great', 'big'];
const Nouns = ['jogger', 'racoon'];
const NewSentences = [];

for (let pronoun of Pronouns){
  for (let adj of Adjs){
    for (let noun of Nouns){
      NewSentences.push(`${pronoun}${adj}${noun}`);
    }
  }
}

excuseElement.innerText = NewSentences.join("\n")
}
