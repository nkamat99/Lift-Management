document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const room = queryParams.get("roomId");
  const user = queryParams.get("userName");
  const access = queryParams.get("accessLvl");
  const floors = queryParams.get("extraAccess");
  const updatedBy = queryParams.get("addedBy");
  const bookingId = queryParams.get("bookingId");

  console.log("Room ID:", room);
  console.log("User Name:", user);
  console.log("Access Level:", access);
  console.log("Extra Access:", floors);
  console.log("Updated By:", updatedBy);

  const roomField = document.getElementById("roomno");
  const userField = document.getElementById("user");
  const accessField = document.getElementById("accesslevel");
  const floorsField = document.getElementById("additional_floors");
  const updatedByField = document.getElementById("updated_by");
  

  roomno.textContent = "ROOM NO. " + room;
  // roomField.placeholder =  
  userField.placeholder = user;
  userField.value = user;
  accessField.value = access;
  floorsField.placeholder = floors;
  floorsField.value = floors;
  updatedByField.placeholder = updatedBy;
  updatedByField.value = updatedBy;
  const extraAloorsArray = floors.split(", ").map(Number);

  console.log("Extra Access array:", extraAloorsArray);

  const updateForm = document.getElementById("updateForm");
  updateForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(updateForm);
    try {
      const response = await fetch("http://localhost:8080/booking/updateUser", { // Replace with your backend update API URL
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({bookingId, access, extraAloorsArray, updatedBy})
      });
      

      const responseData = await response.json();
      console.log("Response from backend:", responseData);

      if (responseData.message == 'Details updated') {
        // Successful update, navigate to bookings.html
        window.location.href = "bookings.html";
      } else {
        // Invalid login, show error message
        alert("Cannot update details. Please retry!");
      }
      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
