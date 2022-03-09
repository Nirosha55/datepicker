import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
const LineChart = () => {
  return (
    <Chart
      style={{height: 200, width: 400}}
      data={[
        {x: 5, y: 15},
        {x: 6, y: 6},
        {x: 7, y: 15},
        {x: 8, y: 3},
      ]}
      padding={{left: 40, bottom: 20, right: 20, top: 20}}
      xDomain={{min: 5, max: 8}}
      yDomain={{min: 4, max: 15}}>
      <VerticalAxis
        tickCount={6}
        tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
        theme={{labels: {formatter: v => v.toFixed(2)}}}
      />
      <HorizontalAxis
        tickCount={8}
        theme={{labels: {formatter: v => v.toFixed(1)}}}
      />

      <Line theme={{stroke: {color: 'red', width: 2}}} />
      <Line
        smoothing="bezier"
        tension={0.15}
        theme={{stroke: {color: 'blue', width: 2}}}
      />
      <Line
        smoothing="bezier"
        tension={0.3}
        theme={{stroke: {color: 'green', width: 2}}}
      />
      <Line
        smoothing="cubic-spline"
        tension={0.3}
        theme={{stroke: {color: 'orange', width: 2}}}
      />
    </Chart>
  );
};
export default LineChart;
const styles = StyleSheet.create({});
