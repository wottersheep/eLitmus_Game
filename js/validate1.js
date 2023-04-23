document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent the form from submitting

    const answer = document.getElementById("answer").value;
    

    if (answer === "netherlands" ) {
      window.location.href = "dead1.html";
      return;
    }
    else if(answer === "nuenen"){
      swal("Congrats!", ", You found the missing Art!", "success");
    }
    else{
      alert("Wrong answer");
      return;
    }
    // If all fields are filled out, redirect to the new page
    
  });