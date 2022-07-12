import BasePage from "./basePage";

class RadioButtonsPage extends BasePage {
  static get url() {
    return "/radio-button";
  }


  static get yesButton() {
    return cy.get('[class="custom-control-label"][for="yesRadio"]');
  }

  static get ButtonVali() {
    return cy.get('span[class="text-success"]');
  }

  static get impressiveButton() {
    return cy.get('[class="custom-control-label"][for="impressiveRadio"]');
  }
  
  static get noButton() {
    return cy.get('[class="custom-control-input disabled"][id="noRadio"]');
  }
}

export default RadioButtonsPage;
