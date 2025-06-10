function sayHello() {
    let username = document.getElementById("usernameInput").value;
    document.getElementById("greeting").innerText = `Hello ${username}`;
    alert(`hi ${username}, nice to meet you`);
  }
