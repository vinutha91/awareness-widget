import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export const DoughnutChart = ({ data }: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const width = 300;
    const height = 300;
    const radius = Math.min(width, height) / 2;

    d3.select(chartRef.current).selectAll('*').remove();

    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const color = d3.scaleOrdinal()
      .domain(data.map((d: {name: string, number: number}) => d.name))
      .range(d3.schemeCategory10);

    const pie = d3.pie()
      .value((d: any) => d.number)
      .sort(null);

    const arc = d3.arc()
      .innerRadius(radius - 70)
      .outerRadius(radius - 20);

    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs.append('path')
      .attr('d', arc as any)
      .attr('fill', (d: any) => color(d.data.name) as any);

    arcs.append('text')
      .attr('transform', d => `translate(${arc.centroid(d as any)})`)
      .attr('dy', '.35em')
      .style('text-anchor', 'middle')
      .text((d: any) => d.data.name);

  }, [data]);

  return (
    <div ref={chartRef}></div>
  );
};
