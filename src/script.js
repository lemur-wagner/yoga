function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}

let changeThemeButton = document.querySelector(".change-theme");
changeThemeButton.addEventListener("click", changeTheme);
