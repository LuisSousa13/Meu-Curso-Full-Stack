let div = document.createElement("div");
div.textContent = "Passe o mouse sobre mim";
div.style.width = "200px";
div.style.height = "100px";
div.style.backgroundColor = "lightblue";
div.style.textAlign = "center";
div.style.lineHeight = "100px";
document.body.appendChild(div);
div.addEventListener("mouseout", function() {
    alert("Mouse saiu da div!");
});