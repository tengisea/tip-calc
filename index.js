const billInput = document.getElementById("bill-input");
const hariu = document.getElementById("hariu");

const sanitizeBillInput = (input) => {
  input = input.replace(/[^\d.]/g, "");

  if ((input.match(/\./g) || []).length > 1) {
    return input.slice(0, -1);
  }
  return input;
};

billInput.addEventListener("input", (event) => {
  billInput.value = sanitizeBillInput(event.target.value);
});

const tips = document.getElementsByClassName(`tip-buttons`)[0];

tips.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") return;

  const percentage = parseFloat(event.target.textContent.replace("%", ""));
  const billAmount = parseFloat(billInput.value);

  const tipAmount = billAmount * (percentage / 100);

  hariu.textContent = tipAmount + billAmount;
});

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  billInput.value = "";
  total.textContent = "";
  console.log(total);
});