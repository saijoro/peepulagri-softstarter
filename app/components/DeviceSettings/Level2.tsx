const Level2 = () => {
  return (
    <div className="space-y-2 pb-5">
      <div className="p-2 rounded-lg border border-gray-200 space-y-6">
        <div className="space-y-2">
          <div className="border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Voltage Settings</div>
          </div>
          <div className="space-y-1 px-2">
            <div className="flex items-center justify-between p-2">
              <div>
                <div>Trip Time </div>
                <div className="text-sm">OFF</div>
              </div>
              <div>
                <div>NO VOLT</div>
                <div className="text-sm">OFF</div>
              </div>
              <div>
                <div>Over Voltage</div>
                <div className="text-sm">ON</div>
              </div>
              <div>
                <div>Under Voltage</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
            <div className="px-2">
              <div>Set Over Voltage</div>
              <div className="text-sm">Min 200V Max460V</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Harmonic Distortion Settings</div>
          </div>
          <div className="px-2 pt-2">
            <table className="">
              <tr className="">
                <th className="font-normal py-1.5 ">
                  Total Harmonic Distribution
                </th>
                <th className="font-normal py-1.5 pl-6">THD I Range</th>
              </tr>
              <tr>
                <td className="text-sm">OFF</td>
                <td className="px-6 text-sm">50</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Compensation Settings</div>
          </div>
          <div className="px-2 pt-2">
            <table className="">
              <tr className="">
                <th className="font-normal py-1.5 ">Over Compensate</th>
                <th className="font-normal py-1.5 pl-10">Under Compensate</th>
              </tr>
              <tr>
                <td className="">ON</td>
                <td className="px-10">ON</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Error Handling</div>
          </div>
          <div className="px-2 pt-2">
            <div className="flex items-center justify-between p-2">
              <div>
                <div>Step Error</div>
                <div className="text-sm">OFF</div>
              </div>
              <div>
                <div>Step Error Setting</div>
                <div className="text-sm">0%</div>
              </div>
              <div>
                <div>CT Poliarity Error</div>
                <div className="text-sm">OFF</div>
              </div>
              <div>
                <div>Over Temperature</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
            <div className="px-2">
              <div>Over Temperature Setting </div>
              <div className="text-sm">65 c</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className=" border-b border-gray-200 pb-2 px-3">
            <div className="font-semibold">Fan and Hysteresis Settings</div>
          </div>
          <div className="px-2 pt-2">
            <div className="flex items-center justify-between p-2">
              <div>
                <div>Fan Settings</div>
                <div className="text-sm">OFF</div>
              </div>
              <div>
                <div>Hysteresis Voltage</div>
                <div className="text-sm">2%</div>
              </div>
              <div>
                <div>Hysteresis PF</div>
                <div className="text-sm">1%</div>
              </div>
              <div>
                <div>Over Temperature</div>
                <div className="text-sm">OFF</div>
              </div>
            </div>
            <div className="px-2">
              <div>Over Temperature Setting </div>
              <div className="text-sm">65 c</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Level2 };
