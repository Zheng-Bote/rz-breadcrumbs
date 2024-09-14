/**
 * @name rz-breadcrumbs
 * @abstract web component for autamatic breadcrumbs
 * @description plain vanilla
 * @version 1.0.0
 * @author ZHENG Robert
 */

class BreadcrumbsComponent extends HTMLElement {
  static get observedAttributes() {
    return ["window_location"];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }

  rmEmpty(item) {
    if (item.length > 0) {
      return item;
    }
  }

  render() {
    const url = window.location;
    const origin = url.origin + "/"; //test/";
    const path = url.pathname;
    let a_arr = path.split("/");
    let html = "false";

    const arr = a_arr.filter(this.rmEmpty);

    if (path.endsWith(".html")) {
      arr.length = arr.length - 1;
    }

    const bread = document.createElement("ul");
    bread.classList.add("breadcrumb");
    bread.innerHTML = `<li><a href="${origin}">Main</a>`;

    if (a_arr.length === 0) {
      return;
    }

    const uri_arr = [];
    for (let i = 0; i < arr.length; i++) {
      uri_arr.push(arr[i]);
      let text = origin;
      text += uri_arr.join("/");

      if (i === arr.length - 1) {
        if (path.endsWith(".html")) {
          bread.innerHTML += `<li><a href="${text}">${arr[i]}</a></li>`;
        } else {
          bread.innerHTML += `<li>${arr[i]}</li>`;
        }
      } else {
        bread.innerHTML += `<li><a href="${text}">${arr[i]}</a></li>`;
      }
    }

    this.appendChild(bread);
  }
}

customElements.define("rz-breadcrumbs", BreadcrumbsComponent);
