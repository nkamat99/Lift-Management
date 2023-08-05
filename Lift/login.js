document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginform");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevents the form from actually submitting
  
      const roomId = document.getElementById("roomno").value;
      sessionStorage.setItem('roomno',roomId);

      const password = document.getElementById("password").value;

      // Export the roomId value  
      console.log("Roomno:", roomId);
      // alert("Login sucessful");
      console.log("Password:", password);
  
      try {
        const response = await fetch("http://localhost:8080/booking/userLogin", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(formData)
          body: JSON.stringify({
            "roomId":roomId,
            "password":password
          })
        });
  
        const responseData = await response.json();
        console.log("Response from backend:", responseData);
        if(responseData.status !== 200) {
          if(responseData.message=="Login successful")
          {
            window.location.href = "console.html";
          }
          else{
            alert(responseData.message);
          }
        }
      } catch (error) {
        console.log("Error:", error);
      }
    });
  });