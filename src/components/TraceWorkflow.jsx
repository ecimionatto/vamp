import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const TreceWorkflow = (props) => {
  
  console.log("props: " + props)

  const data = [
    [
      { type: "string", id: "President" },
      { type: "date", id: "Start" },
      { type: "date", id: "End" },
    ],
    ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
    ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
    ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
  ];

  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="Timeline"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          showRowNumber: true,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

export default TreceWorkflow;
