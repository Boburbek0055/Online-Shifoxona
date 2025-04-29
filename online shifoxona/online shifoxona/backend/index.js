// ro'yxatdan o'tish js kod

//  bemorlarni ruyxatdan otkazish bemorlar ruyxati
// bemorlar ruyxati

//  bemorlarni ruyxatdan otkazish bemorlar ruyxati
// bemorlar ruyxati
function deleteSelected() {
  const bemorlar = JSON.parse(localStorage.getItem("bemorlar")) || [];
  const updatedBemorlar = bemorlar.filter((_, index) => {
    return !document.getElementById(`bemor-${index}`).checked; // Tanlangan bemorlarni o'chirish
  });
  localStorage.setItem("bemorlar", JSON.stringify(updatedBemorlar)); // Yangilangan ro'yxatni saqlash
  renderBemorlar(); // Ro'yxatni qayta chizish
}

// Sahifa yuklanganda bemorlarni ko'rsatish
renderBemorlar();

function handleBemorSubmit(event) {
  event.preventDefault(); // Formning standart yuborilishini to'xtatadi

  // Inputlardan ma'lumotlarni olish
  const name = document.getElementById("ot").value;
  const surname = document.getElementById("surname").value;
  const age = document.getElementById("age").value;
  const adress = document.getElementById("adress").value;
  const telNum = document.getElementById("tel").value;
  const condition = document.getElementById("hepen").value;
  const roomNum = document.getElementById("xona").value;

  // Bemor ma'lumotlarini obyekt sifatida saqlash
  const bemor = {
    name,
    surname,
    age,
    adress,
    tel: telNum,
    condition,
    room: roomNum,
  };

  // LocalStorage ga qo'shish
  const bemorlar = JSON.parse(localStorage.getItem("bemorlar")) || [];
  bemorlar.push(bemor);
  localStorage.setItem("bemorlar", JSON.stringify(bemorlar));

  // Muvaffaqiyatli xabarni ko'rsatish
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  // Xabarni 3 soniyadan keyin yashirish
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  // Formni tozalash
  document.getElementById("bemorForm").reset();
}
//  qidruv algoritm dasturi
