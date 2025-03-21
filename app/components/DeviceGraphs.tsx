import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import HighCharts from "./highchart";
import { SettingsSvg } from "./svg/SettingsSvg";

import * as React from "react";

import { getSingleMotorAPI } from "@/lib/services/deviceses";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";

const DeviceGraphs = ({ singlemotordata }) => {
  const { device_id, motor_id } = useParams({ strict: false });
  const [date, setDate] = React.useState<Date>();
  const [motorData, setMotorData] = React.useState({});

  const {
    data: singledata,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["singleMotor", device_id, motor_id],
    queryFn: async () => {
      try {
        const response = await getSingleMotorAPI(device_id, motor_id);
        if (response.success) {
          const data = response?.data?.data;
          setMotorData(data);
          return data;
        } else {
          throw response;
        }
      } catch (errData) {
        console.error(errData);
        throw errData;
      }
    },
  });

  return (
    <div className=" py-2">
      <div className="flex w-full gap-3 2xl:text-xs lg:text-xs">
        <div className="border border-gray-300 rounded-xl bg-white overflow-hidden w-[50%]">
          <div className="p-2 bg-gray-50 border-l font-semibold text-gray-500">
            {singlemotordata?.motor_name}
          </div>
          <div className="w-full">
            <div className="h-full py-[10%]">
              <table className="w-full h-full">
                <tbody className="space-y-3 h-full">
                  <tr className="flex items-center justify-between pl-2">
                    <th className="flex items-center">
                      <div className="flex items-center gap-2 font-normal responsive-font">
                        <img src="/assets/thunder.svg" alt="Voltage" />
                        <div>Voltage(V):</div>
                      </div>
                    </th>
                    <td className="flex items-center justify-center responsive-font">
                      <div>{singlemotordata?.line_voltage_vry || "-"}</div>
                    </td>
                    <td className="flex items-center justify-center responsive-font">
                      {singlemotordata?.line_voltage_vyb || "-"}
                    </td>
                    <td className="flex items-center justify-center pr-4 responsive-font">
                      {singlemotordata?.line_voltage_vbr || "-"}
                    </td>
                  </tr>
                  <tr className="flex items-center justify-between pl-2">
                    <th className="flex items-center">
                      <div className="flex items-center gap-2 font-normal responsive-font">
                        <img src="/assets/meter.svg" alt="Current" />
                        <div>Current(A):</div>
                      </div>
                    </th>
                    <td className="flex items-center justify-center responsive-font">
                      {singlemotordata?.current_i1 || "-"}
                    </td>
                    <td className="flex items-center justify-center responsive-font">
                      {singlemotordata?.current_i2 || "-"}
                    </td>
                    <td className="flex items-center justify-center pr-4 responsive-font">
                      {singlemotordata?.current_i3 || "-"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="border-gray-300 rounded-xl bg-white overflow-hidden w-[50%] border space-y-5">
          <div className="flex justify-between p-2 bg-gray-50 border-l font-semibold text-gray-500">
            <div>{singlemotordata?.device_name}</div>
            <Sheet>
              <SheetTrigger>
                <button className="flex items-center gap-1.5 text-black">
                  <SettingsSvg />
                  <div>Settings</div>
                </button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="px-2">
            <div className="w-full space-y-5">
              <div className="flex items-center justify-between gap-8">
                <div className="flex items-center gap-2">
                  <img src="/assets/id.svg" alt="Device ID" />
                  <div>Device ID:</div>
                </div>
                <div>{singlemotordata?.serial_no}</div>
              </div>
              <div className="">
                <div className="flex items-center gap-2">
                  <img src="/assets/plug.svg" alt="Connected Motors" />
                  <div>Connected Motors</div>
                </div>
                <div className="w-full flex gap-2 items-center py-2 flex-nowrap overflow-x-auto scrollbar-hidden">
                  <div className="w-full flex gap-2 flex-nowrap">
                    {singlemotordata?.connected_motors?.length > 0 ? (
                      singlemotordata.connected_motors.map((motor) => (
                        <div
                          key={motor.id}
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200 shrink-0"
                        >
                          <img src="/assets/whitemotor.svg" alt="Motor" />
                          <div className="text-xs">{motor.title}</div>
                        </div>
                      ))
                    ) : (
                      <div className="text-gray-400 text-sm">
                        No connected motors
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2">
        <HighCharts motorData={motorData} paramater="voltage" />
      </div>
      <div className="py-2">
        <HighCharts motorData={motorData} paramater="current" />
      </div>
    </div>
  );
};

export { DeviceGraphs };
