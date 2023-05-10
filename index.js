let logbt = document.querySelector("#login-bt");

let signbt = document.querySelector("#sign-bt");
function login() {
  let nodeList = document.querySelectorAll(".sign").forEach((e) => {
    e.style.display = "block";
  });

  document.querySelectorAll(".login").forEach((e) => {
    e.style.display = "none";
  });
}
function signup() {
  document.querySelectorAll(".login").forEach((e) => {
    e.style.display = "block";
  });
  document.querySelectorAll(".sign").forEach((e) => {
    e.style.display = "none";
  });
}

logbt.onclick = () => {
  login();
};
signbt.onclick = () => {
  signup();
};
let authbtn_mobile = document.querySelector(".mobile-auth-btn");
let modal_cut = document.querySelector(".modal");
let bts = document.querySelector(".bts");
modal_cut.onclick = () => {
  bts.classList.toggle(".modal-cut");
};
bts.onclick = () => {
  bts.classList.toggle(".modal-cut");
};
authbtn_mobile.addEventListener("click", function (e) {
  //  alert(this.textContent);
  let s = this.textContent;
  if (s.includes("create")) {
    this.textContent = "or, sign in";
    login();
  } else {
    this.textContent = "or, create account";
    signup();
  }
});

// body.onresize = () => {

// };

let observe = document.querySelector("#resizable");
function outputsize() {
  //console.log(observe.offsetWidth, observe.offsetHeight);
  document.querySelector(".title").textContent = observe.offsetWidth;
  //window.res(observe.offsetWidth, observe.offsetHeight);
}
outputsize();

new ResizeObserver(outputsize).observe(observe);



