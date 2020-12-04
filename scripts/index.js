var modal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");


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
    if(event.target ==  signInModal){
        signInModal.style.display = "none";
    }
  }