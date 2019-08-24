// from data.js
var tableData = data;

var tbody = d3.select("tbody");

tableData.forEach(item => {
    var trow = tbody.append("tr");
    trow.append("td").text(item.datetime);
    trow.append("td").text(item.city);
    trow.append("td").text(item.state);
    trow.append("td").text(item.country);
    trow.append("td").text(item.shape);
    trow.append("td").text(item.durationMinutes);
    trow.append("td").text(item.comments);
});

var filter_button = d3.select("#filter-btn");

filter_button.on("click", function() {
    // d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    var filteredData = tableData.filter(item => {
        return item.datetime === inputValue});
    
    // Then, select the unordered list element by class name
    var tbody = d3.select("tbody");

    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--)
    {
        table.deleteRow(i);
    }    

    filteredData.forEach(item => {
        var trow = tbody.append("tr");
        trow.append("td").text(item.datetime);
        trow.append("td").text(item.city);
        trow.append("td").text(item.state);
        trow.append("td").text(item.country);
        trow.append("td").text(item.shape);
        trow.append("td").text(item.durationMinutes);
        trow.append("td").text(item.comments);
    });
});