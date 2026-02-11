// ===== THEME TOGGLE =====
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    sessionStorage.setItem("theme", "dark");
  } else {
    sessionStorage.setItem("theme", "light");
  }
}

(function () {
  if (sessionStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
})();

// ===== SIDEBAR TOGGLE (MOBILE) =====
function toggleSidebar() {
  document.querySelector(".sidebar").classList.toggle("open");
}
/* ==============================
   ADMIN AUTH LOGIC (FRONTEND)
   ============================== */

/* ===== LOGIN ===== */
function login() {
  const username = document.getElementById("user").value;
  const password = document.getElementById("pass").value;

  // Demo credentials
  if (username === "admin" && password === "1234") {

    // Set login session
    sessionStorage.setItem("adminLoggedIn", "true");

    // Go to dashboard
    window.location.href = "dashboard.html";

  } else {
    alert("Invalid Username or Password");
  }
}

/* ===== PAGE PROTECTION ===== */
function checkLogin() {
  if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    window.location.replace("login.html");
  }
}

/* ===== LOGOUT ===== */
function logout() {
  sessionStorage.removeItem("adminLoggedIn");
  window.location.replace("login.html");
}
