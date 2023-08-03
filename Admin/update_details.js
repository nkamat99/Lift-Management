document.addEventListener("DOMContentLoaded", function() {
    const queryParams = new URLSearchParams(window.location.search);
    const room = queryParams.get("room");
    const user = queryParams.get("user");
    const access = queryParams.get("access");
    const floors = queryParams.get("floors");
    const updatedBy = queryParams.get("updatedBy");
  
    const roomField = document.getElementById("roomno");
    const userField = document.getElementById("user");
    const accessField = document.getElementById("accesslevel");
    const floorsField = document.getElementById("additional_floors");
    const updatedByField = document.getElementById("updated_by");
  
    roomField.value = room;
    userField.value = user;
    accessField.value = access;
    floorsField.value = floors;
    updatedByField.value = updatedBy;
  
    const updateForm = document.getElementById("updateForm");
    updateForm.addEventListener("submit", async function(event) {
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
  