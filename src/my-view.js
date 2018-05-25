import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button';
import '@polymer/iron-flex-layout/iron-flex-layout';
import './shared-styles.js';
import './my-icons.js';
import './my-model.js';

class MyView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
        .container {
          @apply(--layout-horizontal);
        }
        .flexchild {
          @apply(--layout-flex);
        }
      </style>
      
      <my-model id="todos" todos="{{todos}}" total="{{total}}"></my-model>
      
      <div class="card container">
        <paper-input class="flexchild" id="addNewInput" label="Type description of new ToDo item here"></paper-input>
        <paper-button raised on-click="addNew">Add new</paper-button>
      </div>
      
      <div class="card">
        <template is="dom-repeat" items="{{todos}}" as="todo">
          <p class="container">
            <paper-checkbox class="flexchild">[[todo.description]]</paper-checkbox>
            <paper-icon-button icon="my-icons:close" on-click="remove.bind([[todo.id]])"></paper-icon-button>
          </p>
        </template>
      </div>
      
      <div class="card">
        Total: [[total]]
      </div>
    `;
  }
  addNew() {
    const description = this.$.addNewInput.value;
    if (description) {
      this.$.todos.add(description);
      this.$.addNewInput.value = '';
    }
  }

}

window.customElements.define('my-view', MyView);
