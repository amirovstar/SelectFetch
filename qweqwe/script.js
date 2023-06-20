$(document).ready(function() {
  $('.select-endpoint').change(function() {
    const selectedOption = $(this).val();
    if (selectedOption === "") {
      $('.output').empty();
    } else {
      $.get("https://jsonplaceholder.typicode.com" + selectedOption, function(data) {
        let output = "";
        if (Array.isArray(data)) {
          output = "<ul>";
          for (let i = 0; i < data.length; i++) {
            output += "<li>" + JSON.stringify(data[i], null, 2) + "</li>";
          }
          output += "</ul>";
        } else {
          output = JSON.stringify(data, null, 2);
        }
        $('.output').html(output);
      });
    }
  });
});
