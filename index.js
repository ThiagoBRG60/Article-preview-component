const closeBtn = document.getElementById("close-button");
const icons = document.getElementById("share-icons");
const share = document.getElementById("share");
const facebook = document.getElementById("facebook");
const twitter = document.getElementById("twitter");
const pinterest = document.getElementById("pinterest");

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("active");
  icons.classList.toggle("selected");
  share.classList.toggle('left')
  facebook.classList.toggle('down')
  twitter.classList.toggle('down')
  pinterest.classList.toggle('down')
});
