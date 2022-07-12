import TextBoxPage from "../../pageObjects/textBoxPage";
import CheckBoxPage from "../../pageObjects/checkBoxPage";
import RadioButtonsPage from "../../pageObjects/radioButtonsPage";

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
    it.only("Radio buttons", () => {
      // Scenario 1:
      // Click yesButton
      RadioButtonsPage.yesButton.click();
      // validate the message
      RadioButtonsPage.yesButtonVali.should('have.text',"Yes");
      // click impressiveButton
      // validate the message
      // noButton - validate that the button exists but is disabled
    });
  });

  context("Web tables scenarios", () => {
    // Create WebTables page object
    // Create scenario 1:
    // Click add record button
    // fill in the necessary information
    // click submit button
    // search for the user based on previously added information
    // validate tha the user is visible

    // Create Scenario 2:
    // Delete all table rows
    // Validate that we see text - No rows found
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
