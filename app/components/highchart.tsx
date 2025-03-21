import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { FC, useEffect, useState, useMemo, useCallback } from "react";
import { getVoltageGraphAPI } from "@/lib/services/deviceses";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import dayjs from "dayjs";
import { Loader } from "lucide-react";


type IHighCharts = {
  motorData: any;
  paramater: string;
};

const HighCharts: FC<IHighCharts> = ({ motorData, paramater }) => {
  const { device_id, motor_id } = useParams({ strict: false });

  const memoizedMotorData = useMemo(
    () => ({
      pond_id: motorData?.pond_id,
      ipv6: motorData?.ipv6,
      motor_ref_id: motorData?.motor_ref_id,
    }),
    [motorData?.pond_id, motorData?.ipv6, motorData?.motor_ref_id]
  );

  const fetchVoltageData = useCallback(async () => {
    if (
      !memoizedMotorData.pond_id ||
      !memoizedMotorData.ipv6 ||
      !memoizedMotorData.motor_ref_id
    )
      return [];

    const queryParams = {
      parmater: paramater,
      from_date: "2025-03-11",
      to_date: "2025-03-13",
    };

    const response = await getVoltageGraphAPI({
      pondId: memoizedMotorData.pond_id,
      device_ipv6: memoizedMotorData.ipv6,
      motor_ref_id: memoizedMotorData.motor_ref_id,
      queryParams,
    });

    return response?.data?.data || [];
  }, [memoizedMotorData, paramater]);

  const { data = [], isLoading } = useQuery({
    queryKey: [`${paramater}data`, device_id, motor_id, memoizedMotorData],
    queryFn: fetchVoltageData,
    enabled:
      !!device_id &&
      !!motor_id &&
      !!memoizedMotorData.pond_id &&
      !!memoizedMotorData.ipv6 &&
      !!memoizedMotorData.motor_ref_id,
  });

  const chartOptions = useMemo(
    () => ({
      chart: {
        type: "areaspline",
        height: 175,
        backgroundColor: "transparent",
      },
      title: { text: "" },
      legend: { enabled: false },
      xAxis: {
        lineWidth: 1,
        lineColor: "#BFC1C6",
        tickWidth: 0,
        max: 11,
        categories: data.map((item: any) =>
          dayjs(item?.time_stamp).format("h:mm")
        ),
        title: {
          text: `Time stamp ${data.slice(0, 1).map((item: any) => dayjs(item?.time_stamp).format("A"))}`,
        },
        labels: { style: { fontSize: "10px" } },
      },
      yAxis: {
        gridLineDashStyle: "Dash",
        lineWidth: 1,
        lineColor: "#BFC1C6",
        tickWidth: 0,
        title: { text: "" },
        labels: { style: { fontSize: "10px" } },
      },
      credits: { enabled: false },
      plotOptions: { areaspline: { fillOpacity: 0.5 } },
      series: [
        {
          color: "#F48403",
          marker: { enabled: false },
          name: paramater,
          data: data.map((item: any) =>
            paramater === "current"
              ? item?.current_avg || 0
              : item?.voltage_avg || 0
          ),
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(244, 160, 3, 0.20)"],
              [1, "rgba(244, 160, 3, 0.00)"],
            ],
          },
        },
      ],
    }),
    [data, paramater]
  );

  return (
    <div className="relative">

      <figure className="highcharts-figure rounded-xl w-full overflow-hidden bg-white border border-gray-200">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <img src="/assets/thunder.svg" alt="" />
            <div className="capitalize">{paramater}</div>
          </div>
        </div>
        {data.length === 0 && !isLoading ? (
          <div className="h-[175px] flex items-center justify-center">
            No data found
          </div>
        ) : (
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        )}
      </figure>
      {isLoading && (
        <div className="absolute top-1/2 left-1/2">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default HighCharts;
