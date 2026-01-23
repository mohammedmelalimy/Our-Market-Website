const USERS_API = "https://our-market-website.onrender.com/users";

fetch(USERS_API)
  .then(res => res.json())
  .then(users => {
    users.forEach(user => {
      fetch(`${USERS_API}/${user.id}`, { method: "DELETE" });
    });
  })
  .then(() => console.log("All users deleted"))
  .catch(err => console.error(err));
