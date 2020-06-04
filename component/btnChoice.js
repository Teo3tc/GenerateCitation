import Generer from "../js/generer";
import StyleUi from "../js/styleUi";

/* Définition of the template  */
const template = document.createElement("template");
template.innerHTML = `
<style>
.container{
  grid-area: 1/1/-1/-1;
  align-self: center;
  justify-self: center;
  display: grid;
  width:100%;
}
h4{
    grid-area: 1/1/-1/-1;
    align-self: center;
    justify-self: center;
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.03em;

}
</style>
<div class=" container choose">
    <h4 class="  full-center grid-full-c-r x-black"></h4>
</div>
`;

class BtnChoice extends HTMLElement {
  constructor() {
    super();
    /* Base */
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    /* Get atribut and put in h4 */
    this.shadowRoot.querySelector("h4").innerText = this.getAttribute(
      "bloc-citation"
    );
  }
  /* Listen  Click of components */
  connectedCallback() {
    this.shadowRoot.querySelector(".choose").addEventListener("click", () => {
      /* style change -- Show btn for generate citation  */
      StyleUi.showBtnForGenerate();
      /* style change -- Show btn RESET  */
      StyleUi.showBtnReset();
      /* style change -- Change color citation1 or citation2 */
      StyleUi.changeColorBtnChoose();
      /* Generer -- Remove citation */
      Generer.removeCitation();
      /* Change the value of the generate button  */
      const btnGenerers = document.querySelectorAll("btn-generer");
      btnGenerers.forEach((btnGenerer) => {
        if (this.getAttribute("bloc-citation") == "Bloc de citation 2") {
          btnGenerer.setAttribute("type-citation", "2");
        } else {
          btnGenerer.setAttribute("type-citation", "1");
        }
      });
    });
  }
  /* Stop listen components */
  disconnectedCallback() {
    this.shadowRoot.querySelector(".choose").removeEventListener();
  }
}
/* Export */
export const btnchoice = window.customElements.define("btn-choice", BtnChoice);
