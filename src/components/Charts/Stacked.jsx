import React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      title="Sales Comparison"
      // primaryXAxis={stackedPrimaryXAxis}
      // primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{background :'white'}}
    >
      <Inject services={[Legend, Tooltip, Category, ]} />
      {/* <Inject services={[Legend, Category, stackedCustomSeries, Tooltip]} /> */}
      <SeriesCollectionDirective>
        {/* {StackingColumnSeries.map((item, index) => {
          <SeriesDirective key={index} {...item} />;
        })} */}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
