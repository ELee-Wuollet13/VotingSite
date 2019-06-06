$(document).ready(function() {

  $(".form").submit(function(event) {
    var age = parseInt($("#userInput").val());
    if (age > 18) {
      $('#votingInfo').show();
    } else if (age === 18) {
      alert("Congradulations! You are old enough to vote. Participate wisely.");
    }
    else {
      $('#getInvolved').show();
    }
    event.preventDefault();
  });
});
