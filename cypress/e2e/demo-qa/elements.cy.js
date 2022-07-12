import TextBoxPage from "../../pageObjects/textBoxPage"; // - finished
import CheckBoxPage from "../../pageObjects/checkBoxPage"; // - not finished
import RadioButtonsPage from "../../pageObjects/radioButtonsPage"; // - finished
import WebTablesPage from "../../pageObjects/webTablesPage"; // - finished

context("Elements Page", () => {
  context("Text box scenarios", () => {
    beforeEach(() => {
      TextBoxPage.visit();
    });

    // Create texbox scenario
    // fill in textboxes with necessary information
    // validate the paragraphs
    it("Filling in Text Boxes", () => {
      TextBoxPage.username.type("John Doe");
      TextBoxPage.email.type("johndoe@gmail.com");
      TextBoxPage.currAddress.type("Liepu iela 3, Aizpute");
      TextBoxPage.permAddress.type("Maizes iela 12, Aizpute");
      TextBoxPage.submit.click();
      // Validation
      TextBoxPage.usernameVali.should("have.text", "Name:John Doe");
      TextBoxPage.emailVali.should("have.text", "Email:johndoe@gmail.com");
      TextBoxPage.currAddressVali.should("have.text", "Current Address :Liepu iela 3, Aizpute ");
      TextBoxPage.permAddressVali.should("have.text", "Permananet Address :Maizes iela 12, Aizpute");
    });
  });

  context("Check box scenarios", () => { // not done
    // Create CheckBoxPage page object
    beforeEach(() => {
      CheckBoxPage.visit();
    });
    it("Checkboxes", () => {
      // Create checkbox scenario 1:
      // Click the "+"/expand button
      CheckBoxPage.expand.click();
      // Click Notes, React, Angular, General, Excel File.doc
      CheckBoxPage.notes.click();
      // Validate the clicked checkboxes

      // Create checkbox scenario 2:
      // Click expand button
      // Click Office
      // Validate the checked checkboxes
    });
  });

  context("Radio button scenarios", () => {
    // Create RadioButtons page object
    beforeEach(() => {
      RadioButtonsPage.visit();
    });
    it("Radio buttons", () => {
      // Scenario 1:
      // Click yesButton
      RadioButtonsPage.yesButton.click();
      // validate the message
      RadioButtonsPage.ButtonVali.should('have.text',"Yes");
      // click impressiveButton
      RadioButtonsPage.impressiveButton.click();
      // validate the message
      RadioButtonsPage.ButtonVali.should('have.text',"Impressive");
      // noButton - validate that the button exists but is disabled
      RadioButtonsPage.noButton.should("be.disabled");
    });
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    beforeEach(() => {
      WebTablesPage.visit();
    });
    it.only("Web tables", () => {
      // Create scenario 1:
      // Click add record button
      WebTablesPage.addRecordButton.click();
      // fill in the necessary information
      WebTablesPage.firstName.type("John");
      WebTablesPage.lastName.type("Doe");
      WebTablesPage.email.type("johndoe@gmail.com");
      WebTablesPage.age.type("24");
      WebTablesPage.salary.type("500");
      WebTablesPage.department.type("Human Resources");
      // click submit button
      WebTablesPage.submit.click();
      // search for the user based on previously added information
      WebTablesPage.search.type("johndoe@gmail.com");
      // validate that the user is visible
      WebTablesPage.searchVali.should("contain.text","JohnDoe24johndoe@gmail.com500Human Resources"); // 'Contain' instead of 'have' to ignore spaces
      // Create Scenario 2:
      WebTablesPage.search.clear();
      // Delete all table rows
      // WebTablesPage.delete.click({multiple: true});
      WebTablesPage.delete1.click();
      WebTablesPage.delete2.click();
      WebTablesPage.delete3.click();
      WebTablesPage.delete4.click();
      // Validate that we see text - No rows found
      WebTablesPage.noData.should("contain.text","No rows found");
    });
  });

  context("Buttons scenarios", () => {
    // Create buttons clicking scenario
    // Create Buttons page
    // Check documentation https://docs.cypress.io/api/commands/and for how to perform different types of clicking
    // Click Double click button
    // Validate the double click message
    // Click rightclick button
    // Validate the right click message
    // Do dynamic click
    // Validate dynamic click message
  });
});
