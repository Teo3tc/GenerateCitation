/* Importing data */
import citation from "../data/citation";
import citation2 from "../data/citation2";

/**
 * --------------
 * Class Generer
 * 
 * Allows creation and quotation overlay
 * -------------
 */
class Generer {
  constructor() {}

  //  ramdom piece of quote -- with capital letter
  static randomItemFirst(items) {
    let itemMjs = items.filter((item) => item.mjs == true);
    return itemMjs[Math.floor(Math.random() * itemMjs.length)].text;
  }
  //  ramdom piece of quote -- without period or capital
  static randomItem(items) {
    let item = items.filter((item) => item.point == false && item.mjs == false);
    return item[Math.floor(Math.random() * item.length)].text;
  }
  //  ramdom piece of quote -- with a period
  static randomItemLast(items) {
    let itemPts = items.filter((item) => item.point == true);
    return itemPts[Math.floor(Math.random() * itemPts.length)].text;
  }

  // Creation of a complete quote
  static compilationCiation(saveChoice) {
    let citationCompiler = [];
    citationCompiler.push(this.randomItemFirst(saveChoice));
    citationCompiler.push(this.randomItem(saveChoice));
    citationCompiler.push(this.randomItemLast(saveChoice));

    return citationCompiler.join(" ");
  }

  // Addition of elements in the DOM
  static addCitation(nbrDeCitation, saveChoice) {
    console.log(saveChoice);

    // According to choice in parameter data citation or citation2
    if (saveChoice != 0) {
      if (saveChoice == "1") {
        saveChoice = citation;
      } else {
        saveChoice = citation2;
      }
    } else {
      console.log("error");
    }

    let boxCitation = document.querySelector(".citation");

    let textCitation = document.createElement("h3");

    if (saveChoice == citation) {
      textCitation.classList.add("text-citation", "green");
    } else {
      textCitation.classList.add("text-citation", "blue");
    }

    textCitation.textContent = `${nbrDeCitation} -- ${this.compilationCiation(
      saveChoice
    )}`;

    boxCitation.appendChild(textCitation);

    let line = document.createElement("span");
    line.classList.add("line", "w-50", "full-center");
    line.innerHTML = `<p class = "delete" >X</p>`;

    textCitation.appendChild(line);

    let lines = document.querySelectorAll(".line");
    lines.forEach((line) => {
      line.addEventListener("click", () => {
        line.parentElement.remove();
      });
    });
  }
  // Remove of elements in the DOM
  static removeCitation() {
    const textCitation = document.querySelectorAll(".text-citation");
    textCitation.forEach((text) => {
      text.remove();
    });
  }
}

// export 
export default Generer;