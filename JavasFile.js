function upDate(previewPic) {
  console.log("Event triggered!");
  console.log("Source:", previewPic.src);
  console.log("Alt text:", previewPic.alt);

  const imageDiv = document.getElementById("image");

  // Set background image
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;

  // Set alt text
  imageDiv.innerHTML = previewPic.alt;
}

function undo() {
  const imageDiv = document.getElementById("image");

  // Reset background image and text
  imageDiv.style.backgroundImage = "url('')";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}
