document.querySelector(".kwiatkov").onclick = function () {
  location.href = "https://open.spotify.com/artist/6rYrOjjH6E4oafPJCUf0Gx?si=Sx4CKyn1RFCPDghEOL-F-g&nd=1";
};
document.querySelector(".spotify").onclick = function () {
  location.href = "https://open.spotify.com/artist/6rYrOjjH6E4oafPJCUf0Gx?si=Sx4CKyn1RFCPDghEOL-F-g&nd=1";
};
document.querySelector(".email").onclick = function () {
  navigator.clipboard.writeText("kwiatkowski.mtz@gmail.com");
  document.querySelector(".email").innerHTML = "Copied!";
  setTimeout(() => {
    document.querySelector(".email").innerHTML = "<i class='fa-solid fa-envelope'></i>";
  }, 1000);
};
document.querySelector(".instagram").onclick = function () {
  location.href = "https://www.instagram.com/kwiiatkov/";
};
