import SelectablePage from "../../pageObjects/selectablePage.page.js"; // - finished

context("Interactions", () => {
  context("Selectable", () => {
    // Create SelectablePage page object
    beforeEach(() => {
      SelectablePage.visit();
    });
    // Create scenario 1:
    it("Selecting, scenario 1", () => {
      // Click on "Cras justo odio"
      SelectablePage.crasJustoOdio.click();
      // Validate that class contains active
      //SelectablePage.crasJustoOdio.should('have.class', 'active');
      // Click on "Dapibus ac facilisis in"
      SelectablePage.dapibusAcFacilisis.click();
      // Validate that chosen buttons contains class active
      SelectablePage.crasJustoOdio.should('have.class', 'active');
      SelectablePage.dapibusAcFacilisis.should('have.class', 'active');
    });
    it.only("Selecting, scenario 2", () => {
      // Create scenario 2:
      // Click on grid
      SelectablePage.grid.click();
      // Click on numbers 4, 8, 6, 2
      SelectablePage.nr.contains("Four").click();
      SelectablePage.nr.contains("Eight").click();
      SelectablePage.nr.contains("Six").click();
      SelectablePage.nr.contains("Two").click();
      // Validate that chosen buttons contains class active
      SelectablePage.nrVali.contains("Four").should('have.class', 'active');
      SelectablePage.nrVali.contains("Eight").should('have.class', 'active');
      SelectablePage.nrVali.contains("Six").should('have.class', 'active');
      SelectablePage.nrVali.contains("Two").should('have.class', 'active');
    });
  });
});
