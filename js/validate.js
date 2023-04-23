document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    const answer = document.getElementById("answer").value;
    

    if (answer !== "the potato eaters" ) {
      alert("Damn, That was wrong my friend. You must try again. Goodluck pal");
      return;
    }
    else{
        window.location.href = "wordle3.html";
    }
    // If all fields are filled out, redirect to the new page
    
  });