document.addEventListener("DOMContentLoaded", async function() {
    const tableBody = document.getElementById("table-body");
    const logged_in_user = document.getElementById("logged_in_user");
    staffName = sessionStorage.getItem('staffName');
    logged_in_user.textContent = staffName;
  
    try {
      const response = await fetch("http://localhost:8080/booking/findBookingList", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ staffName }),
      });
      const data = await response.json();

      console.log(data);

      // data.userData.forEach(booking => {
      //   console.log(booking.userName);
      //   console.log(booking.accessLvl);
      //   console.log(booking.extraAccess.join(','));
      //   console.log(booking.addedBy);

      // })
  
      data.userData.forEach(booking => {
        console.log("abc")
        const row = document.createElement("tr");
        console.log("bookingID", booking.bookingId);
        row.innerHTML = `
          <td>${booking.roomId}</td>
          <td>${booking.userName}</td>
          <td>${booking.accessLvl}</td>
          <td>${booking.extraAccess.join(', ')}</td>
          <td>${booking.addedBy}</td>
          <td>
            <button class="btn-update" data-room="${booking.roomId}" data-user="${booking.userName}" data-access="${booking.accessLvl}" data-floors="${booking.extraAccess.join(', ')}" data-updatedby="${booking.addedBy}" data-bookingId="${booking.bookingId}" >Update</button>
            <button class="btn-delete" data-bookingId="${booking.bookingId}">Checkout</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
  
      const updateButtons = document.querySelectorAll(".btn-update");
      updateButtons.forEach(button => {
        button.addEventListener("click", function() {
          const roomId = button.getAttribute("data-room");
          const userName = button.getAttribute("data-user");
          const accessLvl = button.getAttribute("data-access");
          const extraAccess = button.getAttribute("data-floors");
          const addedBy = button.getAttribute("data-updatedby");
          const bookingId = button.getAttribute("data-bookingId");

  
          // Redirect to the update details page with pre-filled data
          const queryString = `?roomId=${roomId}&userName=${userName}&accessLvl=${accessLvl}&extraAccess=${extraAccess}&addedBy=${addedBy}&bookingId=${bookingId}`;
          console.log(queryString);
          window.location.href = `update_details.html${queryString}`;
        });
      });

      // Write code for delete here
      const deleteButtons = document.querySelectorAll(".btn-delete");

      deleteButtons.forEach(button => {
        button.addEventListener("click", function() {
          const bookingId = button.getAttribute("data-bookingId");
          // password="abc";
          addedBy = sessionStorage.getItem('staffName');
          deleteBooking(bookingId, addedBy) ;

          // try {
          //   const response = await fetch("http://localhost:8080/booking/deleteUser", { // Replace with your backend login API URL
          //     method: "POST",
          //     mode: "cors",
          //     headers: {
          //       "Content-Type": "application/json"
          //     },
          //     body: JSON.stringify({bookingId, password })
          //   });
      
          //   const responseData = await response.json();
            
          //   if (responseData.message == 'successful') {
          //     console.log("Successfully deleted");
          //   } else {
          //     // Invalid login, show error message
          //     alert("Error deleting. Please try again");
          //   }
          // } catch (error) {
          //   console.error("Error:", error);
          // }
        });

      });

    } catch (error) {
      console.error("Error:",error);
    }

    async function deleteBooking(bookingId, addedBy) {
      try {
        const response = await fetch("http://localhost:8080/booking/deleteUser", { // Replace with your backend login API URL
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({bookingId, addedBy})
        });
  
        console.log("booking ID", bookingId);
        console.log("booking ID", addedBy);


        const responseData = await response.json();
        console.log(responseData);
        
        const confirmMessage = `Are you sure you want to delete this entry?`;
        const userConfirmed = window.confirm(confirmMessage);
        if(userConfirmed)
        {
          if (responseData.message == 'successful') {
            console.log("Successfully deleted");
            window.location.href = "bookings.html";
          } else {
            // Invalid login, show error message
            alert("Error deleting. Please try again");
          }
        }
        else
        {
          // window.location.href = "bookings.html";
          console.log("User cancelled delete");
        }
        
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
  