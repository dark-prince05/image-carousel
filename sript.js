function slideShow() {
  const curPic = document.querySelector(".picture");
  const imagePos = document.querySelector(".image-position");
  const dots = document.querySelectorAll(".dot");
  const arrows = document.querySelectorAll(".arrow");
  const pictures = [
    "./images/image1.jpg",
    "./images/image2.jpeg",
    "./images/image3.jpg",
    "./images/image4.jpg",
    "./images/image5.jpg",
  ];
  let interval;
  let index = 0;
  const DELAY = 5000;

  function updateStatus() {
    for (const dot of dots) {
      if (dot.classList.contains("active")) {
        dot.classList.remove("active");
      }
    }
    dots[index].classList.add("active");
    curPic.src = pictures[index];
    imagePos.textContent = `${index + 1}/${pictures.length}`;
  }

  function startInterval() {
    clearInterval(interval);
    interval = setInterval(() => {
      index++;
      if (index >= pictures.length) {
        index = 0;
      }
      updateStatus();
    }, DELAY);
  }

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      if (e.target.classList.contains("right-arrow")) {
        index++;
        if (index + 1 > pictures.length) index = 0;
      } else {
        index--;
        if (index < 0) index = pictures.length - 1;
      }
      updateStatus();
      startInterval();
    });
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      index = parseInt(e.target.id);
      updateStatus();
      startInterval();
    });
  });

  updateStatus();
  startInterval();
}

slideShow();
