document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginform");
  
    form.addEventListener("submit", async function(event) {
      event.preventDefault(); // Prevents the form from actually submitting
  
      const roomId = document.getElementById("roomno").value;
      const password = document.getElementById("password").value;
  
      console.log("Roomno:", roomId);
      // alert("Login sucessful");
      console.log("Password:", password);
  
      // const formData = {
      //   roomno: roomId,
      //   password: password
      // };
  
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
          // alert(responseData.message)
          window.location.href = "console.html";
        }
      } catch (error) {
        console.log("Error:", error);
      }
    });
  });
  