//AUTHENTIFICATION

const isLoggedIn = () => {
  return window.localStorage.getItem("loggedIn");
};

const startUp = () => {
  if (isLoggedIn()) {
    if (location.href.endsWith("account.html")) location.href = "index.html";
  } else {
    if (!location.href.endsWith("account.html")) location.href = "account.html";
  }
};

const login = (event) => {
  console.log(event);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin" && password === "1234") {
    window.localStorage.setItem("loggedIn", true);
    startUp();
  }
};

if (location.href.endsWith("account.html")) {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      login();
    }
  });
}

startUp();
