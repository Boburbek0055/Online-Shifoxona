function handleDoctorSubmit(event) {
  event.preventDefault(); // Prevent default form submission

  const doctor = {
    name: document.getElementById("nam").value,
    surname: document.getElementById("surnam").value,
    specialist: document.getElementById("specialist").value,
    telephone: document.getElementById("telef").value,
    roomNumber: document.getElementById("xonaNum").value,
  };

  const shifokorlar = JSON.parse(localStorage.getItem("shifokorlar")) || [];
  shifokorlar.push(doctor);
  localStorage.setItem("shifokorlar", JSON.stringify(shifokorlar));

  document.getElementById("successMessage").style.display = "block";
  setTimeout(() => {
    document.getElementById("successMessage").style.display = "none";
  }, 3000);

  document.getElementById("doctorForm").reset();
  renderShifokorlar();
}

function renderShifokorlar() {
  const shifokorlar = JSON.parse(localStorage.getItem("shifokorlar")) || [];
  const shifokorList = document.getElementById("shifokorList");
  shifokorList.innerHTML = "";

  if (shifokorlar.length === 0) {
    shifokorList.innerHTML = "<p>Shifokorlar ro'yxati bo'sh.</p>";
  } else {
    shifokorlar.forEach((shifokor, index) => {
      const shifokorBox = document.createElement("div");
      shifokorBox.classList.add("shifokor_boxing");
      shifokorBox.innerHTML = `
              <div class="shifokor_surname_name">
                  <div class="shifokor_surname_name_box">
                      <h1><span>Ismi: </span>${shifokor.name}</h1>
                      <h1><span>Familiyasi: </span>${shifokor.surname}</h1>
                  </div>
                  <div class="harakat_box">
                      <input type="checkbox" class="shifokor-checkbox" id="shifokor-${index}" style="display: ${
        deleteMode ? "inline" : "none"
      };" />
                      <button class="toggle-info-btn" onclick="toggleShifokorInfo(${index})">Ma'lumotlar</button>
                  </div>
              </div>
              <div class="shifokor_info" id="shifokor-info-${index}" style="max-height: 0; overflow: hidden; opacity: 0; transition: max-height 0.3s ease, opacity 0.3s ease;">
                  <p><span>Mutaxassisligi: </span>${shifokor.specialist}</p>
                  <p><span>Telefon raqami: </span>${shifokor.telephone}</p>
                  <p><span>Qabul xonasi: </span>${shifokor.roomNumber}</p>
              </div>
          `;
      shifokorList.appendChild(shifokorBox);
    });
  }
}

function toggleShifokorInfo(index) {
  const infoDiv = document.getElementById(`shifokor-info-${index}`);
  const isVisible = infoDiv.style.maxHeight !== "0px";

  if (!isVisible) {
    infoDiv.style.display = "block";
    setTimeout(() => {
      infoDiv.style.maxHeight = infoDiv.scrollHeight + "px";
      infoDiv.style.opacity = 1;
    }, 10);
  } else {
    infoDiv.style.maxHeight = "0";
    infoDiv.style.opacity = 0;
    setTimeout(() => {
      infoDiv.style.display = "none";
    }, 300);
  }
}

let deleteMode = false;

function toggleDeleteMode() {
  deleteMode = !deleteMode;
  const checkboxes = document.querySelectorAll(".shifokor-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.style.display = deleteMode ? "inline" : "none";
    if (!deleteMode) {
      checkbox.checked = false;
    }
  });

  const deleteSelectedBtn = document.getElementById("deleteSelectedBtn");
  deleteSelectedBtn.classList.toggle("hide", !deleteMode);

  const toggleDeleteBtn = document.getElementById("toggleDeleteBtn");
  toggleDeleteBtn.textContent = deleteMode ? "Bekor qilish" : "O'chirish";

  const selectAllBtn = document.getElementById("selectAllBtn");
  selectAllBtn.classList.toggle("hide", !deleteMode);
}

function selectAllCheckboxes() {
  const checkboxes = document.querySelectorAll(".shifokor-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = true;
  });
}

function deleteSelected() {
  const shifokorlar = JSON.parse(localStorage.getItem("shifokorlar")) || [];
  const updatedShifokorlar = shifokorlar.filter((_, index) => {
    return !document.getElementById(`shifokor-${index}`).checked;
  });
  localStorage.setItem("shifokorlar", JSON.stringify(updatedShifokorlar));
  renderShifokorlar();
}

// Load doctors on page load
renderShifokorlar();
// shifokor login
function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const login = document.getElementById("login").value;
  const password = "parol"; // Fixed password

  // Check if login is exactly 4 digits
  if (!/^\d{4}$/.test(login)) {
    alert("Login 4 ta raqamdan iborat bo'lishi kerak!");
    return false; // Stop the submission
  }

  // Check the login and password
  if (login === "0001" && password === "parol") {
    window.location.href = "admin_xodimlar.html"; // Redirect to admin page
  } else if (login === "0000" && password === "parol") {
    window.location.href = "index_doctor.html"; // Redirect to doctor page
  } else {
    alert("Login yoki parol noto'g'ri!");
  }
}
