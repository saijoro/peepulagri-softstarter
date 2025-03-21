import { DecrementSvg } from "@/components/svg/DecrementSvg";
import { IncrementSvg } from "@/components/svg/IncrementSvg";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const Level2Edit = () => {
  const [value, SetValue] = useState(5);
  const increment = () => SetValue(value + 1);
  const decrement = () => SetValue(value - 1);
  return (
    <div className="space-y-2 pb-5">
      <div className=" space-y-6">
        <div className="space-y-2">
          <div className="border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Voltage Settings</div>
          </div>
          <div className="space-y-1 px-1">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <div>Trip Time </div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
              <div className="flex items-center gap-2">
                <div>NO VOLT</div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
              <div className="flex items-center gap-2">
                <div>Over Voltage</div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
              <div className="flex items-center gap-2">
                <div>Under Voltage</div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
            </div>
            <div className="flex items-center">
              <div className="px-2 pt-6">
                <div>Set Over Voltage</div>
                <div className="flex gap-16 items-center">
                  <div className="flex items-center gap-2 pt-2">
                    <div>Min</div>
                    <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                      <div className="space-y-1">
                        <div
                          className="p-0.5 bg-gray-400 rounded-sm"
                          onClick={increment}
                        >
                          <IncrementSvg />
                        </div>
                        <div
                          className="p-0.5  bg-gray-400 rounded-sm"
                          onClick={decrement}
                        >
                          <DecrementSvg />
                        </div>
                      </div>
                      {value} A
                    </div>
                    <div className="p-[9.5px] border border-slate-200 rounded-[3px] text-gray-500">
                      L-N
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <div>Max</div>
                    <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                      <div className="space-y-1">
                        <div
                          className="p-0.5 bg-gray-400 rounded-sm"
                          onClick={increment}
                        >
                          <IncrementSvg />
                        </div>
                        <div
                          className="p-0.5  bg-gray-400 rounded-sm"
                          onClick={decrement}
                        >
                          <DecrementSvg />
                        </div>
                      </div>
                      {value} A
                    </div>
                    <div className="p-[9.5px] border border-slate-200 rounded-[3px] text-gray-500">
                      L-L
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Harmonic Distortion Settings</div>
          </div>
          <div className="px-3 flex items-start gap-24">
            <div className="flex items-center gap-2 pt-3">
              <div>Total Harmonic Distortion</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
            <div className="space-y-1.5 w-[25%]">
              <div>THD I Range</div>
              <div className="flex items-center w-auto gap-2">
                <div className="w-full focus:ring-0 shadow-none border  border-slate-200 rounded-[3px] overflow-hidden">
                  <input className="h-full w-full p-2 outline-none" />
                </div>
                <div className="w-[20%]">
                  <div className="p-2 border border-slate-200 rounded-[3px] text-gray-500 text-center">
                    %
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Compensation Settings</div>
          </div>
          <div className="px-3 flex items-start gap-32">
            <div className="flex items-center gap-2 pt-3">
              <div>Over Compensate</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
            <div className="flex items-center gap-2 pt-3">
              <div>Under Compensate</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Error Handling</div>
          </div>
          <div className="px-3 flex items-start gap-24">
            <div className="flex items-center gap-2 pt-3">
              <div>Step Error</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
            <div className="space-y-1.5 w-[25%]">
              <div>THD I Range</div>
              <div className="flex items-center w-auto gap-2">
                <div className="w-full focus:ring-0 shadow-none border  border-slate-200 rounded-[3px] overflow-hidden">
                  <input className="h-full w-full p-2 outline-none" />
                </div>
                <div className="w-[20%]">
                  <div className="p-2 border border-slate-200 rounded-[3px] text-gray-500 text-center">
                    %
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 pt-3">
              <div>CT Polarity error</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
          </div>
          <div className="flex items-center gap-16 px-3">
            <div className="flex items-center gap-2 pt-3">
              <div>Over Temperature</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
            <div className="font-normal space-y-1">
              <div>CT Primary</div>
              <div>
                <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                  <div className="space-y-1">
                    <div
                      className="p-0.5 bg-gray-400 rounded-sm"
                      onClick={increment}
                    >
                      <IncrementSvg />
                    </div>
                    <div
                      className="p-0.5  bg-gray-400 rounded-sm"
                      onClick={decrement}
                    >
                      <DecrementSvg />
                    </div>
                  </div>
                  {value} c
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Fan and Hysteresis Settings</div>
          </div>
          <div className="px-2 pt-2">
            <div className="flex items-start gap-20 p-2">
              <div className="flex items-center gap-2 pt-3">
                <div>Fan Setting</div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
              <div className="space-y-1.5">
                <div>Hysteresis Voltage</div>
                <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                  <div className="space-y-1">
                    <div
                      className="p-0.5 bg-gray-400 rounded-sm"
                      onClick={increment}
                    >
                      <IncrementSvg />
                    </div>
                    <div
                      className="p-0.5  bg-gray-400 rounded-sm"
                      onClick={decrement}
                    >
                      <DecrementSvg />
                    </div>
                  </div>
                  {value} %
                </div>
              </div>
              <div className="space-y-1.5">
                <div>Hysteresis PF</div>
                <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                  <div className="space-y-1">
                    <div
                      className="p-0.5 bg-gray-400 rounded-sm"
                      onClick={increment}
                    >
                      <IncrementSvg />
                    </div>
                    <div
                      className="p-0.5  bg-gray-400 rounded-sm"
                      onClick={decrement}
                    >
                      <DecrementSvg />
                    </div>
                  </div>
                  {value} %
                </div>
              </div>
            </div>
            <div className="flex items-start gap-12 p-2">
              <div className="flex items-center gap-2 pt-3">
                <div>Over Temperature   </div>
                <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
              </div>
              <div className="space-y-1.5">
                <div>Over Temperature Setting </div>
                <div className="flex gap-10 px-2 py-1 border border-slate-200 items-center rounded-[3px]">
                  <div className="space-y-1">
                    <div
                      className="p-0.5 bg-gray-400 rounded-sm"
                      onClick={increment}
                    >
                      <IncrementSvg />
                    </div>
                    <div
                      className="p-0.5  bg-gray-400 rounded-sm"
                      onClick={decrement}
                    >
                      <DecrementSvg />
                    </div>
                  </div>
                  {value} %
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Level2Edit };
