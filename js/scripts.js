$(document).ready(function(){
  $("form#traits").submit(function(event){
    event.preventDefault();
    const beverage = $("#favoriteBeverage").val();
    const activity = $("#favoriteActivity").val();
    const favoriteColor = $("#color").val();
    const desert = $("#favoriteDesert").val();
    if (beverage === "Coffee" && activity === "Netflix" && favoriteColor === "Orange" && desert === "Cake") {
      $("#ron").show();
      $("#randy").hide();
        }
    else if(beverage === "Coffee" || "Tea" && activity === "Skiing" && favoriteColor === "Blue" && desert === "Fruit"){
      $("#randy").show();
    } else if(beverage === "Water" && activity === "Surfing" && favoriteColor === "Green" && desert === "Chocolate"){
      $("#scott").show();
    } else {
      $("#none").show();
      $("#randy").hide();
    }
  });
});