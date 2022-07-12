import BasePage from "./basePage";

class CheckBoxPage extends BasePage {
  static get url() {
    return "/checkbox";
  }

  static get expand() {
    return cy.get('button[class="rct-option rct-option-expand-all"]');
  }

  static get notes() {
    return cy.get('span[class="rct-title"]').contains("Notes");
  }
  static get react() {
    return cy.get('span[class="rct-title"]').contains("React");
  }
  static get angular() {
    return cy.get('span[class="rct-title"]').contains("Angular");
  }
  static get general() {
    return cy.get('span[class="rct-title"]').contains("General");
  }
  static get excel() {
    return cy.get('span[class="rct-title"]').contains("Excel File.doc");
  }

  static get resultVali() {
    return cy.get('span[class="text-success"]');
  }

  static get office() {
    return cy.get('span[class="rct-title"]').contains("Office");
  }
}

export default CheckBoxPage;
