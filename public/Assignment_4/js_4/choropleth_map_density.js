// https://docs.google.com/spreadsheets/d/e/2PACX-1vT1x9iuNt9qyb3i-CvSppvvGmJlWc8uziTrmXAbKadPZ3q894cyEwiQKjuMKHdg35_oBW4WzAzCsWql/pub?output=csv


//Width and height of map
var width = 1000;
var height = 600;

// D3 Projection
var projection = d3.geo.albersUsa()
				   .translate([width/2, height/2])    // translate to center of screen
				   .scale([1100]);          // scale things down so see entire US
        
// Define path generator
var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
		  	 .projection(projection);  // tell path generator to use albersUsa projection

		


var svg = d3.select("#my_choropleth_density")
	.append("svg")
	.attr("width", width)
	.attr("height", height);
	

svg.append("text")
.attr("x", width / 2)             
.attr("y", 30) // You can adjust this value to move the title up or down
.attr("text-anchor", "middle")  
.style("font-size", "20px")
.style("font-family", "'Fira Sans', sans-serif")  
.style("font-weight", "bold")
.style("fill", "#333") // Use a dark color for the text for better readability
.text("Tree density in the United States");


// Append Div for tooltip to SVG
var div = d3.select("body")
	.append("div")   
	.attr("class", "tooltip")               
	.style("opacity", 0);




// Load GeoJSON data and merge with states data
d3.json("../Assignment_4/json_4/us-states.json", function(json) {

    
    // Map the cities I have lived in!
    // d3.csv("../Assignment_4/cities-lived.csv", function(data) {
    // d3.csv("../Assignment_4/Coord_trees_state.csv", function(data) {
    // d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vQoZ2K9t0hRKfh9CsosvhXHArNGujt8K8EBvZXhUSXGOJzYKbgrHhOI1jnOaaaWe4vrCKmHjnVS2Gv_/pub?output=csv", function(data) {

    d3.csv("https://docs.google.com/spreadsheets/d/e/2PACX-1vT3Cs2JwEDfrG-Be1PpoUA2zQUne9Aql_We5XIx_DUIDNvrQfeh-De9hl6BNhPraekmwwI3hdurWVQA/pub?output=csv", function(data) {


	// Define linear scale for output
	var colorScale = d3.scaleLinear();
        colorScale.domain([0.01, 5.46])
        colorScale.range(['#bbf7d0', '#15803d'])


	// Create a map for quick lookup of value by state name
	var dataMap = {};
	data.forEach(function(d) {
		dataMap[d.state] = +d.Density; // Convert value to a number if it's a string
	});

	var dataMap2 = {};
	data.forEach(function(d) {
		dataMap2[d.state] = +d.totTree; // Convert value to a number if it's a string
	});

	var dataMap3 = {};
	data.forEach(function(d) {
		dataMap3[d.state] = +d.Area_sqkm; // Convert value to a number if it's a string
	});

	var tooltip = d3.select('body')
            .append("div")
            .style("position", "absolute")
            .style("background", "#f0f0f0") // Use a light grey color for the background
            .style("padding", "10px")
            .style("border", "1px solid #ccc") // Use a darker grey for the border
            .style("border-radius", "8px")
            .style("pointer-events", "none")
            .style("opacity", 0)
            .style("font", "15px Fira Sans")
            .style("color", "#333");


	// Bind the data to the SVG and create one path per GeoJSON feature
    svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .style("stroke", "#fff")
        .style("stroke-width", "3")
        .style("fill", function(d) {
			// Use the state name from the GeoJSON to get the value from the data map
			var value = dataMap[d.properties.name];
			if (value) {
				return colorScale(value);
			} else {
				// If no data is available, default to a neutral color
				return "#ccc";
			}
		})

		.on("mouseover", function(d) {
			// Get the value for this state
			var value = dataMap[d.properties.name];
			var totTree = dataMap2[d.properties.name];
			var area = dataMap3[d.properties.name];

			// If the value is undefined, set it to 0
			if (value === undefined) {
				value = "No data available"
			}

			if (totTree === undefined) {
				totTree = "No data available"
			}

			if (area === undefined) {
				area = "No data available"
			}
			
			tooltip.transition()
				.duration(100)
				.style("opacity", .9);
			tooltip.html(
				"<strong>State:</strong> " + d.properties.name + "<br>" +
				"<strong>Density:</strong> " + value + (value !== "No data available" ? " trees/km<sup>2</sup><br>": "<br>") +
				"<strong>Tree number:</strong> " + totTree + "<br>" +
				"<strong>State area:</strong> " + area + (area !== "No data available" ? " km<sup>2</sup>" : "")
			)
			.style("left", (d3.event.pageX) + "px")
			.style("top", (d3.event.pageY - 28) + "px");
		})
		.on("mouseout", function() {
			tooltip.transition()
				.duration(100)
				.style("opacity", 0);
		});
        
});  
     

});

