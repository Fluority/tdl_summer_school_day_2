import BasePage from "./basePage";

class TextBoxPage extends BasePage {
  static get url() {
    return "/text-box";
  }

  static get username() {
    return cy.get("#userName");
  }

  static get email() {
    return cy.get("#userEmail");
  }

  static get currAddress() {
    return cy.get('#currentAddress');
  }

  static get permAddress() {
    return cy.get('#permanentAddress');
  }

  static get submit() {
    return cy.get('#submit');
  }
}

export default TextBoxPage;
