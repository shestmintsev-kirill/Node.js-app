document.querySelectorAll(".price").forEach((value) => {
  value.textContent = new Intl.NumberFormat("ru-RU", {
    currency: "rub",
    style: "currency",
  }).format(value.textContent);
});
