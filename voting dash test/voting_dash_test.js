// Select all buttons with the class .btn
const buttons = document.querySelectorAll(".btn");
// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var _a, _b, _c, _d;
        const electionItem = button.closest(".election-item");
        const electionTitle = (_b = (_a = electionItem === null || electionItem === void 0 ? void 0 : electionItem.querySelector("h3")) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : "Unknown Election";
        const action = (_d = (_c = button.textContent) === null || _c === void 0 ? void 0 : _c.trim()) !== null && _d !== void 0 ? _d : "Unknown Action";
        alert(`You clicked "${action}" for ${electionTitle}`);
    });
});
