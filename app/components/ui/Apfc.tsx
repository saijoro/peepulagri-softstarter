import { DeviceSvg } from "../svg/DeviceSvg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DeviceDetails } from "../DeviceDetails";
import { Level1Edit } from "../DeviceSettings/EditComponents/Level1Edit";
import { Level2Edit } from "../DeviceSettings/EditComponents/Level2Edit";
import { Level3Edit } from "../DeviceSettings/EditComponents/Level3Edit";
import { FanSettingsEdit } from "../DeviceSettings/EditComponents/FanSettingsEdit";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Level2 } from "../DeviceSettings/Level2";
import { Level1 } from "../DeviceSettings/Level1";

export const Apfc = () => {
  const [Level1Data, SetLevel1] = useState(false);
  const toggleLevel1 = () => SetLevel1(Level1Data ? false : true);
  const CancelButton = ` <Button> Cancel <Button/> `;
  return (
    <div className="">
      <Tabs defaultValue="DeviceDetails" className=" pt-2">
        <TabsList className="flex items-center gap-4 w-full justify-start">
          <TabsTrigger
            value="DeviceDetails"
            className=" data-[state=active]:bg-[#BFDFE3] rounded-full px-3 py-1"
          >
            <div className="flex items-center gap-1.5 text-teal-500 rounded-full">
              <div className="bg-white p-1 rounded-full">
                <DeviceSvg />
              </div>
              <div>Device Details</div>
            </div>
          </TabsTrigger>
          <TabsTrigger
            value="DeviceSettings"
            className=" data-[state=active]:bg-[#BFDFE3] rounded-full px-3 py-1"
          >
            <div className="flex items-center gap-1.5 text-teal-500 rounded-full">
              <div className="bg-white p-1 rounded-full">
                <DeviceSvg />
              </div>
              <div>Device Settings</div>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="DeviceDetails" className="w-full">
          <DeviceDetails />
        </TabsContent>
        <TabsContent value="DeviceSettings">
          <Tabs defaultValue="Level1">
            <div>
              <TabsList className="felx items-center gap-5">
                <TabsTrigger
                  value="Level1"
                  className="border-b-2 border-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2  data-[state=active]:border-orange-500 px-3 pb-0.5"
                >
                  <div>Level1</div>
                </TabsTrigger>
                <TabsTrigger
                  value="Level2"
                  className="border-b-2 border-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2  data-[state=active]:border-orange-500 px-3 pb-0.5"
                >
                  <div>Level2</div>
                </TabsTrigger>
                <TabsTrigger
                  value="Level3"
                  className="border-b-2 border-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2  data-[state=active]:border-orange-500 px-3 pb-0.5"
                >
                  <div>Level3</div>
                </TabsTrigger>
                <TabsTrigger
                  value="FanSettings"
                  className="border-b-2 border-white data-[state=active]:text-orange-600 data-[state=active]:border-b-2  data-[state=active]:border-orange-500 px-3 pb-0.5"
                >
                  <div>Fan Settings</div>
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="Level1">
              {Level1Data ? <Level1Edit /> : <Level1 />}
              <div className="p-2 flex items-center justify-end sticky bottom-0 bg-white  gap-4 w-[90dvw]  shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <Button className="h-fit w-fit p-0 shadow-none">{Level1Data ? "Cancel" : ""}</Button>
                <Button
                  onClick={toggleLevel1}
                  className={`px-5 h-6  text-white text-xs  ${Level1Data ? "bg-[#05A155]" : "bg-[#D94841]"}`}
                  variant="outline"
                >
                  {Level1Data ? "Save" : "Edit"}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="Level2">
              <Level2Edit />
              <div className="p-2 flex items-center justify-end sticky bottom-0 bg-white">
                <Button
                  className="px-5 h-6 bg-[#D94841] text-white "
                  variant="outline"
                >
                  Edit
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="Level3">
              <Level3Edit />
              <div className="p-2 flex items-center justify-end sticky bottom-0 bg-white">
                <Button
                  className="px-5 h-6 bg-[#D94841] text-white "
                  variant="outline"
                >
                  Edit
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="FanSettings">
              <FanSettingsEdit />
              <div className="p-2 flex items-center justify-end sticky bottom-0 bg-white">
                <Button
                  className="px-5 h-6 bg-[#D94841] text-white "
                  variant="outline"
                >
                  Edit
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
};
