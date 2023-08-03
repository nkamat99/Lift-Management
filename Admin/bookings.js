document.addEventListener("DOMContentLoaded", async function() {
    const tableBody = document.getElementById("table-body");
  
    try {
      const response = await fetch("/api/bookings"); // Replace with your backend API URL
      const data = await response.json();
  
      data.forEach(booking => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${booking.roomNumber}</td>
          <td>${booking.user}</td>
          <td>${booking.accessLevel}</td>
          <td>${booking.additionalFloors || '-'}</td>
          <td>${booking.updatedBy}</td>
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
      console.error("Error:", error);
    }
  });
  