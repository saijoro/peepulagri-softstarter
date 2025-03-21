import { Outlet, useNavigate, useParams, useLocation } from "@tanstack/react-router";
import PondBasedMotors from "./PondBasedMotors";
import { Apfc } from "../ui/Apfc";
import SearchFilter from "./SearchFilter";
import PondAccordion from "./PondsAccordions";
import { ApfcAccordion } from "./ApfcAccordion";
import { useState } from "react";

const Pondsnav = () => {
  const navigate = useNavigate();
  const { users_id } = useParams({ strict: false });
  const { pathname } = useLocation();
  const isPondsActive = pathname.includes("ponds");
  const isDevicesActive = pathname.includes("Apfc");
  const isStarterBoxActive = pathname.includes('StarterBox');
  const searchParams = new URLSearchParams(location.search); 
      const [searchString, setSearchString] = useState<any>(
          searchParams.get("search_string") || ""
      );
  return (
    <div className="w-full flex">
        <div className="flex items-center bg-gray-100 pl-6 pr-3 py-2.5 w-full relative">
          <div className="flex items-center gap-3 h-full w-full md:w-1/3">
            <div
              onClick={() => navigate({ to: `/users/${users_id}/ponds` })}
              className={` cursor-pointer h-full relative px-2 ${isPondsActive ? "text-green-600" : ""
                }`}
            >
              Ponds
              {isPondsActive && (
                <span className="absolute bottom-[-120%] left-0 w-full h-[2.5px] bg-green-600"></span>
              )}
            </div>
            <div
              onClick={() => navigate({ to: `/users/${users_id}/Apfc` })}
              className={` cursor-pointer h-full relative px-2 ${isDevicesActive ? "text-green-600" : isStarterBoxActive ? "text-green-600" : ''
                }`}
            >
              Devices
              {isDevicesActive && (
                <span className="absolute bottom-[-120%] left-0 w-full h-[2.5px] bg-green-600"></span>
              )}
              {isStarterBoxActive && (
                <span className="absolute bottom-[-120%] left-0 w-full h-[2.5px] bg-green-600"></span>
              )}

            </div>
          </div>
          <div className="flex items-center justify-end gap-4 w-full">
            <div className="relative w-full md:w-[35%] h-[35px]">
              <select
                name="location"
                aria-label="Selected location"
                className="w-full h-full text-gray-500 text-xs px-4 bg-white rounded border border-[#d2dff4] outline-none appearance-none"
              >
                <option value="" disabled selected>
                  Select Location
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              >
                <path
                  d="M16.6923 8.44217L10.4423 14.6922C10.3842 14.7503 10.3153 14.7964 10.2394 14.8278C10.1636 14.8593 10.0822 14.8755 10.0001 14.8755C9.91797 14.8755 9.83664 14.8593 9.76077 14.8278C9.68489 14.7964 9.61596 14.7503 9.55792 14.6922L3.30792 8.44217C3.19064 8.32489 3.12476 8.16583 3.12476 7.99998C3.12476 7.83413 3.19064 7.67507 3.30792 7.55779C3.42519 7.44052 3.58425 7.37463 3.7501 7.37463C3.91596 7.37463 4.07502 7.44052 4.19229 7.55779L10.0001 13.3664L15.8079 7.55779C15.866 7.49972 15.9349 7.45366 16.0108 7.42224C16.0867 7.39081 16.168 7.37463 16.2501 7.37463C16.3322 7.37463 16.4135 7.39081 16.4894 7.42224C16.5653 7.45366 16.6342 7.49972 16.6923 7.55779C16.7504 7.61586 16.7964 7.6848 16.8278 7.76067C16.8593 7.83654 16.8755 7.91786 16.8755 7.99998C16.8755 8.0821 16.8593 8.16342 16.8278 8.23929C16.7964 8.31516 16.7504 8.3841 16.6923 8.44217Z"
                  fill="#6A7185"
                />
              </svg>
            </div>
            <SearchFilter
              searchString={searchString}
              setSearchString={setSearchString}
              title=""
            />
          </div>
        </div>
          
    </div>
  );
};

export { Pondsnav };
