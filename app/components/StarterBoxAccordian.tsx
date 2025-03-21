import { UserData } from "@/routes/api/UsersData";
import { useParams } from "@tanstack/react-router";

const StarterBoxData = () => {
  const { users_id } = useParams({ strict: false });
  const userId = Number(users_id);
  const userdata = UserData.find((users) => users.id === userId);
  if(!userdata){
    return(
        <div className="p-3 border border-red-500 text-red-500 m-3 rounded-full font-bold"> userId not Found</div>
    )
  }
  return (
    <div className="space-y-2 p-1.5">
      {userdata.starterBoxList.map((A) => (
        <div className="w-full border border-gray-200 flex items-center justify-between p-2 rounded-lg hover:bg-[#E4F5E3]" key={A.device_id}>
          <div className="">
            <div className="text-[#05A155]">{A.device_id}</div>
            <div>{A.device_name}</div>
          </div>
          <div
            className={`bg-green-100 px-2 py-0.5 rounded-full flex items-center text-center gap-1 ${A.status === "Active" ? "text-green-600" : "text-red-600 bg-red-100"}`}
          >
            <div
              className={`h-[4px] w-[4px] rounded-full mt-[1.5px] ${A.status === "Active" ? "bg-green-600 " : "bg-red-600"}`}
            ></div>
            <div>{A.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export { StarterBoxData };
