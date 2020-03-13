$(document).ready(function() {
  //   getData();
  $("#basics").easyAutocomplete(options);
});
var options = {
  data: ["blue", "green", "pink", "red", "yellow"],
  theme: "square"
};

$("#fetching").click(function() {
  getData();
  $("#fetching").addClass("disabled");
});

$("#toggling").click(function() {
  console.log("button clicked");
  $(".nasaData").toggle();
});

function getData() {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "nasa.json",
    success: function(data) {
      console.log(data);

      var allPeople = data.people;
      console.log(allPeople);

      for (people of allPeople) {
        let tempRow = `<div class = 'row nasaData'>
          <div class='col'>${people.name}</div>
          <div class='col'>${people.craft}</div>`;
        $("#showData").append(tempRow);
      }
    },
    error: function(data) {
      //in case of error
      alert("some error occured");
    },
    beforeSend: function() {
      alert("Request is being made");
    },
    complete: function() {
      alert("Data fetching completed");
    },
    timeout: 3000 // in milliseconds
  });
}
