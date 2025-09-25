// Select all buttons with the class .btn
const buttons = document.querySelectorAll<HTMLButtonElement>(".btn");

// Add event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const electionItem = button.closest(".election-item");
    const electionTitle = electionItem?.querySelector("h3")?.textContent ?? "Unknown Election";
    const action = button.textContent?.trim() ?? "Unknown Action";
    alert(`You clicked "${action}" for ${electionTitle}`);
  });
});
