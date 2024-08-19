const btn = document.getElementById("navfirstbtn");
const secondBtn = document.getElementById("navsecondbtn");
const navbar = document.querySelector(".navbtn1");

btn.onclick = () => {
    btn.style.display = "none"
    navbar.style.display = "flex";
    secondBtn.style.display = "flex";
};

secondBtn.onclick = () => {
    secondBtn.style.display = "none"
    navbar.style.display = "none";
    btn.style.display = "flex";
};