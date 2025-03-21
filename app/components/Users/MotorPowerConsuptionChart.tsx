import * as React from "react";
import Highcharts from "highcharts";

const MotorPowerConsuptionChart: React.FC = () => {
  const [chartOptions, setChartOptions] =
    React.useState<Highcharts.Options | null>(null);
  const [date, setDate] = React.useState<Date>();
  const [HighchartsReactComponent, setHighchartsReactComponent] =
    React.useState<any>(null);

  React.useEffect(() => {
    // Dynamically import Highcharts and modules client-side
    Promise.all([import("highcharts"), import("highcharts-react-official")])
      .then(([HighchartsModule, HighchartsReactModule]) => {
        const Highcharts = HighchartsModule.default;
        const HighchartsReact = HighchartsReactModule.default;
        setHighchartsReactComponent(() => HighchartsReact);

        // Define chart options
        const options: Highcharts.Options = {
          chart: {
            type: "line",
            height: 175,
            backgroundColor: "transparent",
          },
          title: {
            text: "",
          },
          credits: {
            enabled: false,
          },
          exporting: {
            enabled: false,
          },

          xAxis: {
            max: 12,
            lineColor: "#BFC1C6",
            tickWidth: 0,
            categories: [
              "5 AM",
              "6 AM",
              "7 AM",
              "8 AM",
              "9 AM",
              "10 AM",
              "11 AM",
              "12 PM",
              "1 PM",
              "2 PM",
              "3 PM",
              "4 PM",
              "5 PM",
              "6 PM",
            ] as string[],
            title: {
              text: "",
            },
            labels: {
              style: {
                fontSize: '11px'  // Reduced to "xs" size
              }
            }
          },
          yAxis: {
            lineWidth: 1,
            lineColor: "#BFC1C6",
            tickWidth: 0,
            gridLineDashStyle: "Dash",
            min: 1,
            max: 5,
            title: {
              text: "",
            },
          },
          legend: {
            enabled: false,
          },
          series: [
            {
              name: "Series 1", // Placeholder name; adjust based on your data
              data: [4, 4, 4, 4], // Orange bar data (4 at 5 AM, 1 from 12 PM to 6 PM)
              color: "#FFA500", // Orange
              lineWidth: 5,
              marker: {
                enabled: false,
              },
            },
            {
              name: "Series 2",
              data: [null, 3, 3, 3],
              color: "#0000FF",
              lineWidth: 5,
              marker: {
                enabled: false,
              },
            },
            {
              name: "Series 3",
              data: [null, 2, 2, 2],
              color: "#00FF00",
              lineWidth: 5,
              marker: {
                enabled: false,
              },
            },
            {
              name: "Series 2",
              data: [null, 1, 1, 1, 1, 1, 1, 1],
              color: "#0000FF",
              lineWidth: 5,
              marker: {
                enabled: false,
              },
            },
          ] as Highcharts.SeriesOptionsType[],
        };

        setChartOptions(options);
      })
      .catch((error) => {
        console.error("Failed to load Highcharts modules:", error);
      });
  }, []);

  if (!HighchartsReactComponent || !chartOptions) {
    return <div className="text-center text-gray-500">Loading chart...</div>;
  }

  return (
    <div className="w-full rounded-xl overflow-hidden text-sm bg-white pt-4 border border-gray-200" id="container">
      <div className="flex justify-between px-4">
        <div>
          <div>Average time per day</div>
          <div>HP:00:15hrs</div>
        </div>
        <div>

        </div>
      </div>
      <HighchartsReactComponent
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export { MotorPowerConsuptionChart };
