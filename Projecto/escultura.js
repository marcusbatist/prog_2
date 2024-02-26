window.onload = async () => {
  const carouselContainer = document.getElementById("escultura-carousel");
  const prevButton = document.getElementById("escultura-prevBtn");
  const nextButton = document.getElementById("escultura-nextBtn");

  let currentIndex = 0;

  const request = await fetch("data.json");
  const result = await request.json();
  const data = result.filter((element) => element.type === "escultura")
  console.log(data);

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

    
};
