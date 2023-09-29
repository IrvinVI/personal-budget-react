import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const dataStatic = [1,5,30,15];
        const data = this.props.data;
        var nums = [];
        console.log(data);
        for(var i = 0; i<data.myBudget.length ; i++){
            nums[i] = data.myBudget[i].budget;
        }


        const svg = d3.select("#bigBar")
                    .append("svg")
                    .attr("width", 300)
                    .attr("height", 300);

        svg.selectAll("rect")
            .data(nums)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => 300 - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", "green");
    }
    render() {
        return <div id="#bar"></div>
    }
}
export default BarChart;