import { DeviceGraphs } from "@/components/DeviceGraphs";
import { SearchSvg } from "@/components/svg/SearchSvg";
import {
  getSingleDeviceAPI,
  getSingleMotorAPI,
} from "@/lib/services/deviceses";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";

interface DeviceSearchParams {
  search?: string;
}

interface Motor {
  id: number;
  title: string;
  hp: number | null;
  state: number;
}

interface Device {
  id: number;
  title: string;
  serial_no: string;
  motors: Motor[];
}

const MotorDetails = () => {
  const { device_id, motor_id } = useParams({ strict: false });
  const navigate = useNavigate();
  const searchParams = useSearch({
    from: `/_layout/_devices/devices/$device_id/motors/$motor_id/`,
  }) as DeviceSearchParams;

  const initialSearch = searchParams.search ?? "";
  const [searchString, setSearchString] = useState(initialSearch);
  const [expandedDevice, setExpandedDevice] = useState<number | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (device_id && motor_id) {
        navigate({
          to: `/devices/${device_id}/motors/${motor_id}`,
          search: { search: searchString || undefined },
          replace: true,
        });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchString, device_id, motor_id, navigate]);

  const handleCardClick = (motorId: number) => {
    setExpandedDevice(
      expandedDevice === Number(device_id) ? null : Number(device_id)
    );
    navigate({
      to: `/devices/${device_id}/motors/${motorId}`,
      search: { search: searchString || undefined },
    });
  };

  const {
    data: singledata,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["single-device", device_id, searchString],
    queryFn: async () => {
      const response = await getSingleDeviceAPI(device_id);
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch device data");
      }

      const deviceData: Device[] = response?.data?.data || [];
      if (!searchString) return deviceData;

      const searchLower = searchString.toLowerCase();
      return deviceData.map((device) => ({
        ...device,
        motors: device.motors.filter((motor) => {
          // Get the display value for state
          const stateDisplay = motor.state !== 0 ? "on" : "off";

          // Create an array of searchable values
          const searchableValues = [
            String(motor.id),
            motor.title?.toLowerCase(),
            motor.hp !== null ? String(motor.hp) : "",
            String(motor.state), // numeric value
            stateDisplay, // text value (on/off)
          ];

          // Check if any value includes the search term
          return searchableValues.some(
            (value) => value && value.includes(searchLower)
          );
        }),
      }));
    },
    enabled: !!device_id,
    staleTime: 5 * 60 * 1000,
  });

  const { data: singlemotordata } = useQuery({
    queryKey: ["singleMotor", device_id, motor_id],
    queryFn: async () => {
      const response = await getSingleMotorAPI(device_id, motor_id);
      if (!response.success) {
        throw new Error(response.message || "Failed to fetch motor data");
      }
      return response?.data?.data;
    },
    enabled: !!device_id && !!motor_id,
    staleTime: 5 * 60 * 1000,
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full text-sm flex ">
      <div className="w-[45%] p-4 space-y-4">
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-1.5 border border-slate-200 rounded-md w-2/3 px-2">
            <SearchSvg />
            <input
              placeholder="Search motors"
              className="outline-none h-9 bg-transparent w-full"
              type="text"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
              aria-label="Search motors"
            />
          </div>
          <button
            type="submit"
            className="p-2 h-fit w-fit bg-[#45A845] text-white rounded-md cursor-pointer"
          >
            Search
          </button>
        </form>

        <div className="h-[81dvh] overflow-y-auto">
          {isLoading ? (
            <div className="text-center text-gray-500 py-4">
              Loading device data...
            </div>
          ) : isError ? (
            <div className="text-center text-red-500 py-4">
              Error loading device data: {error?.message || "Unknown error"}
            </div>
          ) : singledata?.length === 0 || !singledata?.[0]?.motors?.length ? (
            <div className="text-center text-gray-500 py-4">
              No motors found
            </div>
          ) : (
            singledata?.map((device: Device) => (
              <div key={device?.id}>
                <div className="text-[#05A155] mb-2">{device?.title}</div>
                <ul className="list-none space-y-2">
                  {device?.motors?.map((motor) => (
                    <li
                      key={motor.id}
                      className={`flex cursor-pointer items-center gap-2 border p-2 px-4 border-slate-200 justify-between hover:bg-[#E4F5E3] rounded-md ${
                        Number(motor_id) === motor?.id
                          ? "bg-[#E4F5E3]"
                          : "hover:bg-gray-50 bg-white"
                      }`}
                      onClick={() => handleCardClick(motor?.id)}
                    >
                      <span className="text-sm text-gray-600 w-1/3 truncate">
                         {motor.title || 'No motors'}
                      </span>
                      <span className="w-1/3 flex items-center justify-center">
                        <span
                          className={`px-2 py-0.5 rounded-full flex w-fit items-center text-center gap-1 ${
                            motor.state !== 0
                              ? "text-green-600 bg-green-100"
                              : "text-red-600 bg-red-100"
                          }`}
                        > 
                          <span
                            className={`h-[6px] w-[6px] rounded-full ${
                              motor.state !== 0 ? "bg-green-600" : "bg-red-600"
                            }`}
                          ></span>
                          <span>{motor.state !== 0 ? "On" : "Off"}</span>
                        </span>
                      </span>
                      <span className="w-1/3 flex items-center justify-end">
                        <img src="/assets/Eye.svg" alt="View" />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-[55%] h-[92dvh] overflow-scroll scrollbar-hidden px-4 bg-white">
        <DeviceGraphs singlemotordata={singlemotordata} />
      </div>
    </div>
  );
};

export default MotorDetails;
