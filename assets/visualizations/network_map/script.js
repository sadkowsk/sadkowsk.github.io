const width = 800;
const height = 600;

const svg = d3.select("#network")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

d3.json("data.json").then(data => {
  const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(150))
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2));

  const link = svg.append("g")
    .selectAll("line")
    .data(data.links)
    .join("line")
    .attr("stroke-width", d => d.value)
    .attr("stroke", "#ccc");

  const node = svg.append("g")
    .selectAll("circle")
    .data(data.nodes)
    .join("circle")
    .attr("r", d => d.group === 0 ? 15 : 10) // Center node larger
    .attr("fill", d => d.group === 1 ? "#0073e6" : d.group === 2 ? "#ff9900" : "#444")
    .call(drag(simulation))
    .on("mouseover", (event, d) => {
      d3.select("#tooltip")
        .style("opacity", 1)
        .html(`Node: ${d.id}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 20) + "px");
    })
    .on("mouseout", () => {
      d3.select("#tooltip").style("opacity", 0);
    });

  const text = svg.append("g")
    .selectAll("text")
    .data(data.nodes)
    .join("text")
    .text(d => d.id)
    .attr("x", 15)
    .attr("y", 5);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);

    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);

    text
      .attr("x", d => d.x + 10)
      .attr("y", d => d.y);
  });

  function drag(simulation) {
    return d3.drag()
      .on("start", event => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      })
      .on("drag", event => {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      })
      .on("end", event => {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      });
  }
});

// Tooltip setup
d3.select("body").append("div")
  .attr("id", "tooltip")
  .style("position", "absolute")
  .style("opacity", 0)
  .style("background", "#fff")
  .style("border", "1px solid #ccc")
  .style("padding", "5px")
  .style("border-radius", "5px");
