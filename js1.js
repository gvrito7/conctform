 const contactForm=document.getElementById("contact-form")
 contactForm.addEventListener("submit", function(event){
    event.preventDefault()
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
 })



// Function to create a dialog box
function showDialogBox() {
    // Check if the user has already made a choice
    if (document.cookie.indexOf("saveInformation=") === -1) {
      // Display the dialog box
      var choice = confirm("გინდათ რომ ქუქუმა შეინახოს ინფორმაცია?");
    
      // Set the cookie based on the user's choice
      document.cookie = "saveInformation=" + (choice ? "კი" : "არა");
    } else {
      // User has already made a choice, retrieve the cookie value
      var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)saveInformation\s*=\s*([^;]*).*$)|^.*$/, "$1");
      
      // Display the previous choice
      alert("Your previous choice was: " + cookieValue);
    }
  }
  
  // Call the function to display the dialog box
  showDialogBox();