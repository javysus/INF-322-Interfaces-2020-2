import { html, css, LitElement, property } from 'lit-element';
import "@ui5/webcomponents-icons/dist/upload.js";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/FileUploader.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/StandardListItem.js";

export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-element-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>

      <ui5-file-uploader hide-input>
        <ui5-button icon="upload">Upload</ui5-button>
      </ui5-file-uploader>

      <ui5-card avatar="group" heading="Team Space" subheading="Direct Reports" status="3 of 10" class="medium">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li image="../../../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain Chevalier</ui5-li>
            <ui5-li image="../../../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>
            <ui5-li image="../../../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Michael Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>
    `;
  }
}
