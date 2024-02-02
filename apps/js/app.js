const shareButton = document.querySelector("#share-btn");
const shareContent = document.querySelector("#share-content");

shareButton.addEventListener("click", function () {
  const computedStyle = window.getComputedStyle(shareContent);

  if (computedStyle.display === "none") {
    shareContent.style.display = "flex";
  } else {
    shareContent.style.display = "none";
  }
});
