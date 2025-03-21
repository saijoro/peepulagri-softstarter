import { FanSvg } from "../svg/FanSvg";
import { Temparature } from "../svg/Temparature";

const FanSettings = () => {
  return (
    <div className="p-2 rounded-lg border border-gray-200 space-y-4">
      <div className="border-b border-gray-200 pb-2 px-3">
        <div className="font-semibold">Fan Settings</div>
      </div>
      <div
        className=" pb-5
                  flex"
      >
        <div className=" px-2 flex items-center">
          <FanSvg />
          <div>
            <div
              className={` px-2 py-0.5 rounded-full flex items-center gap-1`}
            >
              <div className={`h-2 w-2 rounded-full bg-green-500`}></div>
              <div>ON</div>
            </div>
          </div>
        </div>
        <div className=" px-2 flex items-center">
          <Temparature />
          <div>
            <div className={` py-0.5 rounded-full flex items-center gap-1`}>
              <div>50°C</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FanSettings };
