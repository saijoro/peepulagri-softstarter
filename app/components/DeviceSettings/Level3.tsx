import { Switch } from "../ui/switch";

const Level3 = () => {
  return (
    <div>
      <div>
        <div className="p-2 rounded-lg border border-gray-200 space-y-2">
          <div className="border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Factory and Energy Settings</div>
          </div>
          <div className="grid grid-rows-3 grid-cols-5 gap-6 px-2">
          <div className="flex items-center gap-2 pt-3">
              <div>Over Temperature</div>
              <Switch className="h-4 w-8 data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-white data-[state=unchecked]:px-[1.5px] data-[state=unchecked]:border data-[state=unchecked]:border-red-500 " />
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
            <div>
              <div>RLY1</div>
              <div className="pt-1 text-sm">OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export {Level3}