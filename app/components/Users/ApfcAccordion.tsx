import { UserData } from "@/routes/api/UsersData";
import { useParams } from "@tanstack/react-router";
import { LocationSvg } from "../svg/location";

const ApfcAccordion = () => {
  const { users_id } = useParams({ strict: false });
  const UserID = Number(users_id);
  const user = UserData.find((user) => user.id === UserID);
  console.log("hi there im using whatsapp");
  if (!user) {
    return <div>User not found {UserID}</div>;
  }
  return (
    <div className="space-y-2 p-1.5">
      {user.apfcList.map((A) => (
        <div className="w-full border border-gray-200 flex items-center justify-between p-2 rounded-lg hover:bg-[#E4F5E3] ">
          <div className="">
            <div className="text-[#05A155]">{A.apfc_id}</div>
            <div>{A.power_max_apfc}</div>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <LocationSvg />
            </div>
            <div>{A.location}</div>
          </div>
          <div
            className={`bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1 ${A.status === "online" ? "text-green-600" : "text-red-600 bg-red-100"}`}
          >
            <div
              className={`h-1.5 w-1.5 rounded-full ${A.status === "online" ? "bg-green-600 " : "bg-red-600"}`}
            ></div>
            <div>{A.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export { ApfcAccordion };
