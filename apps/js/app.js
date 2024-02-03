const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");

shareButton.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(shareContent);

  if (computedStyle.display === "none") {
    shareContent.style.display = "flex";
    shareContent.classList.add("show");
    shareButton.classList.add("clicked");
  } else {
    shareContent.style.display = "none";
    shareButton.classList.remove("clicked");
  }
});
