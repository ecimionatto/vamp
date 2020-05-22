import { Chart } from "react-google-charts";
import React from "react";
import moment from "moment";

const TreceWorkflow = (args) => {
  let data = [
    [
      { type: "string", id: "service-origin" },
      { type: "string", id: "Trace" },
      { type: "datetime", id: "Start" },
      { type: "datetime", id: "End" },
    ],
  ];

  if (args["props"].length > 0) {
    args["props"]
      .map((p) =>
        data.push([
          p.service + "-" + p.origin,
          p.id,
          new Date(p.start),
          moment(p.start).add(p.exec_time * 1000, "ms"),
        ])
      )
      .sort();
  } else {
    data.push([]);
  }
  return (
    <div className={"my-pretty-chart-container"}>
      <Chart
        width={"100%"}
        height={"100%"}
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
