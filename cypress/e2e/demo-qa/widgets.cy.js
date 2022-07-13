import ToolTipsPage from "../../pageObjects/toolTipsPage.js";

// 1. https://demoqa.com/tool-tips
// - Hover over the - "hover me button", "field", "Contrary", "1.10.32"
// - Validate text in the tooltip/pop-up

context("Widgets", () => {
  context("Tool tips", () => {

    beforeEach(() => {
      ToolTipsPage.visit();
    });

    it.only("Hovering, scenario 1", () => {
      ToolTipsPage.hoverButton.trigger('mouseover');
      ToolTipsPage.hoverVali.should('have.text','You hovered over the Button');
      ToolTipsPage.hoverField.trigger('mouseover');
      ToolTipsPage.hoverVali.should('contain.text','You hovered over the text field');
      ToolTipsPage.hoverContrary.trigger('mouseover');
      ToolTipsPage.hoverVali.should('contain.text','You hovered over the Contrary');
      ToolTipsPage.hoverNr.trigger('mouseover');
      ToolTipsPage.hoverVali.should('contain.text','You hovered over the 1.10.32');
    });

  });
});