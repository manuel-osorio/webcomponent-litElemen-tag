import { html, css, LitElement } from 'lit';

export class WebComp extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--web-comp-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      nombre: { type: String },
      email: { type: String },
      verMax:{ type:Boolean }


    };
  }

  constructor() {
    super();
   this.verMax = false
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
    <style>
      div{
        border:1px solid #ddd;
        padding:10px;
        border-radius:5px;
        display:inline-block;
      }
      h1{
        font-size:1.2em;
        font-weight:normal;
      }
      </style>
      <div>
        <h1>${this.nombre}</h1>
        <p> <a href="#" @click="${this.toggle}">ver mas</a></p>
        ${this.verMax?
        html`Email:${this.email}` :
        ``
      }
      </div>
    
    `;
  }
  toggle(e){
    e.preventDefault();
    this.verMax = !this.verMax;
  }


}
