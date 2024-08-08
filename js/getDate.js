function getTodaysDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(today.getDate()).padStart(2, "0");

  return `${day}/${month}/${year}`;
}

document.addEventListener("DOMContentLoaded", function () {
  const todaysDateElement = document.getElementById("todaysDate");
  if (todaysDateElement) {
    todaysDateElement.textContent = getTodaysDate();
  }
});
