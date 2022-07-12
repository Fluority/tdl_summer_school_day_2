import BasePage from "./basePage";

class WebTablesPage extends BasePage {
  static get url() {
    return "/webtables";
  }

  static get addRecordButton() {
    return cy.get('#addNewRecordButton');
  }

  static get firstName() {
    return cy.get('#firstName');
  }

  static get lastName() {
    return cy.get('#lastName');
  }

  static get email() {
    return cy.get('#userEmail');
  }

  static get age() {
    return cy.get('#age');
  }

  static get salary() {
    return cy.get('#salary');
  }

  static get department() {
    return cy.get('#department');
  }

  static get submit() {
    return cy.get('#submit');
  }

  static get search() {
    return cy.get('#searchBox');
  }

  static get searchVali() {
    return cy.get('div[class="rt-td"]');
  }

//   static get delete() {
//     return cy.get('span[title="Delete"]')
//   }

  static get delete1() {
    return cy.get('#delete-record-1')
  }
  static get delete2() {
    return cy.get('#delete-record-2')
  }
  static get delete3() {
    return cy.get('#delete-record-3')
  }

  static get noData() {
    return cy.get('div[class="rt-noData"]');
  }
}

export default WebTablesPage;