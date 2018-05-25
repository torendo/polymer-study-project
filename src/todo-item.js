import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-icon-button/paper-icon-button';
import './shared-styles.js';
import './my-icons.js';

class TodoItem extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host([completed]) {
          display: block;
          opacity: .25;      
        }
      </style>

      <div class="container">
        <paper-checkbox checked="{{todo.completed}}" class="flexchild" on-click="handleToggle">[[todo.description]]</paper-checkbox>
        <paper-icon-button icon="my-icons:close" on-click="handleRemove"></paper-icon-button>
      </div>
    `;
  }
  static get properties() { return {
    todo: {
      type: Object
    },
    completed: {
      type: Boolean,
      reflectToAttribute: true
    }
  }}
  handleRemove(e) {
    this.dispatchEvent(new CustomEvent('remove'));
  }
  handleToggle(e) {
    this.dispatchEvent(new CustomEvent('toggle'));
  }
}

window.customElements.define('todo-item', TodoItem);
