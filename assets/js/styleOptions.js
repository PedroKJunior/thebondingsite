const element = document.getElementsByClassName("input-select"); /** x */

for (let i = 0; i < element.length; i++) {
  let elementSelected = element[i].getElementsByTagName(
    "select"
  )[0]; /** selElement */

  const divSelected = document.createElement("div"); /** a */
  divSelected.setAttribute("class", "select-selected");
  divSelected.innerHTML =
    elementSelected.options[elementSelected.selectedIndex].innerHTML;
  element[i].appendChild(divSelected);

  const div = document.createElement("div"); /** b */
  div.setAttribute("class", "select-items select-hide");

  for (let j = 1; j < elementSelected.length; j++) {
    const divCLicked = document.createElement("div"); /** c */
    divCLicked.innerHTML = elementSelected.options[j].innerHTML;
    divCLicked.addEventListener("click", (event) => {
      const option = this.parentNode.parentNode.getElementsByTagName(
        "select"
      )[0]; /** s */
      const optionSibling = this.parentNode.previusSibling; /** h */

      for (let x = 0; x < option.length; x++) {
        if (option.options[x].innerHTML == this.innerHTML) {
          option.selectedIndex = x;
          optionSibling.innerHTML = this.innerHTML;

          const parentNode = this.parentNode.getElementsByClassName(
            "same-as-selected"
          );

          for (let y = 0; y < parentNode.length; y++) {
            parentNode[y].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      optionSibling.click();
    });
    div.appendChild(divCLicked);
  }

  element[i].appendChild(div);
  divSelected.addEventListener("click", (event) => {
    event.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(thisElement) {
  const arrayNo = [];
  const item = document.getElementsByClassName("select-items"); /** x */
  const selected = document.getElementsByClassName("select-selected"); /** y */

  for (let i = 0; i < selected.length; i++) {
    thisElement === selected[i]
      ? arrayNo.push(i)
      : selected[i].classList.remove("select-arrow-active");
  }

  for (let i = 0; i < item.length; i++) {
    if (arrayNo.indexOf(i)) {
      item[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
