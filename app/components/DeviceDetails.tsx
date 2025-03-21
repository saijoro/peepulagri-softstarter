import { BankValuesSvg } from "./svg/BankValues"
import { Danger } from "./svg/Danger"
import { InfoSvg } from "./svg/Info"
import { RelayStatus } from "./svg/RelayStatus"
import { TotalHarmonic } from "./svg/TotalHarmonic"

import * as React from "react";

import { ReloadSvg } from "./svg/ReloadSvg"
import { Meter } from "./svg/Meter"

const DeviceDetails = () => {
  const [date, setDate] = React.useState<Date>();

  return (
    <div>
      <div className="">
        <div className="space-y-2 py-2">

          <div className="flex items-center w-full gap-4 justify-end">
            <div>Last sync 12/01/2024 12:30 AM</div>
            <div className="flex items-center gap-2 px-4 py-1 w-fit border border-black rounded-lg">
              <div>
                <ReloadSvg />
              </div>
              <div>Update Sync</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          {/* Power Measurements */}
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <Meter />
                <div>Total kW</div>
                <div className="text-base">999</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>kW1</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kW2</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kW3</div>
                  <div className="text-base">9999</div>
                </div>
              </div>
            </div>
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <img src="/assets/badge.svg" alt="Average PF icon" />
                <div>Average PF</div>
                <div className="text-base text-green-600">1.0</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>PF1</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>PF2</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>PF3</div>
                  <div className="text-base">9999</div>
                </div>
              </div>
            </div>
          </div>

          {/* Temperature Card */}
          <div>
            <div className="w-[49%] flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[48%] space-y-1 border-r border-gray-200">
                <div>Temperature</div>
                <div className="text-base">50°C</div>
              </div>
              <div className="w-[50%] space-y-1">
                <div className="flex items-center justify-center">
                  <img src="/assets/graph.svg" alt="Frequency graph" />
                </div>
                <div className="flex items-center justify-between">
                  <div>Frequency</div>
                  <div className="text-base">50Hz</div>
                </div>
              </div>
            </div>
          </div>

          {/* Voltage Measurements */}
          <div className="flex items-center gap-2 text-base">
            <img src="/assets/voltage.svg" alt="Voltage icon" />
            <div className="text-green-600">Voltage Measurements</div>
          </div>
          <div className="grid grid-cols-2 gap-2 items-center">
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <img
                  src="/assets/currentmeter.svg"
                  alt="Average Voltage LN icon"
                />
                <div>Average Voltage LN</div>
                <div className="text-base">999V</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>Voltage V1N</div>
                  <div className="text-base">290V</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Voltage V2N</div>
                  <div className="text-base">290V</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Voltage V3N</div>
                  <div className="text-base">290V</div>
                </div>
              </div>
            </div>
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <img
                  src="/assets/voltagemeter.svg"
                  alt="Average Voltage LL icon"
                />
                <div>Average Voltage LL</div>
                <div className="text-base">550V</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>Voltage V12</div>
                  <div className="text-base">290V</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Voltage V23</div>
                  <div className="text-base">550V</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Voltage V31</div>
                  <div className="text-base">550V</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Card */}
          <div>
            <div className="w-[49%] flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[30%] space-y-1 border-r border-gray-200">
                <img
                  src="/assets/currentlogo.svg"
                  alt="Average Current icon"
                />
                <div>Average Current</div>
                <div className="text-base">100A</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>Current I1</div>
                  <div className="text-base">100A</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Current I2</div>
                  <div className="text-base">100A</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Current I3</div>
                  <div className="text-base">100A</div>
                </div>
              </div>
            </div>
          </div>

          {/* Power Measurements */}
          <div className="flex items-center gap-2 text-base">
            <img src="/assets/greenthunder.svg" alt="Power icon" />
            <div className="text-green-600">Power Measurements</div>
          </div>
          <div className="grid grid-cols-2 gap-3 items-center">
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <img src="/assets/avaragekva.svg" alt="Average kVA icon" />
                <div>Average kVA</div>
                <div className="text-base">999</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>kVA1</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kVA2</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kVA3</div>
                  <div className="text-base">9999</div>
                </div>
              </div>
            </div>
            <div className="flex p-3 gap-4 bg-white rounded-md shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="w-[35%] space-y-1 border-r border-gray-200">
                <img src="/assets/totalkvar.svg" alt="Total kVAr icon" />
                <div>Total kVAr</div>
                <div className="text-base">999</div>
              </div>
              <div className="w-[65%] space-y-1">
                <div className="flex items-center justify-between">
                  <div>kVAr1</div>
                  <div className="text-base">9999</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kVAr2</div>
                  <div className="text-base">290V</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>kVAr3</div>
                  <div className="text-base">9999</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full ">
              <div
                className="relative rounded-md p-[2px]"
                style={{
                  background: "linear-gradient(to right, #ef4444, #22c55e)",
                }}
              >
                <div className="bg-white p-2 space-y-2 py-4 rounded-md">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="/assets/greenthunder.svg"
                        alt="kWh icon"
                        className="w-5 h-5"
                      />
                      <div>kWh</div>
                    </div>
                    <div>9999</div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="/assets/greenthunder.svg"
                        alt="kWh icon"
                        className="w-5 h-5"
                      />
                      <div>kWh</div>
                    </div>
                    <div>9999</div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-1.5">
                      <img
                        src="/assets/greenthunder.svg"
                        alt="kWh icon"
                        className="w-5 h-5"
                      />
                      <div>kWh</div>
                    </div>
                    <div>9999</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Errors card */}
          <div className="rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)] pb-3 w-full">
            <div className="flex items-center gap-2 bg-[#E4F5E3] p-2">
              <div>
                <img src="/assets/danger.svg" alt="" />
              </div>
              <div className="text-green-600">Errors</div>
            </div>
            <div className="bg-red-200 p-2 text-[clamp(0.1rem,0.6rem,3rem)]">
              Over Voltage Error detected. The voltage level has exceeded
              the safe limit. Please check the system to prevent potential
              damage.
            </div>
            <div className="space-y-5 py-4">
              <div className="flex items-center justify-evenly">
                <div className="space-y-2">
                  <div>No Voltage Error</div>
                  <div className="text-lg">Error</div>
                </div>
                <div className="space-y-2">
                  <div>Under Voltage Error</div>
                  <div className="text-lg">Error</div>
                </div>
                <div className="space-y-2">
                  <div>Over Voltage Error</div>
                  <div className="text-lg">Error</div>
                </div>
                <div className="space-y-2">
                  <div>THD I Error</div>
                  <div className="text-lg">Error</div>
                </div>
              </div>
              <div className="flex items-center justify-evenly">
                <div>
                  <div>Temparature Error</div>
                  <div className="text-lg">Error</div>
                </div>
                <div className="space-y-2">
                  <div>Over CompenSate Error</div>
                  <div className="flex items-center bg-red-200 rounded-full w-fit gap-0.5 px-2 ">
                    <div>
                      <InfoSvg />
                    </div>
                    <div className="text-lg text-red-500">Error</div>
                  </div>
                </div>
                <div>
                  <div>Under Compensate Error</div>
                  <div className="text-lg">Error</div>
                </div>
                <div className="opacity-0">
                  <div>Under </div>
                  <div className="text-lg">Error</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end px-3">
              <div className="flex items-center gap-2 bg-blue-100 py-2 w-fit rounded-md px-2 ">
                <div>
                  <Danger />
                </div>
                <div>Check Error Logs</div>
              </div>
            </div>
          </div>
          {/* Relay status Card */}
          <div>
            <div className="rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
              <div className="flex items-center gap-2 bg-[#E4F5E3] p-2">
                <div>
                  <RelayStatus />
                </div>
                <div className="text-green-600 ">Relay Status</div>
              </div>
              <div className="p-3">
                <div className="grid grid-rows-3 grid-cols-4 gap-6">
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                  <div className="space-y-1">
                    <div>Relay-1</div>
                    <div className="text-green-600">ON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bank values card */}
          <div className="rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
            <div className="flex items-center gap-2 p-2 bg-[#E4F5E3]">
              <div>
                <BankValuesSvg />
              </div>
              <div className="text-green-600">Bank Values</div>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-6 p-3">
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
              <div className="space-y-1">
                <div>Bank 1</div>
                <div className="text-base">99 Kvar</div>
              </div>
            </div>
          </div>
          {/* harmonic distortion card */}
          <div className="rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)]">
            <div className="flex items-center p-2 gap-2 bg-[#E4F5E3]">
              <div>
                <TotalHarmonic />
              </div>
              <div className="text-green-600">
                Total Harmonic Distortion (THD)
              </div>
            </div>
            <div className="grid grid-cols-4 grid-rows-3 gap-6 p-3">
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
              <div className="space-y-1">
                <div>THD of Voltage V1N</div>
                <div className="text-base">100%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { DeviceDetails }