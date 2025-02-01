function slideShow() {
  const pictures = [...document.querySelectorAll(".picture")];
  const imagePos = document.querySelector(".image-position");
  let count = 1;
  setInterval(() => {
    if (pictures[4].classList.contains("visible")) {
      pictures[4].classList.remove("visible");
      pictures[0].classList.add("visible");
    }
    if (count - 1 >= 0) {
      pictures[count - 1].classList.remove("visible");
    }
    pictures[count].classList.add("visible");
    imagePos.textContent = `${count + 1} / ${pictures.length}`;
    count++;
    if (count === 5) {
      count = 0;
    }
  }, 2000);
}

slideShow();
