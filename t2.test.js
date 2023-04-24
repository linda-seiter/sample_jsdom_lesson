describe("state paragraph", () => {
  it("text content is reassigned", () => {
    require("./jest.setup-tests.js");

    const stateButton = document.getElementById("stateButton");
    stateButton.click();
    const stateP = document.getElementById("state");
    expect(stateP.textContent).toBe("Massachusetts");
  });
});
