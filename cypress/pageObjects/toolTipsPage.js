import BasePage from "./basePage";

class ToolTipsPage extends BasePage {
  static get url() {
    return "/tool-tips";
  }

  static get hoverButton() {
    return cy.get('#toolTipButton');
  }

  static get hoverField() {
    return cy.get('#toolTipTextField');
  }

  static get hoverContrary() {
    return cy.get('a').contains("Contrary");
  }

  static get hoverNr() {
    return cy.get('a').contains("1.10.32");
  }

  static get hoverVali() {
    return cy.get('div[class="tooltip-inner"]');
  }
}

export default ToolTipsPage;