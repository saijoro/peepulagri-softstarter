import { MotorPowerConsuptionChart } from "./MotorPowerConsuptionChart";
import { Schedule } from "../sheduleTiming";
import { SettingsSvg } from "../svg/SettingsSvg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; import { useQuery } from "@tanstack/react-query";
import { getSinglePondMotorsAPI } from "@/lib/services/users";

const PondBasedMotors = () => {
  const {
    isFetching,
    data: motorData = [],
    refetch,
  } = useQuery({
    queryKey: ["MotorData"],
    queryFn: async () => {

      const response = await getSinglePondMotorsAPI(1, 1);
      if (response.status === 200 || response.status === 201) {
        return response?.data?.data || [];
      } else {
        throw new Error("Failed to fetch ponds data");
      }
    },
    enabled: true,
    refetchOnWindowFocus: false,
  });
  console.log(motorData, "motorData");

  // State for managing chart data and settings
  // Retrieved from https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt

  return (
    <div className="">
      <div className="pb-2 flex justify-end sticky top-0 bg-white pt-2 z-50"></div>
      <div className="flex w-full gap-3 2xl:text-xs lg:text-xs ">
        <div className="border border-gray-300 rounded-xl bg-white overflow-hidden w-[45%]">
          <div className="p-2 bg-gray-50 border-l font-semibold text-gray-500">
            {motorData?.motor_name ? motorData?.motor_name : "--"}
          </div>
          <div className="py-5">
            <table className="w-full space-y-4">
              <tr className="flex items-center justify-between pl-2">
                <th className="">
                  <div className="flex items-center gap-2 font-normal">
                    <div>
                      <img src="/assets/thunder.svg" alt="" />
                    </div>
                    <div>Voltage(V):</div>
                  </div>
                </th>
                <td className="">
                  <div className="relative">
                    <span className="w-full h-1 top-[-4px] rounded-full bg-red-500 absolute"></span>
                    {motorData?.line_voltage_vbr ? motorData?.line_voltage_vbr : "--"}
                  </div>
                </td>
                <td className="">
                  <div className="relative">
                    <span className="w-full h-1 top-[-4px] rounded-full bg-yellow-400 absolute"></span>
                    {motorData?.line_voltage_vry ? motorData?.line_voltage_vry : "--"}
                  </div>
                </td>
                <td className="pr-4">
                  <div className="relative">
                    <span className="w-full h-1 top-[-4px] rounded-full bg-blue-500 absolute"></span>
                    {motorData?.line_voltage_vyb ? motorData?.line_voltage_vyb : "--"}
                  </div>
                </td>
              </tr>
              <tr className="flex items-center justify-between pl-2">
                <th className="">
                  <div className="flex items-center gap-2 font-normal flex-shrink-0">
                    <div>
                      <img className="" src="/assets/meter.svg" alt="" />
                    </div>
                    <div>Current(A):</div>
                  </div>
                </th>
                <td className="">
                  <div>{motorData?.current_i1 ? motorData?.current_i1 : "--"}</div>
                </td>
                <td className="">
                  <div>{motorData?.current_i2 ? motorData?.current_i2 : "--"}</div>
                </td>
                <td className="pr-4">
                  <div>{motorData?.current_i3 ? motorData?.current_i3 : "--"}</div>
                </td>
              </tr>
              <tr className="flex items-center justify-between pl-2">
                <td>
                  <div className="flex items-center gap-2">
                    <div>
                      <img src="/assets/timer.svg" alt="" />
                    </div>{" "}
                    <div>Ran For 18hrs</div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="border-gray-300 rounded-xl bg-white overflow-hidden w-[55%] border space-y-5">
          <div className="flex justify-between p-2 bg-gray-50 border-l font-semibold text-gray-500">
            <div className="">{motorData?.device_name ? motorData?.device_name : "--"}</div>
            <div>
              <Sheet>
                <SheetTrigger>
                  <button className="flex items-center gap-1.5 text-black">
                    <div>
                      <SettingsSvg />
                    </div>
                    <div>Settings</div>
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div>
            <div className="px-2">
              <table className="w-full space-y-5">
                <tr className="flex items-center justify-between gap-8">
                  <td>
                    <div className="flex items-center gap-2">
                      <div>
                        <img src="/assets/id.svg" alt="" />
                      </div>
                      <div>Device ID:</div>
                    </div>
                  </td>
                  <td>
                    <div>{motorData?.serial_no ? motorData?.serial_no : "--"}</div>
                  </td>
                </tr>
                <tr className="flex items-start justify-between gap-8">
                  <td>
                    <div className="flex items-center gap-2">
                      <div>
                        <img src="/assets/plug.svg" alt="" />
                      </div>
                      <div className="">Connected Motors:</div>
                    </div>
                  </td>
                  <td>
                    <div className="space-y-2 mb-2">
                      {motorData?.connected_motors?.map((motor: any) => (
                        <div
                          key={motor.id}
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200"
                        >
                          <div>
                            <img src="/assets/whitemotor.svg" alt={motor?.title} />
                          </div>
                          <div className="text-xs">{motor?.title}</div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <Schedule />
      </div>
      <div>
        <MotorPowerConsuptionChart />
      </div>
      {/* <div className="pt-2">
        <HighCharts />
      </div>
      <div className="py-2">
        <HighCharts />
      </div> */}
    </div>
  );
};

export default PondBasedMotors;
