import BasePage from "./basePage";

class ButtonsPage extends BasePage {
  static get url() {
    return "/buttons";
  }

  static get doubleClick() {
    return cy.get('#doubleClickBtn');
  }

  static get doubleClickVali() {
    return cy.get('#doubleClickMessage');
  }

  static get rightClick() {
    return cy.get('#rightClickBtn');
  }

  static get rightClickVali() {
    return cy.get('#rightClickMessage');
  }

  static get dynamicClick() {
    return cy.get('button[class="btn btn-primary"]').contains(/^Click Me$/);
  }

  static get dynamicClickVali() {
    return cy.get('#dynamicClickMessage');
  }
}

export default ButtonsPage;