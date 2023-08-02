document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginform");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevents the form from actually submitting
  
      const username = document.getElementById("roomno").value;
      const password = document.getElementById("password").value;
  
      console.log("Username:", username);
      console.log("Password:", password);
  
      const formData = {
        username: username,
        password: password
      };
  
      try {
        const response = await fetch("your_backend_endpoint_here", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        });
  
        const responseData = await response.json();
        console.log("Response from backend:", responseData);
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
  