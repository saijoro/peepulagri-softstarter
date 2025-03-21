  import { useNavigate, useRouter } from "@tanstack/react-router";
  import { Avatar, AvatarImage } from "../ui/avatar";
  import PondCountIcon from "../icons/pond-count";
import { useState } from "react";
type User = {
  [x: string]: any;
  id: string;
  name: string;
  connectedMotors: number;
  status: "active" | "inactive" | "error";
};
  export default function UserColumns() {
    const router = useRouter();
    const navigate = useNavigate();
    const [selectedRowId, setSelectedRowId] = useState<string | null>(null);

    const handleRowClick = (user: any) => {
      if (!user?.ponds?.length) return; 
      const userId = user.id;
      const firstPondId = user.ponds[0].id;
      console.log( userId, firstPondId, "user");
      navigate({ to: `/users/${userId}/ponds/${firstPondId}` }).then(() => {
        window.location.reload();
      });
    };

    return [
      {
        accessorFn: (row: any) => row.serial,
        id: "serial",
        header: () => <span className=" text-sm">S No</span>,
        cell: (info: any) => (
          <span
            className="text-sm cursor-pointer hover:text-blue-500"
            onClick={() => handleRowClick(info.row.original)}
          >
            {info.getValue() || "--"}
          </span>
        ),
        width: "40px",
      },
      {
        accessorFn: (row: any) => {
          const capitalize = (str: string) =>
            str.replace(/\b\w/g, (char) => char.toUpperCase());

          const firstName = row.full_name ? capitalize(row.full_name) : "-";
          const lastName = row.lastname ? capitalize(row.lastname) : "";

          return {
            id: row.id,
            fullname: `${firstName} ${lastName}`,
            avatar: row.profile_pic || null,
          };
        },
        id: "full_name",
        header: () => <span className=" text-sm">Full Name</span>,

        cell: (info: any) => {
          const { id, fullname, avatar } = info.getValue() || {
            id: null,
            fullname: "--",
            avatar: null,
          };

          return (
            <span
              className="flex gap-2 items-center cursor-pointer hover:text-blue-500"
              onClick={() => handleRowClick(info.row.original)}
            >
              {avatar ? (
                <Avatar className="w-7 h-7 border-0">
                  <AvatarImage src={avatar} className="object-center"></AvatarImage>
                </Avatar>
              ) : (
                <Avatar className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-50">
                  <span className="text-sm">{fullname[0]}</span>
                </Avatar>
              )}
              <span className="self-center text-sm">{fullname}</span>
            </span>
          );
        },
        width: "180px",
      },
      {
        accessorFn: (row: any) => row.gateways?.title || "--",
        id: "gateways",
        header: () => <span className=" text-sm">Gateways</span>,

        cell: (info: any) => {
          const id = info.row.original.id;
          const rawTitle = info.getValue() || "--";
          const formattedTitle = rawTitle
            .replace(/_/g, " ")
            .toLowerCase()
            .replace(/\b\w/g, (char) => char.toUpperCase());

          return (
            <span
              className="text-sm cursor-pointer hover:text-blue-500"
              onClick={() => handleRowClick(info.row.original)}
            >
              {formattedTitle}
            </span>
          );
        },
        width: "150px",
      },
      {
        accessorFn: (row: any) => row.pond_count,
        id: "pond_count",
        header: () => <span className=" text-sm">Ponds</span>,

        cell: (info: any) => {
          const id = info.row.original.id;
          const value = info.getValue() || "--";

          return (
            <span
              className="text-sm flex items-center gap-2 cursor-pointer hover:text-blue-500"
              onClick={() => handleRowClick(info.row.original)}
            >
              <PondCountIcon className="size-5" />
              {value !== "--" ? (
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 rounded">
                  {value}
                </span>
              ) : (
                <span className="bg-transparent text-black text-xs px-2 py-0.5 rounded-full">
                  {value}
                </span>
              )}
            </span>
          );
        },
        width: "100px",
      },
    ];
  }
