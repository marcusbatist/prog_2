document.addEventListener("DOMContentLoaded", () => {
  const carouselContainer = document.getElementById("pintura-carousel");
  const prevButton = document.getElementById("pintura-prevBtn");
  const nextButton = document.getElementById("pintura-nextBtn");

  let currentIndex = 0;

  fetch("data.json")
    .then((response) => response.json())
    .then((data) => data.filter((element) => element.type === "pintura"))
    .then((data) => {
      const showSlide = (index) => {
        while (carouselContainer.firstChild) {
          carouselContainer.removeChild(carouselContainer.firstChild);
        }

        const slide = document.createElement("div");
        slide.classList.add("carousel-item");

        const image = document.createElement("img");
        image.src = data[index].image;
        image.alt = data[index].title;

        const caption = document.createElement("div");
        caption.classList.add("carousel-caption");

        const title = document.createElement("h3");
        title.textContent = data[index].title;

        const type = document.createElement("p");
        type.textContent = `Type: ${data[index].type}`;

        const medium = document.createElement("p");
        medium.textContent = `Medium: ${data[index].medium}`;

        const artist = document.createElement("p");
        artist.textContent = `Artist: ${data[index].artist}`;

        caption.appendChild(title);
        caption.appendChild(type);
        caption.appendChild(medium);
        caption.appendChild(artist);

        slide.appendChild(image);
        slide.appendChild(caption);

        carouselContainer.appendChild(slide);

        carouselContainer.className = "carousel";
      };

      const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % data.length;
        showSlide(currentIndex);
      };

      const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + data.length) % data.length;
        showSlide(currentIndex);
      };

      nextButton.addEventListener("click", showNextSlide);
      prevButton.addEventListener("click", showPrevSlide);

      showSlide(currentIndex);
    })
    .catch((error) => console.error("Erro ao carregar JSON:", error));
});
