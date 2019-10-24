// from data.js
var tableData = data;

// YOUR CODE HERE!
var evidence = data;

//select table

var table = d3.select("#ufo-table").select("tbody")

evidence.forEach(sighting => {
    var row = table.append("tr");
    Object.values(sighting).forEach( value => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// select button
var button = d3.select("#filter-btn")

// create event filter
button.on("click", function() {
    // select input field and obtain value
    var input = d3.select("#datetime");
    var val = input.property("value");
    // filter by input value
    var filtered = evidence.filter(sighting => sighting.datetime === val);
    // empty previously defined table
    table.html("")
    // insert new filtered results
    filtered.forEach(sighting => {
        var row = table.append("tr");
        Object.values(sighting).forEach( value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
