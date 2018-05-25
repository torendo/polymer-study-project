import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import './my-icons.js';
import './my-view';

// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;
          display: block;
        }
        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
        }
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
      </style>

      <app-header slot="header" condenses="" reveals="" effects="waterfall">
        <app-toolbar>
          <div main-title="">ToDo List</div>
        </app-toolbar>
      </app-header>

      <my-view name="view"></my-view>
    `;
  }
}

window.customElements.define('my-app', MyApp);
