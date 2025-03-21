// src/components/Usertable.tsx
import { useEffect, useState, useCallback } from "react";

import { Outlet, useLocation, useNavigate, useParams, useRouter } from "@tanstack/react-router";

import TanStackTable from "../core/TanstackTable";
import UserColumns from "./UserColumns";
import { useQuery } from "@tanstack/react-query";
import { getAllUsersAPI } from "@/lib/services/users";
import { addSerial } from "@/lib/services/addSerial";
import SearchFilter from "./SearchFilter";
import LoadingComponent from "../core/Loading";

interface User {
    id: number;
    full_name: string;
    pond_count: number;
    gateways: { id: number; title: string } | null;
}
type Pagination = {
    current_page: number;
    page_size: number;
};

const UserListPage = ({
    heightClass = "h-[calc(100vh-100px)]",
}: {
    heightClass?: string;
}) => {
    const { users_id, ponds_id } = useParams({ strict: false });
    const router = useRouter();
    const location = useLocation();
    const navigate = useNavigate();
    const { pathname } = useLocation()
    // const userDetails = useStore(authStore, (state: any) => state["user"]);
    const searchParams = new URLSearchParams(location.search);

    const [searchString, setSearchString] = useState<any>(
        searchParams.get("search_string") || ""
    );
    const [debounceSearchString, setDebounceSearchString] = useState<string>(
        searchParams.get("search_string") || ""
    );

    const [pagination, setPagination] = useState<Pagination>({
        current_page: Number(searchParams.get("page")) || 1,
        page_size: Number(searchParams.get("page_size")) || 25,
    });

    const userColumns = UserColumns();

    const {
        isFetching,
        data: usersData,
        refetch,
    } = useQuery({
        queryKey: ["Users", debounceSearchString],
        queryFn: async () => {
            let queryParams: any = {
                ...(debounceSearchString && { search_string: debounceSearchString }),
            };

            router.navigate({
                to: `/users/${users_id}/ponds/${ponds_id}`,
                search: queryParams,
            });

            const response = await getAllUsersAPI(queryParams);
            if (response.status === 200 || response.status === 201) {
                const { data, pagination } = response?.data?.data;
                let responseAfterSerial =
                    addSerial(
                        data,
                        pagination.current_page,
                        pagination.page_size
                    ) || [];

                return { data: responseAfterSerial, pagination };
            }
        },

    });

    useEffect(() => {
        const handler = setTimeout(() => {
            setPagination((prev) => ({
                ...prev,
                current_page: searchString ? prev.current_page : 1,
            }));

            setDebounceSearchString(searchString);
            refetch();
            router.navigate({
                to: `/users/${users_id}/ponds/${ponds_id}`,
                search: (prev) => ({
                    ...prev,
                    search_string: searchString || undefined,
                }),
            });
        }, 1000);

        return () => clearTimeout(handler);
    }, [searchString]);

    const handleAddUser = () => {
        navigate({ to: "/" });
    };

    return (
        <div className="text-xs h-[92.7dvh] bg-gray-100 text-black">
            <div className="flex justify-start w-full h-full">
                <div className="w-[28%] overflow-y-auto scrollbar-hidden bg-white">
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                        <div className="w-full">
                            <SearchFilter
                                searchString={searchString}
                                setSearchString={setSearchString}
                                title="Name"
                            />
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
                        <TanStackTable
                            data={usersData?.data || []}
                            columns={userColumns}
                            loading={isFetching}
                            removeSortingForColumnIds={["serial", "actions"]}
                            heightClass={heightClass}
                        />
                    </div>
                </div>
                <div className="w-[72%]"><Outlet /></div>
            </div>
            <LoadingComponent loading={isFetching} message="Loading..." />
        </div>
    );
};

export { UserListPage };
