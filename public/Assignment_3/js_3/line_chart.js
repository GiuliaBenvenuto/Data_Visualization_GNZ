// https://docs.google.com/spreadsheets/d/e/2PACX-1vT7i09PlQfdRCQO_lf7mxxei0klpyVkcvb9yssf8WLIHNBwI7FOYKroe4HGzN8aIE7PkkvENGRZMIHv/pub?output=csv


function updateLineChart(selectedOption) {
    
    /* Colors for each year
    const yearColorDictionary = {
        "1900": "#30B7EB", 
        "1910": "#1f78b4", 
        "1920": "#90e148",
        "1930": "#33a02c", 
        "1940": "#fb9a99", 
        "1950": "#e31a1c",
        "1960": "#bc7bff", 
        "1970": "#ff7f00", 
        "1980": "#40E0D0",
        "1990": "#FB1DAC",
        "2000": "#6a3d9a",
        "2010": "#6A7782",
        "2020": "#b15928"
        // Add more years and hex color codes as needed
      };*/
      const yearColorDictionary = {
        "1900": "#402365",  
        "1910": "#8A2BE2",
        "1920": "#4267AC", 
        "1930": "#1982C4", 
        "1940": "#52A675", 
        "1950": "#8AC926",
        "1960": "#C5CA30", 
        "1970": "#FFCA3A", 
        "1980": "#FF924C",
        "1990": "#B46058",
        "2000": "#ff59a8",
        "2010": "#FD0A13",
        "2020": "#9d0208"  
      };
      
      


    var plotTitle;
    
    // console.log('PROVA Checked Boxes:', checkedValues);

    if (selectedOption === "west") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vT7i09PlQfdRCQO_lf7mxxei0klpyVkcvb9yssf8WLIHNBwI7FOYKroe4HGzN8aIE7PkkvENGRZMIHv/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQxn9gnqzgt3UbgbLBjiV6HoUiTVoqT7_OiUXZm8bqJmRHyPYGNWI-fTJm7m3vWXFPgS6zvagU2lSNO/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTh77p4ddzVOUFcH-kLs_OABWrnYbqVQ8227iLz-TJ-HT-nh300fxCj4pEoul4eFhpMsbrlLru8dVH3/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of West Region";

    } else if (selectedOption === "south") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ2Q2rBrvPUKjUs6hzaSaW1BNAGOweIi23hYtbkoYmjtwe1hm-3tbFFjp8-C5IzvTfIzEZ_3tEIPjL/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTh1lt6UOPpM1anRHzkahSSIFxJpy3bSAafFSuGeW-LyhzX82H7119YDjlSbBtxqCLlGxnyI4o2w4jJ/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsB1b8PUSRRoO4guxJXo-lAYWL17YWAkGZWMP2invr0ou93xxuTwNyTtyWOtqjtySvmz8A-4WSl7ZB/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of South Region";

    } else if (selectedOption === "west_north_central") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRple2JTGsKq2CYU3GSVXs7nx_f6zBLlqZKJoXMnkVB705iVGJXA0Qsu_cPXC7vdFU84wePcpyfPB05/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQqhssGQA5zdupJv-CH2qIkGA7lddgxyM8ZaaiEHUZYBUMWqamJlHGXIK09Mk20vR6kpt8SGI2RIfQ7/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrSfXy17MSA9xIGVXPm3iRpS5cQazMD330PS1OiNB_gJwXtKGsleYmJtqgoDlJKCFQFU0skeQ2MMkA/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of West North Centeal Region";

    } else if (selectedOption === "central") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWcxdTiZ1aGmHs4fZThnm032LGaEQr0TBlQhLsYlz-h-Y3Qge1L4ZOb01wnkbWhHf1aGWYaE-0DzHY/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vT5G_yY5VaIl0pqhspkO6w60fITojpIro8K0f0GvVc5-BuT6Zc5Vcqr68ukbxZMRDoi509hafwe_Rxz/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR7dErpzPJi7QYP_rV-EDj2VvGMKpJMY_qQonUx5fbBelN0LlfWMlZY5TgMevdAiu0cFgDHfrB57Hl0/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of Central Region";

    } else if (selectedOption === "east_north_central") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyVrbecBeHUKc6RB4V03qvHo7BtnwgzUHqEnsS-y-FKo1oHATNq0y4rDZ6y-xP6dsCLYFmUyzBk-XS/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR6FufvKS2ZrtKkOlbFcPjKyv8Fk1BSaVSagoyc50RVj06B69yfoo0s__nJ54qZeCqLjtWA5Y6PWdss/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTioWe7PZVx1g95e0dS-sT9f1TdfhIi6QJYszq86e0hJRfX1OO53DxY6xmjeub5HffJ8iTnbaQJOrv6/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of East North Central Region";

    } else if (selectedOption === "northwest") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQfBs6CQrUPK6vhA5SAL1MRjMBPg6IPxsWScxL72Hp605CnaPfBH6_4UVPYLuQpI-BliTUbycKpfjyi/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTXbVuWs-GOERVB42wpcsn5LptbNbGFyshFJ0T623jfDFCyDvx53IEuekssDqioKJTDhbSGceI_iWU8/pub?output=csv",  // Link sbagliato MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vR4F5h8MeVc3L9p5suFguPDwrQIr2fRyvEE5FWajRyzMT0tEqycwLWXgf_D_8UviOlyqzKRgazR7xyG/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of Northwest Region";

    } else if (selectedOption === "northeast") {
        // Fatto
        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQMtShtjCcm3E7rBwGCVyUwGDrRi3GFd-76f8WEmegXKncXFMstI4PSWIew46fIlYV50degWDpQliP0/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTnmlIye4MkEros8bfmWUs89oivB1GlpDprG_UG2g2gMtLgHtVFE-y2jLGRv2-mg96nECkslBAWCfUt/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRkI2mVHQ4Y5GE50WgkMfEUQb_nU9FXORHSqgNVmKpGohjHf5OvnAoTkrGL9uLeFAiOHTCV0ytaddmy/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of Northeast Region";

    } else if (selectedOption === "southwest") {

        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhNn_JbK-yYtDm6-HfZnvp4WUtGCRcSHha5c3sozfIMra6Rmj_Mw61UXizjE2z35wVNNF3gLgwQMTi/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQclI4EUDKpRCI--zmkpR6WAFDFu9qYqzd2IsARXLDayZLjFHA5GUi3nLyg9x2-ugbXGQrxjzEMLuhZ/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTWHBNsk_xXCQ-39hqsbT0pZZp57KilU8bczOSRXDEFtTXNJkBElrvZlTBE6E7m2ZGthA2QcbnhmmEW/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of Southwest Region";

    } else if (selectedOption === "southeast") {

        var fileUrls = [
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vTaq70DVdzkMj8eyqCgCSQbUk2Af1mukhyQJmifhh7gm-0FS4bSdAqlftkUIzlY6_PGg8t_NstbdwA1/pub?output=csv",  // MAX
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vQK5R17QdSa22BHCdWZoK5hv8ZazEsZrPa6C-DRX30cKj0yYkg0ToRUZC7RN9cIxrABluVO8KXgUA9F/pub?output=csv",  // MIN
            "https://docs.google.com/spreadsheets/d/e/2PACX-1vRupRVGRHK2A20dXoXFUUr8y3EYtKR7Z9q3eBpJEVO9CuDVMl8k8hnOQp1qCzPhdjuayjYU0DGdAqhX/pub?output=csv"   // AVERAGE
        ];
        plotTitle = "Temperature of Southeast Region";

    }


    d3.select("#my_dataviz").selectAll("svg").remove();

    // set the dimensions and margins of the graph
    var margin = {top: 80, right: 80, bottom: 30, left: 80},
    width = 1000 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Legend
    // Create a legend container
    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("transform", "translate(" + (width + 20) + ", 20)"); // Adjust the translation as needed

        // Function to update the legend based on the selected years
    function updateLegend(selectedYears) {
        // Remove existing legend items
        legend.selectAll("*").remove();

        // Add a colored square and text for each selected year
        var legendItems = legend.selectAll(".legend-item")
            .data(selectedYears)
            .enter().append("g")
            .attr("class", "legend-item")
            .attr("transform", function(d, i) {
                return "translate(0, " + (i * 20) + ")";
            });

        legendItems.append("rect")
            .attr("width", 15)
            .attr("height", 15)
            .style("fill", function(d) {
                return yearColorDictionary[d];
            })
            .style("stroke", "black") // Add black border
            .style("stroke-width", 1);

        legendItems.append("text")
            .attr("x", 20)
            .attr("y", 10)
            .attr("dy", ".35em")
            .style("text-anchor", "start")
            .text(function(d) {
                return d;
            });
    }


    var maxValue = 0.0;
    var minValue = 0.0;
    var maxColumn;
    var minColumn;
    var first = true;

    fileUrls.forEach(function(fileUrl, index) {
        // console.log("Index:", index);

        d3.csv(fileUrl, function(data) {

    
        if(first) {
            maxColumn = data.map(function(d) {
                return d.Max;
            });
            maxValue = maxColumn[0];
            maxValue = parseFloat(maxValue);
            // console.log("MAX VALUE:", maxValue);

            minColumn = data.map(function(d) {
                return d.Min;
            });
            minValue = minColumn[0];
            minValue = parseFloat(minValue);
            // console.log("MIN VALUE:", minValue);
            first = false;
        }


        // Filter columns based on checkedValues after removing "c_" prefix
        var filteredColumns = checkedValues.map(function(column) {
            return column.replace("c_", "");
        }).filter(function(column) {
            return data.columns.includes(column); // Assuming data has a 'columns' property
        });
        // console.log("FILTERED:", filteredColumns);

        // Update legend with the current set of selected years
        updateLegend(filteredColumns);

        // NEW
        // Assign colors to lines based on the yearColorDictionary
        var lineColors = filteredColumns.map(function(year) {
            return yearColorDictionary[year];
        });

        // group the data: I want to draw one line per group
        var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
            .key(function(d) { return d.name;})
            .entries(data);


        svg.append("text")
        .attr("x", width / 2)
        .attr("y", -35)
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .style("font-family", "'Fira Sans', sans-serif")
        .text(plotTitle + " in years: ")
        .selectAll("tspan")
        .data(filteredColumns)
        .enter()
        .append("tspan")
        .text(function (d, i) {
            return i > 0 ? ", " : ""; // Add comma for all elements except the first
        })
        .style("fill", "black") // Set color of the comma to black
        .append("tspan") // Create a new tspan for the year
        .text(function (d) {
            return d;
        })
        .style("fill", function (d, i) {
            return lineColors[i]; // Set color of the year based on lineColors
        });


        
        

        // X - axis
        var x = d3.scalePoint()
        .domain(data.map(function(d) { return d.Months;  }))         // This is what is written on the Axis: from 0 to 100
        .range([0, width]);      // This is where the axis is placed: from 100 px to 800px

        // Draw the axis
        svg
            .append("g")
            .attr("transform", "translate(0," + height + ")")      // This controls the vertical position of the Axis
            .call(d3.axisBottom(x))
            .style("font-size", "15px")
            .style("font-family", "Fira Sans");
    

        // Define the y-scale using the calculated maximum value
        var y = d3.scaleLinear()
            .domain([minValue, maxValue +5])
            .range([height, 0]);

        // Append the y-axis to the SVG
        svg.append("g")
            .call(d3.axisLeft(y))
            .style("font-size", "15px")
            .style("font-family", "Fira Sans")

            // Add horizontal grid lines
            // Add horizontal grid lines
            svg.append("g")
            .attr("class", "grid")
            .call(d3.axisLeft(y)
                .tickSize(-width)
                .tickFormat("")
                .tickSizeOuter(0) // Exclude the outer tick at the top
            );

            // Style the grid lines
            svg.selectAll(".grid line")
            .style("stroke", "#ccc")  // Grey color
            .style("stroke-dasharray", "3 3")  // Dashed line
            .style("opacity", 0.5);  // Opacity 
            

        /*
        var color = d3.scaleOrdinal()
            .domain(fileUrls)
            .range(['#e41a1c', '#4daf4a', '#377eb8']); // Red, Green, Blue
        */
            
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
            .style("color", "#333"); // Use a dark grey color for the text


        svg.selectAll(".line")
            .data(filteredColumns)
            .enter()
            .append("path")
            .attr("fill", "none")
            .attr("stroke", function (column, i) {
                // Use the color scale to assign color based on file URL index
                return lineColors[i];
            })
            .attr("stroke-dasharray", function (column, i) {
                return index === 2 ? "5,5" : "none";
            })
            .attr("stroke-width", 1.8)
            .attr("d", function (column) {
                return d3.line()
                    .x(function (d) { return x(d.Months); })
                    .y(function (d) { return y(+d[column]); })
                    (data.filter(function (d) {
                        return filteredColumns.includes(column);
                    }));
            })
            .style("stroke-linecap", function () {
                return index === 2 ? "round" : "butt";
            })

        .each(function (d, i) {
        // Append dots at the end of each line segment
        svg.selectAll(".dot")
            .data(data.filter(function (row) {
                return filteredColumns.includes(d);
            }))
            .enter().append("circle")
            .attr("cx", function (row) { return x(row.Months); })
            .attr("cy", function (row) { return y(+row[d]); })
            .attr("r", 4)
            //.attr("fill", color(fileUrls[index]))
            .attr("fill", lineColors[i])
            .attr("stroke", "#fff") // Add a white stroke for better visibility

            .on("mouseover", function (row) {
                tooltip.transition()
                    .duration(100)
                    .style("opacity", 0.9);
                tooltip.html(
                    "<div style='text-align: center;'>" +
                    "<span style='font-size: 18px; color: " + lineColors[i] + ";'> <strong>" + getLabel(index) + "</strong></span><br>" +
                    "</div>" +
                    "<span style='color: #333;'> <strong>Value: </strong> " + row[d] + " °C</span><br>" +
                    "<span style='color: #333;'> <strong>Month: </strong> " + row.Months + "</span><br>" 
                )
                .style("left", (d3.event.pageX + 10) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
                tooltip.transition()
                    .duration(200)
                    .style("opacity", 0);
            });

        });


        // Function to get the label based on the index
        function getLabel(index) {
            if (index === 0) {
                return "Max";
            } else if (index === 1) {
                return "Min";
            } else if (index === 2) {
                return "Avg";
            } else {
                return "";
            }
        }
                
        }) // d3.csv

    }) // for
}

updateLineChart("west");

d3.select("#regionSelector").on("change", function() {
    var selectedOption = this.value;
    updateLineChart(selectedOption);
});


function setupChangeListener(selector) {
    d3.select(selector).on("change", function() {
        var selectedOption = d3.select("#regionSelector").node().value;
        //console.log("Selectedoption", selectedOption);
        updateLineChart(selectedOption);
    });
}
setupChangeListener("#c_1900");
setupChangeListener("#c_1910");
setupChangeListener("#c_1920");
setupChangeListener("#c_1930");
setupChangeListener("#c_1940");
setupChangeListener("#c_1950");
setupChangeListener("#c_1960");
setupChangeListener("#c_1970");
setupChangeListener("#c_1980");
setupChangeListener("#c_1990");
setupChangeListener("#c_2000");
setupChangeListener("#c_2010");
setupChangeListener("#c_2020");




export { updateLineChart };