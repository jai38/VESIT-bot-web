const deleteUser = (email, UID, fileName) => {
  console.log(email);
  document.getElementById(
    "confirm-text"
  ).innerHTML = `Are you sure you want to delete Certificate with UID: ${UID}?`;
  document.getElementById("confirm").style.display = "block";
  document.getElementById("currentUser").value = JSON.stringify({
    email,
    UID,
    fileName,
  });
};
const getData = () => {
  let tbody = document.getElementById("tableBody");
  document.getElementById("email").innerHTML = localStorage.getItem("email");
  let allUsers = JSON.parse(localStorage.getItem("allUsers"));
  let html = "";
  allUsers = allUsers.sort((a, b) => b.email - a.email);
  console.log(allUsers.length);
  allUsers.forEach((c) => {
    html += `<tr>
    <td>${c.timestamp}</td>
    <td>${c.UID}</td>
    <td>${c.email}</td>
    <td>${c.studentName}</td>
    <td>${c.branch}</td>
    <td>${c.year}</td>
    <td>${c.name}</td>
    <td><a class='btn btn-success' href='${c.link}' target="_blank">Certificate</td>
    <td><button class='btn btn-danger m-0' data-toggle="modal" data-target="#myModal" onclick='deleteUser("${c.email}","${c.UID}","${c.fileName}")'>Delete</button></td>
      </tr>`;
  });
  tbody.innerHTML = html;
};
