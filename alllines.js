
// define the 1 line
var valueline1 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.US_Federal_Reserve_System); });

// define the 2 line
var valueline2 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.Bank_of_Thailand); });
    
// define the 3 line
var valueline3 = d3.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.Reserve_Bank_of_India); });


module.exports = { valueline1, valueline2, valueline3 };
