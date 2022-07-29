
function switchStep(newStep)
{
  d3.selectAll(".step-link").classed("active", false);
  d3.select("#" + newStep).classed("active", true);
}

function switchAnnotation(newStep)
{
  // console.log(newStep);
  console.log(newStep);

  var plotcolors = ["#1f77b4","#ff7f0e","#2ca02c","#d62728","#9467bd","#8c564b","#e377c2","#7f7f7f","#bcbd22","#17becf"];
  var names = ["US Fed", "EU CB", "Japan", "England", "Aus", "India", "China", "Brazil", "Thailand", "Indonesia"];

  if (newStep == "step1"){
    console.log("step 1 reached");
    d3.selectAll(".line")
              .style("stroke", function(d,i) {return plotcolors[i]});
   }

  if (newStep == "step2"){
    d3.selectAll(".line")
              .style("stroke", function(d,i) {return (i > 4)?"#eee":plotcolors[i]});
              d3.selectAll(".legend")
              .style("fill", function(d,i) {return (i > 4)?"#eee":plotcolors[i]});
    }

    if (newStep == "step3"){
      d3.selectAll(".line")
                .style("stroke", function(d,i) {return ((i <= 4) & (i > 0))?"#eee":plotcolors[i]});
      d3.selectAll(".legend")
                .style("fill", function(d,i) {return  ((i <= 4)& (i > 0))?"#eee":plotcolors[i]});
      }    

  d3.selectAll(".annotation-step")
    .style("display", "none")
    .style("opacity", 0.0);

  d3.select("#" + newStep + "-annotation")
    .style("display", "block")
    .transition().delay(300).duration(500)
      .style("opacity", 1);
}

d3.selectAll("a.step-link").on("click", function(d) {
  var clickedStep = d3.select(this).attr("id");
  switchStep(clickedStep);
  switchAnnotation(clickedStep);
  return false;
});


