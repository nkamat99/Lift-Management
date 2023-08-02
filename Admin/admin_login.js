document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await fetch("/api/login", { // Replace with your backend login API URL
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
  
        const responseData = await response.json();
        
        if (responseData.success) {
          // Successful login, navigate to bookings.html
          window.location.href = "bookings.html";
        } else {
          // Invalid login, show error message
          alert("Invalid username or password. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });
  });
  