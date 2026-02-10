class RedBox extends HTMLElement {
    constructor() {
        super();

        // create a private box
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
          p {
            color: red;
          }
        </style>

        <button id="btn">Click me</button>
  
        <p>Hello inside shadow</p>

        <slot></slot>
      `;
    }
}

class GreenBox extends HTMLElement {
    constructor() {
        super();

        // create a private box
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
        <style>
          p {
            color: green;
          }
        </style>
  
        <p>Hello inside shadow</p>

        <slot></slot>
      `;
    }
}

customElements.define("red-box", RedBox);
customElements.define("green-box", GreenBox);

const redBox = document.querySelector("red-box");

const btn = redBox.shadowRoot.getElementById("btn");


btn.addEventListener("click", () => {
    console.log("red button clicked");
});


const root = document.getElementById("root");

root.addEventListener("click", e => {
    console.log(e.target);
});