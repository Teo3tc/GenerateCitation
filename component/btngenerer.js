import Generer from "../js/generer";
import StyleUi from "../js/styleUi";

/* Définition of the template  */
const template = document.createElement("template");
template.innerHTML = `
<style>
.container{
  grid-area: 1/1/-1/-1;
  color: black;
  align-self: center;
  justify-self: center;
  display: grid;
  width:100%;
}
h4{
  grid-area: 1/1/-1/-1;
  color: black;
  align-self: center;
  justify-self: center;
  font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.03em;

}
</style>
<div class="container btn"     >
        <h4 class="full-center grid-full-c-r x-black"></h4>
</div>
`;

class BtnGenerer extends HTMLElement {
  constructor() {
    super();
    /* Base */

    this.attachShadow({
      mode: "open"
    });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    /* Get atribut and put in h4 */
    this.shadowRoot.querySelector("h4").innerText = this.getAttribute(
      "nbr-de-citation"
    );
  }
  /* Listen  Click of components */
  connectedCallback() {
    this.shadowRoot.querySelector(".btn").addEventListener("click", () => {
      const nbrDeCitations = this.getAttribute("nbr-de-citation");
      if (this.getAttribute("type-citation") != null) {

        /* Generer -- Remove citation */
        Generer.removeCitation();
        /* Change on press btn */
        StyleUi.showWitchBtnGenerPress()
        // Loop according to the number of citation to generate
        for (let index = 0; index < parseInt(nbrDeCitations); index++) {
          let nbrDeCitation = index + 1;
          /* Generer -- Add citation */
          Generer.addCitation(
            nbrDeCitation,
            this.getAttribute("type-citation")
          );
        }
      }
    });
  }
  /* Stop listen components */
  disconnectedCallback() {
    this.shadowRoot.querySelector(".btn").removeEventListener();
  }
}

export const btnGenerer = window.customElements.define(
  "btn-generer",
  BtnGenerer
);