// kiyingi
document.getElementById("lupaIcon").addEventListener("click", function () {
  const headerBox = document.getElementById("headerBox");
  const input = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");

  if (headerBox.style.width === "35px" || headerBox.style.width === "") {
    headerBox.style.width = "700px"; // Kengaytiriladigan yangi kenglik
    input.style.display = "block"; // Inputni ko'rsatish
    searchButton.style.display = "block"; // Tugmani ko'rsatish
    setTimeout(() => {
      input.style.transform = "scaleX(1)"; // Inputni ko'rsatish
      searchButton.style.transform = "scaleX(1)"; // Tugmani ko'rsatish
      input.style.opacity = 1; // Inputni ko'rsatish
      searchButton.style.opacity = 1; // Tugmani ko'rsatish
    }, 50); // 50ms kutish
  } else {
    input.style.transform = "scaleX(0)"; // Inputni yashirish
    searchButton.style.transform = "scaleX(0)"; // Tugmani yashirish
    input.style.opacity = 0; // Inputni yashirish
    searchButton.style.opacity = 0; // Tugmani yashirish
    setTimeout(() => {
      input.style.display = "none"; // Inputni ko'rinmas qilish
      searchButton.style.display = "none"; // Tugmani ko'rinmas qilish
      headerBox.style.width = "35px"; // Qaytadan dastlabki kenglik
    }, 10); // 500ms - animatsiya davomiyligi
  }
});

// .............
