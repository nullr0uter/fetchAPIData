document.addEventListener("DOMContentLoaded", fetchUser);
document.getElementById("reload-btn").addEventListener("click", fetchUser);

function fetchUser() {
  fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById("user-image").src = user.picture.large;
      document.getElementById("user-name").textContent = `${user.name.first} ${user.name.last}`;
      document.getElementById("user-age").textContent = `Alter: ${user.dob.age}`;
      document.getElementById("user-email").textContent = `📧 ${user.email}`;
      document.getElementById("user-country").textContent = `🌍 ${user.location.country}`;
    })
    .catch(error => console.error("Fehler beim Laden eines Benutzers:", error));
}
