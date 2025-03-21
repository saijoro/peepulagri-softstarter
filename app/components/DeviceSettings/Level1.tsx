import { useState } from "react";
import { EyeSvg } from "../svg/EyeSvg";

const Level1 = () => {
  const [viewPasswort, SetViewPassword] = useState(false);
  const handleView = () => {
    SetViewPassword(viewPasswort ? false : true);
  };
  return (
    <div>
      <div className="space-y-2 pb-5">
        <div className="p-2 rounded-lg border border-gray-200 space-y-6">
          <div className="space-y-2">
            <div className="border-b border-gray-200 pb-2 px-3">
              <div className="font-semibold">Authenticating Settings</div>
            </div>
            <div className="space-y-1 px-2 pt-2">
              <div>Password</div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-slate-200 outline-none rounded-sm h-7 w-44 px-2">
                  <input
                    placeholder="Enter Your Password"
                    className=" outline-none  h-full w-full"
                    type={`${viewPasswort ? "password" : "text"}`}
                  />
                  <div
                    onClick={handleView}
                    className="w-fit inline cursor-pointer"
                  >
                    {viewPasswort === true ? (
                      <EyeSvg />
                    ) : (
                      <img className="flex-shrink-0" src="/assets/open-eye.svg" alt="" />
                    )}
                  </div>
                </div>
                <div className="text-red-500">Reset Password</div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" border-b border-gray-200 pb-2 px-3">
              <div className="font-semibold">Device Configuration</div>
            </div>
            <div className="px-2 pt-2">
              <table className="">
                <tr className="">
                  <th className="font-normal py-1.5 ">Level Indication</th>
                  <th className="font-normal py-1.5 pl-6">Network Selection</th>
                </tr>
                <tr>
                  <td className=" bg-[#D9484180] py-1 text-center rounded-[3px]">
                    Level-1
                  </td>
                  <td className="px-6">3P4W</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" border-b border-gray-200 pb-2 px-3">
              <div className="font-semibold">Current Transformer(CT)</div>
            </div>
            <div className="px-2 pt-2">
              <table className="">
                <tr className="">
                  <th className="font-normal py-1.5">CT Secondary</th>
                  <th className="font-normal py-1.5 pl-6">CT Primary</th>
                </tr>
                <tr>
                  <td className="">5A</td>
                  <td className="px-6">5A</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" border-b border-gray-200 pb-2 px-3">
              <div className="font-semibold">Potential Transformer(PT)</div>
            </div>
            <div className="px-2 pt-2">
              <table className="">
                <tr className="">
                  <th className="font-normal py-1.5 ">PT Secondary</th>
                  <th className="font-normal py-1.5 pl-6">PT Primary</th>
                </tr>
                <tr>
                  <td className="">350V</td>
                  <td className="px-6">350V</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Compensation Settings</div>
              </div>
              <div className="grid grid-rows-2 grid-cols-4 gap-5 w-full p-2">
                <div>
                  <div>Phase Compensation Angle</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Nominal Voltage</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Threshold Voltage</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Relays Count</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Auto Initialization</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Control Mode</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Switching Program</div>
                  <div>0</div>
                </div>
                <div>
                  <div>Target Power</div>
                  <div>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 rounded-lg border border-gray-200 space-y-6 pb-4">
          <div className="space-y-6">
            <div className="p-2">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Timing</div>
              </div>
              <div>
                <table className="">
                  <tr className="">
                    <th className="font-normal py-1.5 ">Step Time</th>
                    <th className="font-normal py-1.5 pl-6">
                      Discharge Time (Reconnection Time)
                    </th>
                  </tr>
                  <tr>
                    <td className="">5s</td>
                    <td className="px-6">180s</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="p-2">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">
                  Control Sensitivity Settings
                </div>
              </div>
              <div>
                <table className="">
                  <tr className="">
                    <th className="font-normal py-1.5 ">Control Sensitivity</th>
                    <th className="font-normal py-1.5 pl-6">Low Current</th>
                  </tr>
                  <tr>
                    <td className="">60%</td>
                    <td className="px-6">0%</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Communication Settings</div>
              </div>
              <div className="flex items-center gap-20 p-2">
                <div className="space-y-1">
                  <div>Slave ID</div>
                  <div>1</div>
                </div>
                <div className="space-y-1">
                  <div>Baud Rate</div>
                  <div>9600</div>
                </div>
                <div className="space-y-1">
                  <div>Parity</div>
                  <div>None</div>
                </div>
                <div className="space-y-1">
                  <div>Stop Bits</div>
                  <div>1</div>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Communication Settings</div>
              </div>
              <div>
                <div>
                  <div>Back Light</div>
                  <div>0s</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Level1 };
