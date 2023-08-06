document.addEventListener("DOMContentLoaded", function () {
  const queryParams = new URLSearchParams(window.location.search);
  const room = queryParams.get("roomId");
  const user = queryParams.get("userName");
  const access = queryParams.get("accessLvl");
  const floors = queryParams.get("extraAccess");
  const updatedBy = queryParams.get("addedBy");

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
  accessField.value = access;
  floorsField.placeholder = floors;
  updatedByField.placeholder = updatedBy;

  const updateForm = document.getElementById("updateForm");
  updateForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(updateForm);
    try {
      const response = await fetch("/api/update", { // Replace with your backend update API URL
        method: "POST",
        body: formData
      });

      const responseData = await response.json();
      console.log("Response from backend:", responseData);

      // Handle the response as needed
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
