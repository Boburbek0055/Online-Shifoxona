let deleteMode = false; // O'chirish rejimi

function renderBemorlar() {
  const bemorlar = JSON.parse(localStorage.getItem("bemorlar")) || [];
  const bemorList = document.getElementById("bemorList");
  bemorList.innerHTML = ""; // Ro'yxatni tozalash

  if (bemorlar.length === 0) {
    bemorList.innerHTML = "<p>Bemorlar ro'yxati bo'sh.</p>";
  } else {
    bemorlar.forEach((bemor, index) => {
      const bemorBox = document.createElement("div");
      bemorBox.classList.add("bemor_boxing");
      bemorBox.innerHTML = `
                <div class="bemor_surname_name">
                    <div class="bemor_surname_name_box">
                        <h1><span>Ismi: </span>${bemor.name}</h1>
                        <h1><span>Familiyasi: </span>${bemor.surname}</h1>
                    </div>
                    <div class="harakat_box">
                        <input type="checkbox" class="bemor-checkbox" id="bemor-${index}" style="display: ${
        deleteMode ? "inline" : "none"
      }; width: 30px; height: 20px;" />
                        <button class="toggle-info-btn" onclick="toggleBemorInfo(${index})">Ma'lumotlar</button>
                    </div>
                </div>

                <div class="bemor_info" id="bemor-info-${index}" style="max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.3s ease, opacity 0.3s ease;">
                    <p><span>Yoshi: </span>${bemor.age}</p>
                    <p><span>Yashash joyi: </span>${bemor.adress}</p>
                    <p><span>Telefon raqami: </span>${bemor.tel}</p>
                    <p><span>Holati: </span>${bemor.condition}</p>
                    <p><span>Xona raqami: </span>${bemor.room}</p>
                </div>
            `;
      bemorList.appendChild(bemorBox);
    });
  }
}

function toggleBemorInfo(index) {
  const infoDiv = document.getElementById(`bemor-info-${index}`);
  const isVisible = infoDiv.style.maxHeight !== "0px";

  if (!isVisible) {
    // Kengaytirish
    infoDiv.style.display = "block"; // Ko'rsatish
    setTimeout(() => {
      infoDiv.style.maxHeight = infoDiv.scrollHeight + "px"; // Animatsiya uchun balandlikni o'rnatish
      infoDiv.style.opacity = 1; // Ko'rsatish
    }, 10); // Tezlik uchun kichik kutish
  } else {
    // Qisqartirish
    infoDiv.style.maxHeight = "0"; // Balandlikni olib tashlash
    infoDiv.style.opacity = 0; // Yashirish
    setTimeout(() => {
      infoDiv.style.display = "none"; // Yashirishdan keyin
    }, 300); // Animatsiya tugagach yashirish
  }
}

// O'chirish rejimi va boshqa funktsiyalarni o'zgarishsiz qoldiring
function toggleDeleteMode() {
  deleteMode = !deleteMode; // O'chirish rejimini o'zgartirish
  const checkboxes = document.querySelectorAll(".bemor-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.style.display = deleteMode ? "inline" : "none"; // Checkboxlarni ko'rsatish yoki yashirish
    if (!deleteMode) {
      checkbox.checked = false; // O'chirish rejimi tugagach, checkboxlarni tozalash
    }
  });

  const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
  deleteSelectedBtn.classList.toggle("hide", !deleteMode); // Tugmani ko'rsatish yoki yashirish

  const toggleDeleteBtn = document.getElementById("toggleDeleteBtn");
  toggleDeleteBtn.textContent = deleteMode ? "Bekor qilish" : "O'chirish"; // Tugma matnini o'zgartirish

  const selectAllBtn = document.getElementById("selectAllBtn");
  selectAllBtn.classList.toggle("hide", !deleteMode); // "Hammasini belgilash" tugmasini ko'rsatish yoki yashirish
}

function selectAllCheckboxes() {
  const checkboxes = document.querySelectorAll(".bemor-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true; // Hammasini belgilash
  });
}

function deselectAllCheckboxes() {
  const checkboxes = document.querySelectorAll(".bemor-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false; // Hammasini bekor qilish
  });
}

function deleteSelected() {
  const bemorlar = JSON.parse(localStorage.getItem("bemorlar")) || [];
  const updatedBemorlar = bemorlar.filter((_, index) => {
    return !document.getElementById(`bemor-${index}`).checked; // Tanlangan bemorlarni o'chirish
  });
  localStorage.setItem("bemorlar", JSON.stringify(updatedBemorlar)); // Yangilangan ro'yxatni saqlash
  renderBemorlar(); // Ro'yxatni qayta chizish
  toggleDeleteMode(); // O'chirish rejimini tugatish
}

// Sahifa yuklanganda bemorlarni ko'rsatish
renderBemorlar();
//  rang button

javascript;

Copy;
function toggleBemorInfo(index) {
  const infoDiv = document.getElementById(`bemor-info-${index}`);
  const button = document.querySelector(
    `.toggle-info-btn[onclick="toggleBemorInfo(${index})"]`
  );
  const isVisible = infoDiv.style.maxHeight !== "0px";

  if (!isVisible) {
    // Kengaytirish
    infoDiv.style.display = "block"; // Ko'rsatish
    setTimeout(() => {
      infoDiv.style.maxHeight = infoDiv.scrollHeight + "px"; // Animatsiya uchun balandlikni o'rnatish
      infoDiv.style.opacity = 1; // Ko'rsatish
    }, 10); // Tezlik uchun kichik kutish

    // Tugmani yashil rangga o'zgartirish
    button.style.backgroundColor = "green";
  } else {
    // Qisqartirish
    infoDiv.style.maxHeight = "0"; // Balandlikni olib tashlash
    infoDiv.style.opacity = 0; // Yashirish
    setTimeout(() => {
      infoDiv.style.display = "none"; // Yashirishdan keyin
    }, 300); // Animatsiya tugagach yashirish

    // Tugmani asl rangiga qaytarish
    button.style.backgroundColor = ""; // Asl rangga qaytarish
  }

  if (isVisible) {
    infoDiv.style.display = "block"; // Ko'rsatish
  }
}

// llllllllllllllllllllllllllllllllllllllllllllll
