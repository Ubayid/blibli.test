const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#floatingPassword")

showPassword.addEventListener("click", function(){
    this.classList.toggle("bi-eye-slash-fill");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password"
    passwordField.setAttribute("type", type)
})

// let input = document.querySelector(".form-control");
// let button = document.querySelector(".btn-lg");

// button.disabled = true;

// input.addEventListener("change", stateHandle);

// function stateHandle() {
//     if(document.querySelector(".form-control").value === "") {
//         button.disabled = true;
//     } else {
//         button.disabled = false;
//     }
// }

const usernameInput = document.getElementById('floatingInput');
  const passwordInput = document.getElementById('floatingPassword');
  const loginButton = document.getElementsByClassName('btn-lg');

  // Tambahkan event listener untuk memantau perubahan dalam input
  usernameInput.addEventListener('input', toggleLoginButton);
  passwordInput.addEventListener('input', toggleLoginButton);

  function toggleLoginButton() {
    // Periksa apakah kedua input memiliki nilai
    if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
      // Aktifkan tombol login jika kedua input memiliki nilai
      loginButton.removeAttribute('disabled');
    } else {
      // Nonaktifkan tombol login jika salah satu atau kedua input kosong
      loginButton.setAttribute('disabled', 'true');
    }
  }






