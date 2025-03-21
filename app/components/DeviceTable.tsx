import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
} from "@tanstack/react-table";
import { SearchSvg } from "./svg/SearchSvg";
import { Outlet, useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAllPaginatedDeviceData } from "@/lib/services/deviceses";
import { useEffect, useState } from "react";
import { OpenEye } from "./svg/OpenEye";
import { Button } from "@/components/ui/button";

// Define the Device type
type Device = {
  [x: string]: any;
  id: string;
  name: string;
  connectedMotors: number;
  status: "active" | "inactive" | "error";
};

// Define the expected props for getAllPaginatedDeviceData
interface GetAllPaginatedUsersPropTypes {
  pageIndex: number;
  pageSize: number;
  search_string: string;
}

export function DeviceTable() {
  const location = useLocation();
  const navigate = useNavigate();
  const { device_id, motor_id } = useParams({ strict: false });
  
  // Parse URL search params for pagination and search
  const searchParams = new URLSearchParams(location.search);
  const initialSearch = searchParams.get("search_string") || "";
  const pageIndexParam = Number(searchParams.get("current_page")) || 1;
  const pageSizeParam = Number(searchParams.get("page_size")) || 15;

  const [deviceData, setDeviceData] = useState<any[]>([]);
  const [pagination, setPagination] = useState({
    pageIndex: pageIndexParam,
    pageSize: pageSizeParam,
  });
  const [searchString, setSearchString] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);

  // Fetch devices with pagination and debounced search
  const { isFetching } = useQuery({
    queryKey: ["devices", location.pathname, debouncedSearch, pagination],
    queryFn: async () => {
      const queryParams: GetAllPaginatedUsersPropTypes = {
        pageIndex: pagination.pageIndex,
        pageSize: pagination.pageSize,
        search_string: debouncedSearch, // Always a string, defaults to "" if empty
      };
      
      navigate({
        to: location.pathname,
        search: {
          search_string: debouncedSearch || undefined, // URL can handle undefined to remove param
          current_page: pagination.pageIndex,
          page_size: pagination.pageSize,
        },
        replace: true,
      });

      const response = await getAllPaginatedDeviceData(queryParams);
      
      setDeviceData(response?.data?.data?.records || []);
      setPagination(response?.data?.pagination || { pageIndex: pagination.pageIndex, pageSize: pagination.pageSize });
      return response;
    },
  });

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchString);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [searchString]);

  const columns: ColumnDef<Device>[] = [
    {
      accessorFn: (row: any) => row.serial_no,
      id: "id",
      cell: (info: any) => {
        const title = info.getValue();
        const isActive = title === device_id;
        return (
          <div className="w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap">
            <span
              className={`${isActive ? "text-[#45A845] font-semibold" : ""}`}
              title={title}
            >
              {title || "-"}
            </span>
          </div>
        );
      },
      header: () => <span>Device ID</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.title,
      id: "title",
      cell: (info: any) => {
        const title = info.getValue();
        return (
          <div className="w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap">
            <span title={title}>{title || "-"}</span>
          </div>
        );
      },
      header: () => <span>Device Name</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) =>
        row.motors?.map((motor: any) => motor.title).join(", ") || "-",
      id: "motors",
      cell: (info: any) => {
        const titles = info.getValue();
        return (
          <div className="w-full truncate text-left overflow-hidden text-ellipsis whitespace-nowrap">
            <span title={titles}>{titles}</span>
          </div>
        );
      },
      header: () => <span>Connected Motors</span>,
      footer: (props: any) => props.column.id,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      header: () => <span className="text-white">Actions</span>,
      cell: () => (
        <div className="w-full pl-2">
          <OpenEye />
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data: deviceData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleRowClick = (deviceId: Device) => {
    navigate({
      to: `/devices/${deviceId?.id}/motors/${deviceId?.motors[0]?.id}`,
      params: {
        device_id: deviceId?.id,
        motor_id: deviceId?.motors[0]?.id,
      },
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (device_id && motor_id) {
      navigate({
        to: `/devices/${device_id}/motors/${motor_id}`,
        params: { device_id, motor_id },
        search: {
          search_string: debouncedSearch || undefined, // URL can handle undefined
          current_page: pagination.pageIndex,
          page_size: pagination.pageSize,
        },
        replace: true,
      });
    }
  };

  return (
    <div className="w-full text-sm flex justify-between">
      <div className="w-[35%] p-4 space-y-4 bg-white">
        <div className="w-full">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center justify-between w-full"
          >
            <div className="flex items-center gap-1.5 border border-slate-200 rounded-md w-2/3 px-2">
              <SearchSvg />
              <input
                placeholder="Search devices..."
                className="outline-none h-9 bg-transparent w-full"
                type="search"
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="p-2 h-fit w-fit bg-[#45A845] text-white rounded-md cursor-pointer disabled:opacity-50"
              disabled={isFetching}
            >
              Search
            </Button>
          </form>
        </div>
        <div
          className="w-full overflow-y-auto scrollbar-hidden"
          style={{ height: "calc(100vh - 90px)" }}
        >
          <table className="w-full table-fixed">
            <thead className="bg-[#45A845] font-normal sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, index) => (
                    <th
                      key={header.id}
                      className={`text-left text-xs font-normal text-white p-3 truncate ${
                        index === 0
                          ? "w-[20%] rounded-tl-lg"
                          : index === 1
                            ? "w-[30%]"
                            : index === 2
                              ? "w-[30%]"
                              : "w-[20%] rounded-tr-lg"
                      }`}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.length === 0 ? (
                !isFetching && (
                  <tr>
                    <td colSpan={4} className="p-3 text-center text-gray-500">
                      No devices found
                    </td>
                  </tr>
                )
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    className={`transition-colors duration-200 border-b border-slate-200 cursor-pointer ${
                      device_id == row.original.id
                        ? "bg-[#E4F5E3]"
                        : "hover:bg-gray-50 "
                    }`}
                    onClick={() => handleRowClick(row.original)}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className={`p-3 overflow-hidden ${
                          index === 0
                            ? "w-[20%]"
                            : index === 1
                              ? "w-[30%]"
                              : index === 2
                                ? "w-[30%]"
                                : "w-[20%]"
                        }`}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-[65%] overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}