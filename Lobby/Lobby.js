function enterLobby() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }
  }