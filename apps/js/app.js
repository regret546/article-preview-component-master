const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");

shareButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (shareContent.style.display === "none") {
    shareContent.style.display = "flex";
  } else {
    shareContent.style.display = "none";
  }
});
