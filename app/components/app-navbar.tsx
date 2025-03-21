import { Outlet, useLocation, useRouter } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AppSideBar = () => {
  const router = useRouter();
  const { pathname } = useLocation();

  const dashboardPath = "/dashboard";
  const usersPath = `/users/${1}/ponds`;
  const devicesPath = "/devices/1/motors/1";

  const [activeButton, setActiveButton] = useState(dashboardPath);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = router.state.location.pathname;
    if ([dashboardPath, usersPath, devicesPath].includes(currentPath)) {
      setActiveButton(currentPath);
    } else {
      setActiveButton(dashboardPath);
    }
  }, [router.state.location.pathname]);

  const handleButtonClick = (path) => {
    setActiveButton(path);
    router.navigate({ to: path });
    setIsSidebarOpen(false); // Close sidebar on navigation
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

  const handleNavigation = (path) => {
    if (path === "/logout") {
      router.navigate({ to: "/" });
      Cookies.remove("token");
      localStorage.removeItem("authToken");
    } else {
      router.navigate({ to: path });
    }
    setIsProfileMenuOpen(false); // Close profile menu on navigation
  };

  const isDeviceLocation = pathname.includes("devices");

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`bg-white fixed text-black text-xs transition-all duration-300 w-[15%] h-[100dvh] z-[1099] ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          className="absolute top-3 right-3 p-2 cursor-pointer"
          onClick={toggleSidebar}
        >
          <img src="/assets/close.svg" alt="Close sidebar" />
        </div>
        <div className="flex flex-col justify-between h-full px-4 py-4">
          <div className="space-y-10">
            <div className="w-fit h-fit">
              <img
                className="h-14 w-14"
                src="/assets/dashboard.svg"
                alt="Dashboard Logo"
              />
            </div>
            <div className="flex flex-col items-center w-full gap-5">
              {/* Dashboard Button */}
              <button
                onClick={() => handleButtonClick(dashboardPath)}
                className="w-full flex justify-center border-2 border-gray-200 rounded-xl"
              // className="hidden"
              >
                <div
                  className={`flex items-center w-full gap-3 p-2 rounded-lg transition-colors ${activeButton === dashboardPath
                    ? "bg-[#45A845] text-white"
                    : "text-black hover:bg-gray-100"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 25 25"
                    fill="none"
                  >
                    <path
                      d="M11.7727 7.02868V9.93777C11.7727 10.5164 11.5429 11.0714 11.1337 11.4806C10.7245 11.8897 10.1696 12.1196 9.59091 12.1196H6.68182C6.10316 12.1196 5.54821 11.8897 5.13904 11.4806C4.72987 11.0714 4.5 10.5164 4.5 9.93777V7.02868C4.5 6.45003 4.72987 5.89507 5.13904 5.4859C5.54821 5.07673 6.10316 4.84686 6.68182 4.84686H9.59091C10.1696 4.84686 10.7245 5.07673 11.1337 5.4859C11.5429 5.89507 11.7727 6.45003 11.7727 7.02868ZM18.3182 4.84686H15.4091C14.8304 4.84686 14.2755 5.07673 13.8663 5.4859C13.4571 5.89507 13.2273 6.45003 13.2273 7.02868V9.93777C13.2273 10.5164 13.4571 11.0714 13.8663 11.4806C14.2755 11.8897 14.8304 12.1196 15.4091 12.1196H18.3182C18.8968 12.1196 19.4518 11.8897 19.861 11.4806C20.2701 11.0714 20.5 10.5164 20.5 9.93777V7.02868C20.5 6.45003 20.2701 5.89507 19.861 5.4859C19.4518 5.07673 18.8968 4.84686 18.3182 4.84686ZM9.59091 13.5741H6.68182C6.10316 13.5741 5.54821 13.804 5.13904 14.2132C4.72987 14.6223 4.5 15.1773 4.5 15.756V18.665C4.5 19.2437 4.72987 19.7987 5.13904 20.2078C5.54821 20.617 6.10316 20.8469 6.68182 20.8469H9.59091C10.1696 20.8469 10.7245 20.617 11.1337 20.2078C11.5429 19.7987 11.7727 19.2437 11.7727 18.665V15.756C11.7727 15.1773 11.5429 14.6223 11.1337 14.2132C10.7245 13.804 10.1696 13.5741 9.59091 13.5741ZM18.3182 13.5741H15.4091C14.8304 13.5741 14.2755 13.804 13.8663 14.2132C13.4571 14.6223 13.2273 15.1773 13.2273 15.756V18.665C13.2273 19.2437 13.4571 19.7987 13.8663 20.2078C14.2755 20.617 14.8304 20.8469 15.4091 20.8469H18.3182C18.8968 20.8469 19.4518 20.617 19.861 20.2078C20.2701 19.7987 20.5 19.2437 20.5 18.665V15.756C20.5 15.1773 20.2701 14.6223 19.861 14.2132C19.4518 13.804 18.8968 13.5741 18.3182 13.5741Z"
                      fill="currentcolor"
                    />
                  </svg>
                  <div>Dashboard</div>
                </div>
              </button>

              {/* Users Button */}
              <button
                onClick={() => handleButtonClick(usersPath)}
                className="w-full flex justify-center border-2 border-gray-200 rounded-xl"

              >
                <div
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors w-full ${activeButton === usersPath
                    ? ""
                    : ""
                    }  `}
                // onClick={togglemenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      d="M16.9582 6.09054C16.958 6.74903 16.7466 7.39009 16.3551 7.91957C15.9636 8.44904 15.4127 8.83902 14.7832 9.03222C14.9273 8.5624 15.0003 8.07366 14.9998 7.58222C14.9999 6.71658 14.7748 5.86581 14.3468 5.11342C13.9187 4.36103 13.3023 3.73289 12.5582 3.29066C12.9707 3.09914 13.42 2.99959 13.8748 2.9989C14.6936 3.00033 15.4783 3.32678 16.0564 3.9065C16.6346 4.48623 16.9589 5.27179 16.9582 6.09054ZM16.3332 9.91562C15.9831 9.81754 15.6084 9.8625 15.2915 10.0406C14.9352 10.2382 14.5397 10.3548 14.1332 10.3822C13.9649 10.6387 13.7693 10.8762 13.5498 11.0906C14.3371 11.3497 15.038 11.8202 15.5759 12.4507C16.1138 13.0812 16.468 13.8474 16.5998 14.6657H17.1748C17.3595 14.6682 17.5415 14.6208 17.7014 14.5284C17.8613 14.436 17.9932 14.302 18.0832 14.1407C18.2486 13.8304 18.3345 13.4839 18.3332 13.1322V12.5405C18.3332 11.2989 17.5082 10.2238 16.3332 9.91562ZM7.44152 3.29066C7.02895 3.09914 6.57969 2.99959 6.12484 2.9989C5.38651 2.99941 4.67285 3.26467 4.11343 3.74652C3.55401 4.22837 3.18592 4.89485 3.07601 5.62495C2.9661 6.35505 3.12164 7.10036 3.51441 7.72555C3.90717 8.35074 4.51111 8.81436 5.21656 9.03222C5.07239 8.56241 4.99934 8.07366 4.99984 7.58222C4.9998 6.71658 5.22486 5.86581 5.65293 5.11342C6.081 4.36103 6.69736 3.73289 7.44152 3.29066ZM6.44984 11.0905C6.23038 10.8761 6.03479 10.6386 5.86648 10.3821C5.45998 10.3547 5.06451 10.2381 4.7082 10.0405C4.39128 9.86242 4.01659 9.81746 3.66652 9.91554C2.49148 10.2237 1.66652 11.2988 1.66652 12.5405V13.1321C1.66518 13.4838 1.75108 13.8303 1.91652 14.1407C2.00553 14.301 2.13609 14.4343 2.29448 14.5267C2.45286 14.6191 2.63321 14.667 2.81656 14.6656H3.39984C3.53166 13.8473 3.88588 13.0811 4.42379 12.4506C4.9617 11.8201 5.66258 11.3496 6.44984 11.0905ZM12.9832 12.2239C12.8387 12.1876 12.6905 12.168 12.5415 12.1656C12.2525 12.1662 11.9685 12.2408 11.7165 12.3823C11.1907 12.672 10.6002 12.8239 9.99984 12.8239C9.39951 12.8239 8.80894 12.672 8.28316 12.3823C8.03118 12.2408 7.74718 12.1662 7.4582 12.1656C7.30921 12.168 7.161 12.1876 7.01648 12.2239C6.31614 12.4138 5.69805 12.8296 5.25808 13.4066C4.81812 13.9836 4.58087 14.6897 4.58316 15.4153V16.1404C4.58343 16.5653 4.6894 16.9834 4.89152 17.3571C5.09984 17.757 5.51652 17.9987 5.98316 17.9987H14.0165C14.4832 17.9987 14.8998 17.757 15.1082 17.3571C15.3103 16.9834 15.4162 16.5653 15.4165 16.1404V15.4155C15.4188 14.6899 15.1816 13.9837 14.7416 13.4067C14.3017 12.8296 13.6836 12.4139 12.9832 12.2239ZM13.7498 7.58222C13.7498 6.84054 13.5299 6.11552 13.1179 5.49883C12.7058 4.88215 12.1201 4.4015 11.4349 4.11767C10.7497 3.83384 9.99568 3.75958 9.26825 3.90428C8.54082 4.04897 7.87264 4.40612 7.34819 4.93057C6.82374 5.45502 6.46659 6.1232 6.3219 6.85063C6.1772 7.57806 6.25146 8.33206 6.53529 9.01728C6.81912 9.70251 7.29977 10.2882 7.91645 10.7002C8.53314 11.1123 9.25816 11.3322 9.99984 11.3322C10.9944 11.3322 11.9482 10.9371 12.6515 10.2339C13.3548 9.53061 13.7498 8.57678 13.7498 7.58222Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>Users</div>
                </div>
              </button>

              {/* Devices Button */}
              <button
                onClick={() => handleButtonClick(devicesPath)}
                className="w-full flex justify-center border-2 border-gray-200 rounded-xl"
              >
                <div
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors w-full ${isDeviceLocation
                    ? "bg-[#45A845] text-white"
                    : "text-black hover:bg-gray-100"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M1.54031 9.6016C1.33191 9.37121 1.34977 9.01548 1.58016 8.80712L7.01925 3.88745C7.23309 3.69404 7.55855 3.69362 7.77277 3.88642L10.8613 6.66489L14.8633 2.66293H14.7128C14.4022 2.66293 14.1503 2.41107 14.1503 2.10043C14.1503 1.78979 14.4022 1.53793 14.7128 1.53793H16.2213C16.532 1.53793 16.7838 1.78979 16.7838 2.10043V3.60756C16.7838 3.9182 16.532 4.17006 16.2213 4.17006C15.9107 4.17006 15.6588 3.9182 15.6588 3.60756V3.45845L11.2795 7.8377C11.068 8.0492 10.728 8.05825 10.5056 7.85814L7.39758 5.06214L2.3348 9.6414C2.22717 9.73876 2.09217 9.78676 1.95764 9.78676C1.80422 9.78676 1.65136 9.72432 1.54031 9.6016ZM21.8635 18.1956H17.4445V13.7752C17.4445 13.6199 17.3185 13.494 17.1632 13.494C14.4157 13.494 12.1803 15.7293 12.1803 18.4769C12.1803 21.2244 14.4157 23.4598 17.1632 23.4598C19.9108 23.4598 22.1448 21.2244 22.1448 18.4769C22.1448 18.3216 22.0188 18.1956 21.8635 18.1956ZM18.6435 12.0137C18.4882 12.0137 18.3622 12.1397 18.3622 12.295V16.9967C18.3622 17.1519 18.4882 17.2779 18.6435 17.2779H23.3438C23.499 17.2779 23.625 17.1519 23.625 16.9967C23.625 14.2491 21.3903 12.0137 18.6435 12.0137ZM13.8691 7.15061C13.7138 7.15061 13.5878 7.27656 13.5878 7.43186V13.5279C14.4254 12.9212 15.4221 12.5215 16.5026 12.4048V7.43186C16.5026 7.27656 16.3766 7.15061 16.2213 7.15061H13.8691ZM12.5316 14.4996V10.7757C12.5316 10.6204 12.4056 10.4945 12.2503 10.4945H9.89812C9.74283 10.4945 9.61687 10.6204 9.61687 10.7757V17.9143H8.56059V9.03718C8.56059 8.88184 8.43464 8.75593 8.27934 8.75593H5.92711C5.77181 8.75593 5.64586 8.88184 5.64586 9.03718V17.9143H4.58958V12.5735C4.58958 12.4182 4.46362 12.2922 4.30833 12.2922H1.9575C1.8022 12.2922 1.67625 12.4182 1.67625 12.5735V17.9143H0.9375C0.626859 17.9143 0.375 18.1662 0.375 18.4768C0.375 18.7875 0.626859 19.0393 0.9375 19.0393H11.0814C11.0645 18.854 11.0553 18.6665 11.0553 18.4768C11.0553 16.9591 11.6119 15.569 12.5315 14.4996H12.5316Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div>Devices</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="px-10 bg-[#F7FFFB] border-b border-gray-200 sticky top-0 py-2 z-10">
          <div className="flex items-center justify-between">
            <div className="cursor-pointer" onClick={toggleSidebar}>
              <div className="flex items-center gap-2">
                <img src="/assets/menu.svg" alt="Menu icon" />
                <div>Menu</div>
              </div>
            </div>
            <div className="relative">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <button onClick={toggleProfileMenu} className="absolute inset-0 w-full h-full opacity-0" />
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border py-2 z-20">
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation("/profile")}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation("/settings")}
                  >
                    Settings
                  </button>
                  <hr />
                  <button
                    className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
                    onClick={() => handleNavigation("/logout")}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Outlet */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export { AppSideBar };
