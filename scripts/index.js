var modal = document.getElementById("signUpModal");

// function openModal(){
//     modal.style.display = "block";
// }

// function closeModal(){
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }