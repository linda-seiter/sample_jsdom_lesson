describe("city paragraph", () => {
  it("is styled", () => {
    require("./jest.setup-tests.js");

    const cityButton = document.getElementById("cityButton");
    cityButton.click();
    const cityP = document.getElementById("city");
    expect(cityP.style.background).toBe("pink");
    expect(cityP.style.color).toBe("white");
    expect(cityP.style.padding).toBe("1em");
    expect(cityP.style.border).toBe("5px solid green");
  });
});
