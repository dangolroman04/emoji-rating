let emojiContainer = document.querySelectorAll(".emoji-container>i");
let ratingContainer = document.querySelectorAll(".rating-container>i");
let emojiColors = ["red", "orange", "skyblue", "lightgreen", "green"];

ratingContainer.forEach((rateItem, index) => {
  rateItem.addEventListener("click", () => {
    ratingContainer.forEach((r, i) => {
      if (index >= i) {
        r.classList.add("active");
      } else {
        r.classList.remove("active");
      }
    });
      
      emojiContainer.forEach((emoji, i) => {
          emoji.classList.remove("active");
          if (i === index) {
              emoji.classList.add("active");
              emoji.style.color = emojiColors[index];
          }
      })
  });
});


