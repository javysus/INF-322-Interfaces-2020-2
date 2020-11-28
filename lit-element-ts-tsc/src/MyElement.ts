import { html, css, LitElement, property } from 'lit-element';
import "@ui5/webcomponents-icons/dist/upload.js";
import "@ui5/webcomponents/dist/Button";
import "@ui5/webcomponents/dist/FileUploader.js";
import "@ui5/webcomponents/dist/List.js";
import "@ui5/webcomponents/dist/Card";
import "@ui5/webcomponents/dist/StandardListItem.js";

export class MyElement extends LitElement {
  static styles = css`
  .card-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  #grupos {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }
/*<h2>${this.title} Nr. ${this.counter}!</h2>
<button @click=${this.__increment}>increment</button>*/
  render() {
    return html`

      <div id="grupos">
      <ui5-card avatar="group" heading="Grupo 1" subheading="Direct Reports" class="small"
        style="width:260px; margin: 10px;">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li>Alain Chevalier</ui5-li>
            <ui5-li>Monique Legrand</ui5-li>
            <ui5-li>Michael Adams</ui5-li>
            <ui5-li>María Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>

      <ui5-card avatar="group" heading="Grupo 2" subheading="Direct Reports" class="small"
        style="width:260px; margin: 10px;">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li info="Avanzado" info-state="Success">Alain Chevalier</ui5-li>
            <ui5-li >Monique Legrand</ui5-li>
            <ui5-li >Michael Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>

      <ui5-card avatar="group" heading="Grupo 3" subheading="Direct Reports" class="small"
        style="width:260px; margin: 10px;">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li info="Avanzado" info-state="Success">Alain Chevalier</ui5-li>
            <ui5-li >Monique Legrand</ui5-li>
            <ui5-li >Michael Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>

      <ui5-card avatar="group" heading="Grupo 4" subheading="Direct Reports" class="small"
        style="width:260px; margin: 10px;">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li info="Avanzado" info-state="Success">Alain Chevalier</ui5-li>
            <ui5-li >Monique Legrand</ui5-li>
            <ui5-li >Michael Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>

      <ui5-card avatar="group" heading="Grupo 5" subheading="Direct Reports" class="small"
        style="width:260px; margin: 10px;">
        <div class="card-content">
          <ui5-list separators="None" class="card-content-child" style="width: 100%">
            <ui5-li info="Avanzado" info-state="Success">Alain Chevalier</ui5-li>
            <ui5-li >Monique Legrand</ui5-li>
            <ui5-li >Michael Adams</ui5-li>
          </ui5-list>

        </div>
      </ui5-card>

      </div>
    `;
  }
}
