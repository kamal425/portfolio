function go(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

function toggleMode(){
  document.body.classList.toggle("dark");
}

function toggleMenu(){
  document.querySelector("nav ul").classList.toggle("show");
}

document.getElementById("year").innerText = new Date().getFullYear();

//EMAILJS

const form = document.getElementById("contact-form");
if(form){
  form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send(
    "service_100",
    "template_93zkpal",
    {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      purpose: document.getElementById("purpose").value,
      message: document.getElementById("message").value
    },
    "wmuuj_P1sDeF2N5eC"
  ).then(() => {
    alert("Message sent!");
  });
});
}

//Typing Effect (ONLY ONE)
const texts = ["MERN Developer", "Frontend Developer"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  let current = texts[i];

  document.getElementById("typing").innerHTML = current.substring(0, j);

  if (!isDeleting) {
    j++;
    if (j > current.length) {
      isDeleting = true;
      setTimeout(type, 1500); // pause
      return;
    }
  } else {
    j--;
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  }

  setTimeout(type, isDeleting ? 100 : 200);
}

// ✅ page load hone ke baad hi start hoga
window.onload = () => {
  if(document.getElementById("typing")){
  type();
  }
};