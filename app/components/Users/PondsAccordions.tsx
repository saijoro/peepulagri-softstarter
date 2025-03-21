import { Outlet, useParams, useRouter } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogsSvg } from "../svg/LogsSvg";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getUserBasedPondsAPI } from "@/lib/services/users";

const PondAccordion = () => {
  const { users_id } = useParams({ strict: false });
  const router = useRouter();
  const searchParams = new URLSearchParams(location.search);
  const [debounceSearchString, setDebounceSearchString] = useState<string>(
    searchParams.get("location_id") || ""
  );

  const {
    isFetching,
    data: pondsData = [],
    refetch,
  } = useQuery({
    queryKey: ["ponds", debounceSearchString],
    queryFn: async () => {
      let queryParams: any = {
        ...(debounceSearchString && { location_id: debounceSearchString }),
      };

      const response = await getUserBasedPondsAPI(queryParams, users_id);
      if (response.status === 200 || response.status === 201) {
        return response?.data?.data || [];
      } else {
        throw new Error("Failed to fetch ponds data");
      }
    },
    enabled: true,
    refetchOnWindowFocus: false,
  });
  console.log("pondsData", pondsData);
  
  return (
    <div className="">

      <div className="p-4 w-full flex">
        {isFetching ? "Loading..." :
          <div className="space-y-2 w-full">
            {pondsData?.records?.map((pond) => (
              <Accordion
                key={pond.id}
                type="single"
                collapsible
                className="bg-white rounded-lg border border-gray-200 overflow-hidden w-full [&[data-state=open]>svg]:rotate-180"
              >
                <AccordionItem value={pond?.id.toString()}>
                  <AccordionTrigger className="text-base p-2 hover:bg-gray-50 w-full">
                    <div className="flex items-center gap-8">
                      <div className="font-medium text-gray-600 text-sm">
                        {pond?.title}
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <img src="/assets/pondlocation.svg" alt="Location icon" />
                        <div className="text-[#505F79]">
                          {pond?.location?.title}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <img src="/assets/motor.svg" alt="Motor icon" />
                        <div className="bg-[#1d2943]/20 px-2 text-[12px] rounded-sm">
                          {pond?.motorCount}
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
                                  <div>{pond?.title} Logs</div>
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
                    {pond?.motorCount === 0 ? (
                      <div className="p-4 text-center text-gray-500">
                        No motors available for this pond
                      </div>
                    ) : (
                      <div className="pt-3">
                        <table className="w-full text-xs">
                          <thead className="bg-gray-100">
                            <tr className="text-xs font-thin text-gray-500">
                              <th className="p-2 text-left font-medium">Motors</th>
                              <th className="p-2 text-left font-medium">Connected Devices</th>
                              <th className="p-2 text-left font-medium">State</th>
                              <th className="p-2 text-left font-medium">Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {pond?.motors?.map((motor) => (
                              <tr
                                key={motor?.id}
                                className="hover:bg-green-50 border-b border-gray-200"
                              >
                                <td className="p-2">
                                  <div className="flex gap-2 items-center">
                                    <img
                                      src="/assets/motor.svg"
                                      alt="Motor icon"
                                    />
                                    <div>
                                      <div>{motor?.title}</div>
                                      <div className="flex items-center justify-start gap-1">
                                        <span>
                                          <img
                                            className="p-0.5 rounded-full bg-green-100"
                                            src="/assets/ellipse.svg"
                                            alt="Status indicator"
                                          />
                                        </span>
                                        {motor?.motor_ref_id || "N/A"}
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
                                    <div>{motor?.starterBox?.title}</div>
                                  </div>
                                </td>
                                <td className={`p-2 ${motor?.state === 0 ? "text-red-400" : "text-green-400"}`}>
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
          </div>}
      </div>
    </div>
  );
};

export default PondAccordion;