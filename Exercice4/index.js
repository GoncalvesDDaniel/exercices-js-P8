const btnEl = document.querySelector("#myButton");
btnEl.addEventListener("click", () => {
    const pEl = document.createElement("p");
    pEl.innerText = `Bonjour, vous avez cliqué sur le bouton !`;
    btnEl.insertAdjacentElement("afterend", pEl);
});
