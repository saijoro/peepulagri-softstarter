import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { createFileRoute } from "@tanstack/react-router";
const pondData = {
  pondId: "Pond-01",
  location: "Devarapalli",
  totalMotors: 5,
  motors: [
    {
      motorName: "Motor_001",
      horsePower: "5HP",
      deviceName: "Dev-001",
      managementStatus: "Scheduled",
    },
    {
      motorName: "Motor_002",
      horsePower: "7HP",
      deviceName: "Dev-002",
      managementStatus: "Manual",
    },
    {
      motorName: "Motor_003",
      horsePower: "3HP",
      deviceName: "Dev-003",
      managementStatus: "Auto",
    },
  ],
};


function Ponds  (){
  return (
    <div>
      {" "}
      <div className="space-y-2">
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="bg-gray-100 rounded-lg border border-gray-200 overflow-hidden"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base p-2 hover:bg-gray-200">
              <div className="flex items-center gap-8">
                <div className="font-medium">{pondData.pondId}</div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/pondlocation.svg" alt="Location icon" />
                  <div>{pondData.location}</div>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <img src="/assets/motor.svg" alt="Motor icon" />
                  <div>{pondData.totalMotors}</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="bg-zinc-50 pt-3">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="text-xs font-thin text-gray-500">
                      <th className="p-2 text-left font-medium">Motors</th>
                      <th className="p-2 text-left font-medium">
                        Connected Devices
                      </th>
                      <th className="p-2 text-left font-medium">
                        Motor Management
                      </th>
                      <th className="p-2 text-left font-medium">Actions</th>
                    </tr>
                  </thead>
                  {pondData.motors.map((motor, index) => (
                    <tbody key={index} className="mt-5">
                      <tr className="hover:bg-green-50 border-b border-gray-200">
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/motor.svg" alt="Motor icon" />
                            <div>
                              <div>{motor.motorName}</div>
                              <div className="flex items-center justify-start gap-1">
                                <span>
                                  <img
                                    className="p-0.5 rounded-full bg-green-100"
                                    src="/assets/ellipse.svg"
                                    alt="Status indicator"
                                  />
                                </span>
                                {motor.horsePower}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="flex gap-2 items-center">
                            <img src="/assets/chip.svg" alt="Device icon" />
                            <div>{motor.deviceName}</div>
                          </div>
                        </td>
                        <td
                          className={`p-2 ${
                            motor.managementStatus === "Scheduled"
                              ? "text-orange-400"
                              : motor.managementStatus === "Manual"
                                ? "text-blue-400"
                                : "text-green-400"
                          }`}
                        >
                          {motor.managementStatus}
                        </td>
                        <td className="p-2">
                          <img src="/assets/eye.svg" alt="View icon" />
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
