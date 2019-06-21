import { LitElement, html } from 'lit-element';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

export class FullcalendarWebcomponent extends LitElement {

  render() {
    return html`
    <div id="calendar"></div>
    `;
  }
  firstUpdated() {
    console.log(this.querySelector('#calendar'));
    var calendarEl =this.querySelector('#calendar');

    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ]
    });

    calendar.render();
  }

  createRenderRoot() {
    /**
     * Render template in light DOM. Note that shadow DOM features like 
     * encapsulated CSS are unavailable.
     */
      return this;
    }
}
customElements.define('fullcalendar-webcomponent', FullcalendarWebcomponent);