import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./my-element.scss";

console.log(styles);

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = [styles];

  render() {
    return html`<div class="container">App title</div>`;
  }
}
