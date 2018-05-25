import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/app-storage/app-localstorage/app-localstorage-document';

class MyModel extends PolymerElement {
  static get template() {
    return html`
      <app-localstorage-document key="todo-list-data" data="{{todos}}"></app-localstorage-document>
    `;
  }
  static get properties() { return {
    todos: {
      type: Array,
      value: () => [],
      notify: true
    },
    total: {
      type: Number,
      computed: '_computeTotal(todos.splices)',
      notify: true
    }
  }}
  _computeTotal() {
    return this.todos.length;
  }
  clear() {
    this.todos = [];
  }
  add(description) {
    this.push('todos', {id: Math.floor(Math.random() * 1e10), completed: false, description});
  }
  remove(id) {
    const pos = this.todos.findIndex(item => item.id === id);
    this.todos.splice(pos, 1);
  }
  toggleStatus(id) {
    const item = this.todos.find(item => item.id === id);
    item.completed = !item.completed;
  }
}

window.customElements.define('my-model', MyModel);
