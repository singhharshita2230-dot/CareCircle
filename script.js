/* ------------------------------
   CARECIRCLE - INTERACTIONS
-------------------------------- */

// Popup elements
const doctorModal = document.getElementById("doctorModal");
const emergencyModal = document.getElementById("emergencyModal");

// Doctor buttons
const doctorCallButton = document.getElementById("doctorCallButton");
const consultNowButton = document.getElementById("consultNowButton");
const bookDoctorButton = document.querySelector(".book-doctor-button");

// Emergency buttons
const emergencyButton = document.getElementById("emergencyButton");
const emergencyCallButton = document.getElementById("emergencyCallButton");

// Close-popup buttons
const closeDoctorModal = document.getElementById("closeDoctorModal");
const closeDoctorButton = document.getElementById("closeDoctorButton");
const closeEmergencyModal = document.getElementById("closeEmergencyModal");
const closeEmergencyButton = document.getElementById("closeEmergencyButton");

// Other buttons
const privacyButton = document.getElementById("privacyButton");
const searchCareButton = document.getElementById("searchCareButton");
const locationInput = document.getElementById("locationInput");
const joinButtons = document.querySelectorAll(".join-community-button");


// Opens Doctor on Call popup
function openDoctorModal() {
  doctorModal.classList.add("show-modal");
}

// Closes Doctor on Call popup
function closeDoctorPopup() {
  doctorModal.classList.remove("show-modal");
}

// Opens Emergency popup
function openEmergencyModal() {
  emergencyModal.classList.add("show-modal");
}

// Closes Emergency popup
function closeEmergencyPopup() {
  emergencyModal.classList.remove("show-modal");
}


// Doctor button events
doctorCallButton.addEventListener("click", openDoctorModal);
consultNowButton.addEventListener("click", openDoctorModal);
bookDoctorButton.addEventListener("click", openDoctorModal);

closeDoctorModal.addEventListener("click", closeDoctorPopup);
closeDoctorButton.addEventListener("click", closeDoctorPopup);


// Emergency button events
emergencyButton.addEventListener("click", openEmergencyModal);
emergencyCallButton.addEventListener("click", openEmergencyModal);

closeEmergencyModal.addEventListener("click", closeEmergencyPopup);
closeEmergencyButton.addEventListener("click", closeEmergencyPopup);


// Community button events
joinButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    alert(
      "Welcome to CareCircle! In the future, users will be able to join this support community safely."
    );
  });
});


// Privacy button event
privacyButton.addEventListener("click", function () {
  alert(
    "CareCircle keeps health details private. Doctors must request access, and patients decide what information to share."
  );
});


// Nearby Care search event
searchCareButton.addEventListener("click", function () {
  const location = locationInput.value.trim();

  if (location === "") {
    alert("Please enter your city or area first.");
  } else {
    alert(
      "Nearby hospitals, clinics, and pharmacies for " +
      location +
      " will appear here in the future."
    );
  }
});


// Close popups if user clicks outside the popup box
window.addEventListener("click", function (event) {
  if (event.target === doctorModal) {
    closeDoctorPopup();
  }

  if (event.target === emergencyModal) {
    closeEmergencyPopup();
  }
});
