// src/components/Usertable.tsx
import { useEffect, useState, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { Pondsnav } from "./Users/pondsnav";
import { PondSvg } from "./svg/PondSvg";
import { Motors } from "./Users/PondBasedMotors";
import { Apfc } from "./ui/Apfc";

interface User {
  id: number;
  full_name: string;
  pond_count: number;
  gateways: { id: number; title: string } | null;
}

interface Pagination {
  total_records: number;
  total_pages: number;
  page_size: number;
  current_page: number;
  next_page: number | null;
  prev_page: number | null;
}

interface ApiResponse {
  status?: number;
  success?: boolean;
  message?: string;
  data?: {
    pagination: Pagination;
    data: User[];
  };
}

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "https://dev-api-iotsoftstarter.up.railway.app/v1.0";

// Debounce utility function
const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const fetchUsersAPI = async (): Promise<ApiResponse> => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) throw new Error("No authentication token found");

    const response = await fetch(`${API_BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(
        responseData.message || `HTTP error! status: ${response.status}`
      );
    }

    console.log("Fetch Users API Response:", responseData);
    return { ...responseData, status: response.status };
  } catch (error) {
    console.error("Fetch Users Error:", error);
    throw error;
  }
};

const Usertable = () => {
  const { users_id } = useParams({ strict: false });
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Debounced search handler
  const debounceSearch = useCallback(
    debounce((term: string) => {
      const filtered = users.filter((user) =>
        user.full_name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredUsers(filtered);
    }, 300),
    [users]
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    debounceSearch(e.target.value);
  };

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        const response = await fetchUsersAPI();
        if (response.status === 200 && response.data?.data) {
          setUsers(response.data.data);
          setFilteredUsers(response.data.data);
        } else {
          throw new Error(response.message || "Failed to fetch users");
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleAddUser = () => {
    navigate({ to: "/" });
  };

  return (
    <div className="text-xs h-[92.7dvh] bg-gray-100 text-black">
      <div className="flex justify-start w-full h-full">
        <div className="w-[28%] overflow-y-auto scrollbar-hidden bg-white">
          <div className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="w-full">
              <div className="w-full h-[39px] px-4 py-[9px] bg-white rounded border border-[#d2dff4] flex items-center justify-start gap-2.5">
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4097 15.3822C11.7399 16.6799 9.63851 17.2922 7.53338 17.0942C5.42824 16.8963 3.47766 15.903 2.07881 14.3166C0.679961 12.7303 -0.0619809 10.6701 0.00405863 8.55565C0.0700982 6.44118 0.939153 4.4314 2.43427 2.93552C3.92939 1.43963 5.93814 0.570134 8.05152 0.504061C10.1649 0.437987 12.224 1.18031 13.8096 2.57987C15.3951 3.97944 16.3879 5.93102 16.5857 8.03723C16.7836 10.1434 16.1717 12.2459 14.8745 13.9166L19.6936 18.7201C20.1016 19.1267 20.1022 19.7872 19.695 20.1946C19.2878 20.6021 18.6273 20.6017 18.2204 20.1939L13.4201 15.3822H13.4097ZM8.31916 15.0495C9.13773 15.0495 9.94829 14.8882 10.7045 14.5748C11.4608 14.2614 12.148 13.802 12.7268 13.2229C13.3056 12.6438 13.7647 11.9563 14.078 11.1996C14.3913 10.443 14.5525 9.63201 14.5525 8.81302C14.5525 7.99403 14.3913 7.18306 14.078 6.42641C13.7647 5.66976 13.3056 4.98225 12.7268 4.40314C12.148 3.82402 11.4608 3.36465 10.7045 3.05123C9.94829 2.73782 9.13773 2.57651 8.31916 2.57651C6.66598 2.57651 5.08051 3.23356 3.91153 4.40314C2.74256 5.57271 2.08583 7.159 2.08583 8.81302C2.08583 10.467 2.74256 12.0533 3.91153 13.2229C5.08051 14.3925 6.66598 15.0495 8.31916 15.0495Z"
                    fill="#6A7185"
                  />
                </svg>
                <input
                  className="outline-none h-full w-full"
                  placeholder="Search"
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            <div
              className="h-[38px] px-5 py-3 bg-[#d94841] rounded flex items-center gap-1 text-white text-sm cursor-pointer"
              onClick={handleAddUser}
            >
              <span>+</span>
              <span>Add</span>
            </div>
          </div>
          <div className="px-5">
            <Table className="text-start bg-white text-black h-[15dvh]">
              <TableHeader className="bg-[#E8E8E8]">
                <TableRow>
                  <TableHead className="text-start">UserName</TableHead>
                  <TableHead className="text-start">Gateway</TableHead>
                  <TableHead className="text-start">Ponds</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="max-h-[calc(100vh-150px)] overflow-y-auto">
                {loading ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4">
                      <div className="animate-pulse">Loading users...</div>
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="text-center text-red-500 py-4"
                    >
                      Error: {error.message}
                    </TableCell>
                  </TableRow>
                ) : filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4">
                      No users found
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      onClick={() =>
                        navigate({ to: `/users/${user.id}/ponds` })
                      }
                      className={`cursor-pointer ${user.id.toString() === users_id ? "bg-[#E4F5E3]" : ""}`}
                    >
                      <TableCell className="font-medium">
                        {user.full_name}
                      </TableCell>
                      <TableCell className="font-medium pl-5">
                        {user.gateways ? user.gateways.title : "N/A"}
                      </TableCell>
                      <TableCell className="font-medium pl-5 flex items-center gap-2">
                        <PondSvg />
                        <div className="bg-blue-100 px-2 rounded-sm py-0.5 text-blue-600">
                          {user.pond_count}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        <div className="w-[32%] bg-white overflow-y-auto scrollbar-hidden">
          <Pondsnav />
        </div>

        <div className="w-[40%] bg-white px-4 shadow-[0px_0px_10px_0px_rgba(100,130,108,0.10)] overflow-y-auto scrollbar-hidden">
          {pathname.includes("ponds") ? <Motors /> : <Apfc />}
        </div>
      </div>
    </div>
  );
};

export { Usertable };
