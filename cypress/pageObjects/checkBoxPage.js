import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }


  static get expand() {
    return cy.get('button[class="rct-option rct-option-expand-all"]');
  }

  static get notes() { // wrong
      return cy.get('svg[class="rct-icon rct-icon-uncheck"]');
  }


}

export default CheckBoxPage;
