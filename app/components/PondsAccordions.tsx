// src/components/PondAccordion.tsx
import { Outlet, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogsSvg } from "./svg/LogsSvg";
import { useQuery } from "@tanstack/react-query";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://dev-api-iotsoftstarter.up.railway.app/v1.0";

// Define interfaces based on API response
interface Location {
  id: number;
  title: string;
}

interface StarterBox {
  id: number;
  title: string;
}

interface Motor {
  id: number;
  title: string;
  state: number;
  starter_id: number;
  motor_ref_id: string | null;
  starterBox: StarterBox;
}

interface Pond {
  id: number;
  title: string;
  location: Location;
  motors: Motor[];
  motorCount: number;
}

interface PondApiResponse {
  status: number;
  success: boolean;
  message: string;
  data: {
    pagination: {
      total_records: number;
      total_pages: number;
      page_size: number;
      current_page: number;
      next_page: number | null;
      prev_page: number | null;
    };
    records: Pond[];
  };
}

const PondAccordion = () => {
  const { users_id } = useParams({ strict: false });

  const {
    data: pondsData,
    isError: pondsError,
    isLoading,
  } = useQuery({
    queryKey: ["Ponds", users_id],
    queryFn: async () => {
      if (!users_id) return null;
      const response = await fetch(`${API_BASE_URL}/users/${users_id}/ponds`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("authToken") || ""}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch ponds: ${response.status}`);
      }

      const data: PondApiResponse = await response.json();
      console.log("Ponds API Response:", data);
      return data;
    },
    enabled: !!users_id,
  });

  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500">Loading ponds...</div>
    );
  }

  if (pondsError) {
    return (
      <div className="p-4 text-center text-red-500">
        Error loading ponds data
      </div>
    );
  }

  if (!pondsData?.data?.records || pondsData.data.records.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No ponds found for user ID: {users_id}

      </div>
    );
  }

  return (
    <div className="">
      <div className="p-4 w-full flex">
        <div className="space-y-2 w-full">
            {JSON.stringify(pondsData?.data)}

          {pondsData.data.records.map((pond) => (
            <Accordion
              key={pond.id}
              type="single"
              collapsible
              className="bg-white rounded-lg border border-gray-200 overflow-hidden w-full [&[data-state=open]>svg]:rotate-180"
            >
              <AccordionItem value={pond.id.toString()}>
                <AccordionTrigger className="text-base p-2 hover:bg-gray-50 w-full">
                  <div className="flex items-center gap-8">
                    <div className="font-medium text-gray-600 text-sm">
                      {pond.title}
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <img src="/assets/pondlocation.svg" alt="Location icon" />
                      <div className="text-[#505F79]">
                        {pond.location.title}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <img src="/assets/motor.svg" alt="Motor icon" />
                      <div className="bg-[#1d2943]/20 px-2 text-[12px] rounded-sm">
                        {pond.motorCount}
                      </div>
                    </div>
                    <div>
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button
                            variant="outline"
                            className="h-fit w-fit py-0 text-[12px] px-2 border-none bg-[#e8e8e8] shadow-none"
                          >
                            Logs
                          </Button>
                        </SheetTrigger>
                        <SheetContent>
                          <div>
                            <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                <div>
                                  <LogsSvg />
                                </div>
                                <div>{pond.title} Logs</div>
                              </div>
                              Add actual logs data here when available
                              <div className="text-sm text-black space-y-2">
                                <div className="text-xs text-gray-400">
                                  Logs not implemented yet
                                </div>
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  {pond.motorCount === 0 ? (
                    <div className="p-4 text-center text-gray-500">
                      No motors available for this pond
                    </div>
                  ) : (
                    <div className="pt-3">
                      <table className="w-full text-xs">
                        <thead className="bg-gray-100">
                          <tr className="text-xs font-thin text-gray-500">
                            <th className="p-2 text-left font-medium">
                              Motors
                            </th>
                            <th className="p-2 text-left font-medium">
                              Connected Devices
                            </th>
                            <th className="p-2 text-left font-medium">State</th>
                            <th className="p-2 text-left font-medium">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {pond.motors.map((motor) => (
                            <tr
                              key={motor.id}
                              className="hover:bg-green-50 border-b border-gray-200"
                            >
                              <td className="p-2">
                                <div className="flex gap-2 items-center">
                                  <img
                                    src="/assets/motor.svg"
                                    alt="Motor icon"
                                  />
                                  <div>
                                    <div>{motor.title}</div>
                                    <div className="flex items-center justify-start gap-1">
                                      <span>
                                        <img
                                          className="p-0.5 rounded-full bg-green-100"
                                          src="/assets/ellipse.svg"
                                          alt="Status indicator"
                                        />
                                      </span>
                                      {motor.motor_ref_id || "N/A"}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="p-2">
                                <div className="flex gap-2 items-center">
                                  <img
                                    src="/assets/chip.svg"
                                    alt="Device icon"
                                  />
                                  <div>{motor.starterBox.title}</div>
                                </div>
                              </td>
                              <td
                                className={`p-2 ${
                                  motor.state === 0
                                    ? "text-red-400"
                                    : "text-green-400"
                                }`}
                              >
                                {motor.state === 0 ? "Off" : "On"}
                              </td>
                              <td className="p-2">
                                <img src="/assets/eye.svg" alt="View icon" />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { PondAccordion };
