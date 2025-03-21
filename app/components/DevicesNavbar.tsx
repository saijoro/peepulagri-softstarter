import { useLocation, useNavigate, useParams } from "@tanstack/react-router";

const DeviceNavbar = () => {
  const navigate = useNavigate();
  const {users_id} = useParams({strict:false})
  const {pathname} = useLocation()
  const Apfc = pathname.includes('Apfc')
  const StarterBox = pathname.includes('StarterBox')
  return (
    <div className="p-2">
      <div className={`flex items-center bg-[#E4F5E3] w-fit rounded-md cursor-pointer`}>
        <div className={`h-full p-1 m-1 px-2 rounded-[4px] ${Apfc ? 'bg-green-600 text-white' : ''}`}
          onClick={() =>
            navigate({
              to:`/users/${users_id}/Apfc`
            })
          }
        >
          APFC
        </div>
        <div className={`h-full p-1 m-1 px-2 rounded-[4px] ${StarterBox ? 'bg-green-600 text-white' : ''}`}
          onClick={() =>
            navigate({
              to: `/users/${users_id}/StarterBox`
            })
          }
        >
          Starter Box
        </div>
      </div>
    </div>
  );
};

export { DeviceNavbar };