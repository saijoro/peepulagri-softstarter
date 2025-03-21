import { DecrementSvg } from "@/components/svg/DecrementSvg";
import { EyeSvg } from "@/components/svg/EyeSvg";
import { IncrementSvg } from "@/components/svg/IncrementSvg";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Level1Edit = () => {
  const [viewPasswort, SetViewPassword] = useState(false);
  const handleView = () => {
    SetViewPassword(viewPasswort ? false : true);
  };
  const [value, SetValue] = useState(5);
  const increment = () => SetValue(value + 1);
  const decrement = () => SetValue(value - 1);
  return (
    <div>
      <div className="space-y-2 pb-5">
        <div className="p-2 rounded-lg space-y-6">
          <div className="space-y-1.5">
            <div className="border-b border-gray-200 pb-2 px-2">
              <div className="font-semibold">Authenticating Settings</div>
            </div>
            <div className="flex items-center gap-16">
              <div className="space-y-1 px-2">
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
                        <img
                          className="flex-shrink-0"
                          src="/assets/open-eye.svg"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-1 px-2 pt-2">
                <div>Confirm Password</div>
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
                        <img
                          className="flex-shrink-0"
                          src="/assets/open-eye.svg"
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className=" border-b border-gray-200 pb-2 px-3">
              <div className="font-semibold">Device Configuration</div>
            </div>
            <div className="px-2">
              <table className="">
                <tr className="">
                  <th className="font-normal py-1.5 ">Level Indication</th>
                  <th className="font-normal py-1.5 pl-6">Network Selection</th>
                </tr>
                <tr>
                  <td className="flex items-start">
                    <div className=" bg-[#D9484180] py-1 text-center rounded-[3px] w-full">
                      {" "}
                      Level-1{" "}
                    </div>
                  </td>
                  <td className="px-6">
                    <Select>
                      <SelectTrigger className="w-full focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                        <SelectValue className="" placeholder="3P4W" />
                      </SelectTrigger>
                      <SelectContent className="bg-white ">
                        <SelectItem value="light">5A</SelectItem>
                        <SelectItem value="dark">5A</SelectItem>
                        <SelectItem value="system">5A</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" border-b border-gray-200 pb-2 px-2">
              <div className="font-semibold">Current Transformer(CT)</div>
            </div>
            <div className="flex items-center gap-10 px-2 pt-1">
              <div className="space-y-1">
                <div>CT Secondary</div>
                <div className="">
                  <Select>
                    <SelectTrigger className="w-[180px] focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                      <SelectValue className="" placeholder="5A" />
                    </SelectTrigger>
                    <SelectContent className="bg-white ">
                      <SelectItem value="light">5A</SelectItem>
                      <SelectItem value="dark">5A</SelectItem>
                      <SelectItem value="system">5A</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
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
                    {value} A
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className=" border-b border-gray-200 pb-2 px-2">
              <div className="font-semibold">Potential Transformer(PT)</div>
            </div>
            <div className="flex items-center gap-10 px-2">
              <div className="font-normal py-1.5 space-y-1">
                <div>PT Secondary </div>
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
                    {value} A
                  </div>
                </div>
              </div>
              <div className="font-normal space-y-1">
                <div>PT Primary</div>
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
                    {value} A
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="">
              <div className=" border-b border-gray-200 pb-2 px-2">
                <div className="font-semibold">Compensation Settings</div>
              </div>
              <div className="space-y-6">
                <div className="pt-3.5 flex items-center gap-5 px-2">
                  <div className="space-y-1.5 w-1/3">
                    <div>Phase Compensation Angle</div>
                    <div>
                      <Select>
                        <SelectTrigger className=" focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                          <SelectValue className="" placeholder="0" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectItem value="light">5A</SelectItem>
                          <SelectItem value="dark">5A</SelectItem>
                          <SelectItem value="system">5A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1.5 w-1/3">
                    <div>Nominal Voltage</div>
                    <div>
                      <Select>
                        <SelectTrigger className=" focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                          <SelectValue
                            className=""
                            placeholder="For 1P2W/3P4W-240V"
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectItem value="light">5A</SelectItem>
                          <SelectItem value="dark">5A</SelectItem>
                          <SelectItem value="system">5A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-1.5 w-[25%]">
                    <div>Threshold Voltage</div>
                    <div className="flex items-center w-auto gap-2">
                      <div className="w-[70%]">
                        <Select>
                          <SelectTrigger className=" focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                            <SelectValue className="" placeholder="0" />
                          </SelectTrigger>
                          <SelectContent className="bg-white ">
                            <SelectItem value="light">5A</SelectItem>
                            <SelectItem value="dark">5A</SelectItem>
                            <SelectItem value="system">5A</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-[20%]">
                        <div className="p-2 border border-slate-200 rounded-[3px] text-gray-500 text-center">
                          %
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-20 px-2">
                    <div className="space-y-2">
                      <div>Auto Initialization</div>
                      <div>
                        <RadioGroup defaultValue="option-one" className="flex">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-one"
                              id="option-one"
                            />
                            <Label htmlFor="option-one">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-two"
                              id="option-two"
                            />
                            <Label htmlFor="option-two">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div> Relays Count</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <div
                            onClick={decrement}
                            className="px-3 py-1.5 bg-gray-500 w-fit rounded-[3px] text-white text-[24px] text-center"
                          >
                            -
                          </div>
                          <div className="px-2 py-2 w-[80px] text-center border border-slate-200 rounded-[3px]">
                            {value}
                          </div>
                          <div
                            onClick={increment}
                            className="px-3 py-1.5 bg-gray-500 w-fit rounded-[3px] text-white text-[14px] text-center"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>Control Mode</div>
                      <div>
                        <RadioGroup defaultValue="option-one" className="flex">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-one"
                              id="option-one"
                            />
                            <Label htmlFor="option-one">Auto</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-two"
                              id="option-two"
                            />
                            <Label htmlFor="option-two">Manual</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 px-2">
                    <div className="space-y-2">
                      <div>Switching Program</div>
                      <div>
                        <RadioGroup defaultValue="option-one" className="flex">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-one"
                              id="option-one"
                            />
                            <Label htmlFor="option-one">Auto</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-two"
                              id="option-two"
                            />
                            <Label htmlFor="option-two">Linear</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              className="shadow-none"
                              value="option-three"
                              id="option-two"
                            />
                            <Label htmlFor="option-three">Rational</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div> Relays Count</div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <div
                            onClick={decrement}
                            className="px-3 py-1.5 bg-gray-500 w-fit rounded-[3px] text-white text-[24px] text-center"
                          >
                            -
                          </div>
                          <div className="px-2 py-2 w-[80px] text-center border border-slate-200 rounded-[3px]">
                            {value}
                          </div>
                          <div
                            onClick={increment}
                            className="px-3 py-1.5 bg-gray-500 w-fit rounded-[3px] text-white text-[14px] text-center"
                          >
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-2 rounded-lg">
          <div className="space-y-6">
            <div className="p-2">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Timing Settings</div>
              </div>
              <div className="flex items-center gap-40 px-2 pt-3">
                <div className="font-normal py-1.5 space-y-2">
                  <div>Step Time</div>
                  <div>
                    <div className="flex gap-10 w-[100px] px-1.5 py-1 border border-slate-200 items-center justify-between rounded-[3px]">
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
                  </div>
                </div>
                <div className="font-normal space-y-2">
                  <div>Discharge Time (Reconnection Time)</div>
                  <div>
                    <div className="flex gap-10 w-[100px] px-1.5 justify-between  py-1 border border-slate-200 items-center rounded-[3px]">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">
                  Control Sensitivity Settings
                </div>
              </div>
              <div className="flex gap-32 pt-3.5 px-2">
                <div className="space-y-1.5 w-[25%]">
                  <div>Control Sensitivity</div>
                  <div className="flex items-center w-auto gap-2">
                    <div className="w-[70%]">
                      <Select>
                        <SelectTrigger className=" focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                          <SelectValue className="" placeholder="0" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectItem value="light">5A</SelectItem>
                          <SelectItem value="dark">5A</SelectItem>
                          <SelectItem value="system">5A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-[20%]">
                      <div className="p-2 border border-slate-200 rounded-[3px] text-gray-500 text-center">
                        %
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-1.5 w-[25%]">
                  <div>Low Current</div>
                  <div className="flex items-center w-auto gap-2">
                    <div className="w-[70%]">
                      <Select>
                        <SelectTrigger className=" focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
                          <SelectValue className="" placeholder="0" />
                        </SelectTrigger>
                        <SelectContent className="bg-white ">
                          <SelectItem value="light">5A</SelectItem>
                          <SelectItem value="dark">5A</SelectItem>
                          <SelectItem value="system">5A</SelectItem>
                        </SelectContent>
                      </Select>
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
            <div className="px-2">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Communication Settings</div>
              </div>
              <div className="flex items-center w-full gap-3 pt-4">
                <div className="w-1/2 space-y-2">
                  <div>Slave ID</div>
                  <input
                    className="p-[9px] w-full  border border-slate-200 outline-none rounded-[3px]"
                    type="text"
                  />
                </div>
                <div className="w-1/2 space-y-2">
                  <div>Baud Rate</div>
                  <div>
                    <Select>
                      <SelectTrigger className="w-full focus:ring-0 shadow-none borde border-slate-200 rounded-[3px] p-2">
                        <SelectValue className="" placeholder="3P4W" />
                      </SelectTrigger>
                      <SelectContent className="bg-white ">
                        <SelectItem value="light">5A</SelectItem>
                        <SelectItem value="dark">5A</SelectItem>
                        <SelectItem value="system">5A</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-28 pt-3">
                <div className="space-y-2">
                  <div>Parity</div>
                  <div>
                    <RadioGroup defaultValue="option-one" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="shadow-none"
                          value="option-one"
                          id="option-one"
                        />
                        <Label htmlFor="option-one">None</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="shadow-none"
                          value="option-two"
                          id="option-two"
                        />
                        <Label htmlFor="option-two">Odd</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="shadow-none"
                          value="option-three"
                          id="option-two"
                        />
                        <Label htmlFor="option-three">Even</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>Stop Bits</div>
                  <div>
                    <RadioGroup defaultValue="option-one" className="flex">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="shadow-none"
                          value="option-one"
                          id="option-one"
                        />
                        <Label htmlFor="option-one">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          className="shadow-none"
                          value="option-two"
                          id="option-two"
                        />
                        <Label htmlFor="option-two">No</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className=" border-b border-gray-200 pb-2 px-3">
                <div className="font-semibold">Communication Settings</div>
              </div>
              <div>
                <div className="space-y-2 pt-4">
                  <div>Back Light</div>
                  <div className="flex gap-10 w-[100px] px-1.5 justify-between  py-1 border border-slate-200 items-center rounded-[3px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Level1Edit };
