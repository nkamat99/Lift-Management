document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const roomId = queryParams.get("roomId");
  const userName = queryParams.get("userName");
  const accessLvl = parseInt(queryParams.get("accessLvl"));
  const floors = queryParams.get("extraAccess");
  const updatedBy = queryParams.get("addedBy");
  const bookingId = queryParams.get("bookingId");

  console.log("Room ID:", roomId);
  console.log("User Name:", userName);
  console.log("Access Level:", accessLvl);
  console.log("Extra Access:", floors);
  console.log("Updated By:", updatedBy);

  const roomField = document.getElementById("roomno");

  const userField = document.getElementById("user");

  const accessField = document.getElementById("accesslevel");
  const floorsField = document.getElementById("additional_floors");
  const addedBy = document.getElementById("updated_by");
  

  roomno.textContent = "ROOM NO. " + roomId;
  userField.placeholder = userName;
  userField.value = userName;
  console.log("userField", userField.value);

  accessField.value = accessLvl;
  floorsField.placeholder = floors;
  floorsField.value = floors;
  addedBy.placeholder = updatedBy;
  addedBy.value = updatedBy;
  const extraAccess = floors.split(", ").map(Number);

  console.log(typeof(roomId));
  console.log(typeof(bookingId));
  console.log(typeof(accessLvl));
  console.log(typeof(extraAccess));
  console.log(typeof(userName));

  console.log("Extra Access array:", extraAccess);

  const updateForm = document.getElementById("updateForm");
  updateForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    let addedBy = sessionStorage.getItem('staffName');
  console.log(typeof(admin));
  // userName = userField.value ;
  const userField = document.getElementById("user");

  const accessField = document.getElementById("accesslevel");
  const floorsField = document.getElementById("additional_floors");

    // addedBy = JSON.stringify(admin);

    const formData = new FormData(updateForm);
    try {
      const response = await fetch("http://localhost:8080/booking/updateUser", { // Replace with your backend update API URL
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        // room id, booking id
        // body: JSON.stringify({bookingId, access, extraAloorsArray, updatedBy})
        body: JSON.stringify({roomId, bookingId, accessLvl, extraAccess, addedBy, userName})
          

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
