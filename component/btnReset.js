import StyleUi from "../js/styleUi";

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
    color: rgb(180, 3, 3);
    align-self: center;
    justify-self: center;
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 0.03em;

}
</style>
<div class=" container reset">
    <h4 class=" choose full-center grid-full-c-r x-black">RESET</h4>
</div>
`;

class BtnReset extends HTMLElement {
  constructor() {
    super();
    /*BASE*/
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot.querySelector(".reset").addEventListener("click", () => {
      // Reset all style of the program
      StyleUi.resetProgram();
    });
  }
  disconnectedCallback() {
    this.shadowRoot.querySelector(".reset").removeEventListener();
  }
}

export const btnReset = window.customElements.define("btn-reset", BtnReset);
