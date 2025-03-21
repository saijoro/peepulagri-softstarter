import { FanSvg } from "@/components/svg/FanSvg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FanSettingsEdit = () => {
  return (
    <div className="p-2  space-y-4">
      <div className=" pb-5 flex">
        <div className=" px-2 flex items-center">
          <FanSvg />
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[170px] h-7 focus:ring-0 shadow-none borde border-slate-200 rounded-[3px]">
              <SelectValue className="" placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="light">5A</SelectItem>
              <SelectItem value="dark">5A</SelectItem>
              <SelectItem value="system">5A</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
export { FanSettingsEdit };
