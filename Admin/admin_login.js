document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", async function(event) {
      event.preventDefault();
  
      const staffName = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      try {
        const response = await fetch("http://localhost:8080/staff/AdminLogin", { // Replace with your backend login API URL
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ staffName, password })
        });
  
        const responseData = await response.json();
        
        if (responseData.message == 'Login successful') {
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
  