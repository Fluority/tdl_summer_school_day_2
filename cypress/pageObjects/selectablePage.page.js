import BasePage from "./basePage";

class SelectablePage extends BasePage {
  static get url() {
    return "/selectable";
  }

  static get crasJustoOdio() {
    return cy.get('li').contains("Cras justo odio");
  }

  static get dapibusAcFacilisis() {
    return cy.get('li').contains("Dapibus ac facilisis in");
  }

  static get grid() {
    return cy.get('#demo-tab-grid');
  }

  static get nr() {
    return cy.get('li[class="list-group-item list-group-item-action"]');
  }

  static get nrVali() {
    return cy.get('li[class="list-group-item active list-group-item-action"]');
  }
}

export default SelectablePage;