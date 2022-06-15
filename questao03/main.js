function displayAlert() {
  const link = document.getElementById("modal");
  link.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Alerta Navegador");
  });
}

displayAlert();
