let chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordOne = document.getElementById("passwordOne");
let passwordTwo = document.getElementById("passwordTwo");

function passwordGenerator() {
  let password = "";
  let password2 = "";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);

    password += chars[random];
  }
  passwordOne.textContent = password;
  console.log(passwordOne);
  for (let j = 0; j < 6; j++) {
    let randomTwo = Math.floor(Math.random() * chars.length);

    password2 += chars[randomTwo];
  }
  passwordTwo.textContent = password2;

  let copybutton1 = document.getElementById("copyButton1");
  copybutton1.addEventListener("click", function () {
    navigator.clipboard.writeText(password).then(
      (success) => console.log("text-copied" + password),
      (err) => console.log("error copying text")
    );
  });
  let copybutton2 = document.getElementById("copyButton2");
  copybutton2.addEventListener("click", function () {
    navigator.clipboard.writeText(password2).then(
      (success) => console.log("text-copied" + password2),
      (err) => console.log("error copying text")
    );
  });
}
