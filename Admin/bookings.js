document.addEventListener("DOMContentLoaded", async function() {
    const tableBody = document.getElementById("table-body");
    staffName = sessionStorage.getItem('staffName');
  
    try {
      const response = await fetch("http://localhost:8080/booking/findBookingList", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ staffName }),
      });
      const data = await response.json();

      console.log(data);
      // console.log(data[0])

      // data.userData.forEach(booking => {
      //   console.log(booking.roomId);
      //   console.log(booking.userName);
      //   console.log(booking.accessLvl);
      //   console.log(booking.extraAccess.join(','));
      //   console.log(booking.addedBy);

      // })
  
      data.userData.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${booking.roomId}</td>
          <td>${booking.userName}</td>
          <td>${booking.accessLvl}</td>
          <td>${booking.extraAccess.join(' , ')}</td>
          <td>${booking.addedBy}</td>
          <td>
            <button class="btn-update" data-room="${booking.roomNumber}" data-user="${booking.user}" data-access="${booking.accessLevel}" data-floors="${booking.additionalFloors || ''}" data-updatedby="${booking.updatedBy}">Update</button>
            <button class="btn-delete">Delete</button>
          </td>
        `;
        tableBody.appendChild(row);
      });
  
      const updateButtons = document.querySelectorAll(".btn-update");
      updateButtons.forEach(button => {
        button.addEventListener("click", function() {
          const roomNumber = button.getAttribute("data-room");
          const user = button.getAttribute("data-user");
          const accessLevel = button.getAttribute("data-access");
          const additionalFloors = button.getAttribute("data-floors");
          const updatedBy = button.getAttribute("data-updatedby");
  
          // Redirect to the update details page with pre-filled data
          const queryString = `?room=${roomNumber}&user=${user}&access=${accessLevel}&floors=${additionalFloors}&updatedBy=${updatedBy}`;
          window.location.href = `update_details.html${queryString}`;
        });
      });
    } catch (error) {
      console.error("Error:");
    }
  });
  