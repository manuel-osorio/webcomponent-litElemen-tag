
import { html, css, LitElement } from 'lit';
import '../web-comp.js';
export class WebComplist extends LitElement {
  

  static get properties() {
    return {
     contact:{
        type:Array
       }
    };
  }

  constructor() {
    super();
    this.contact = [
        {
            nombre:'lucho Marques',
            email:'user1_email@email.com'
        },
        {
            nombre:'lucho Marques',
            email:'user1_email@email.com'
        }, {
            nombre:'lucho Marques',
            email:'user1_email@email.com'
        }
    ]
    
  }



  render() {
    return html`
    <div>
        ${this.contact.map(contact => 
            html`<web-comp
            nombre = "${contact.nombre}"
            email="${contact.email}"></web-comp>
            `
            )}
    </div>
    `;
  }
  


}
