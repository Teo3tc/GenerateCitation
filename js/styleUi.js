/**
 * --------------
 * Class StyleUI
 * 
 * Allows user interface style changes
 * -------------
 */
class StyleUi {
  constructor() {}
  // Show buttons for quotation generation,
  static showBtnForGenerate() {
    const navBtnGenerer = document.querySelector(".nav2");
    if (navBtnGenerer.style.transform != "scaleY(1)") {
      navBtnGenerer.style.transform = "scaleY(1)";
    }
  }
  // Show button reset 
  static showBtnReset() {
    const btnReset = document.querySelector(".btnReset");
    btnReset.classList.add("showBtnReset");
  }
  // Reset all style of the program
  static resetProgram() {
    const textCitation = document.querySelectorAll(".text-citation");
    textCitation.forEach((text) => {
      text.remove();
    });

    const btnCitation1 = document.querySelector(".btnCitation1");
    const btnCitation2 = document.querySelector(".btnCitation2");

    btnCitation2.classList.remove("blue");
    btnCitation1.classList.remove("green");

    const navBtnGenerer = document.querySelector(".nav2");
    if (navBtnGenerer.style.transform == "scaleY(1)") {
      navBtnGenerer.style.transform = "scaleY(0)";
    }

    const btnGenerers = document.querySelectorAll("btn-generer");
    btnGenerers.forEach(btngenerer => {
      btngenerer.classList.remove('press')

    });
  }
  // Change the color according to the chosen citation block
  static changeColorBtnChoose() {
    const btnCitation1 = document.querySelector(".btnCitation1");
    const btnCitation2 = document.querySelector(".btnCitation2");

    btnCitation1.addEventListener("click", () => {
      btnCitation1.classList.add("green");
      btnCitation2.classList.remove("blue");
    });

    btnCitation2.addEventListener("click", () => {
      btnCitation2.classList.add("blue");
      btnCitation1.classList.remove("green");
    });
  }

  // Change style on press
  static showWitchBtnGenerPress() {
    const btnGenerers = document.querySelectorAll("btn-generer");

    btnGenerers.forEach(btngenerer => {
      btngenerer.classList.remove('press')

      btngenerer.addEventListener('click', () => {
        btngenerer.classList.add('press')
      })

    });
  }
}

// Export 
export default StyleUi;