import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/paper-checkbox/paper-checkbox';
import '@polymer/paper-input/paper-input';
import '@polymer/paper-button/paper-button';
import '@polymer/paper-icon-button/paper-icon-button';
import './shared-styles.js';
import './my-icons.js';
import './my-model.js';
import './todo-item.js';

class MyView extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>
      
      <my-model id="todos" todos="{{todos}}" total="{{total}}"></my-model>
      
      <div class="card container">
        <paper-input class="flexchild" id="addNewInput" label="Type description of new ToDo item here"></paper-input>
        <paper-button raised on-click="addNew">Add new</paper-button>
      </div>
      
      <div class="card">
        <template is="dom-repeat" items="{{todos}}" sort="_sortTodos">
          <todo-item todo="{{item}}" on-remove="remove" on-toggle="toggle"></todo-item>
        </template>
      </div>
      
      <div class="card container">
        <template is="dom-if" if=[[total]]>
          <div class="flexchild">Total: [[total]]</div>
          <paper-icon-button icon="my-icons:close" on-click="clear"></paper-icon-button>
        </template>
      </div>
    `;
  }
  _sortTodos(a, b) {
    return a.completed - b.completed;
  }
  addNew() {
    const description = this.$.addNewInput.value;
    if (description) {
      this.$.todos.add(description);
      this.$.addNewInput.value = '';
    }
  }
  remove(e) {
    this.$.todos.remove(e.target.todo.id);
  }
  toggle(e) {
    this.$.todos.toggleStatus(e.target.todo.id);
  }
  clear() {
    this.$.todos.clear();
  }
}

window.customElements.define('my-view', MyView);
