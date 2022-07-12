import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }


  static get yesButton() {
    return cy.get('[class="custom-control-label"][for="yesRadio"]');
  }

  static get yesButtonVali() {
    return cy.get('span[class="text-success"]');
  }


}

export default RadioButtonsPage;
