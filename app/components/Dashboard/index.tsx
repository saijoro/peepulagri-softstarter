import { use, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getDashboardStatsAPT } from "@/lib/services/dashboard";
import CountUp from "react-countup";
import TestUsersIcon from "../icons/dashboard/test-users-icon";
import TotalLocationsIcon from "../icons/dashboard/total-locations-icon";
import TotalPondsIcon from "../icons/dashboard/total-ponds-icon";
import TotalDeviceIcon from "../icons/dashboard/total-device-icon";
import TotalMotorIcon from "../icons/dashboard/total-motor-icon";
import ScheduledIcon from "../icons/dashboard/sheduled-icon";
import ManualIcon from "../icons/dashboard/manual-icon";
import AutomaticIcon from "../icons/dashboard/automatic-icon";

const DashboardStats = () => {
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["dashboardStats"],
    queryFn: async () => {
      try {
        const response = await getDashboardStatsAPT();
        if (response.success) {
          return response.data.data;
        } else {
          throw response;
        }
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
  });

  useEffect(() => {
    refetch();
  }, []);

  const stats = [
    {
      label: "Total Users",
      value: data?.users_count,
      color: "p-2 space-y-2 bg-gray-200 w-full rounded-lg",
      icon: TestUsersIcon,
    },
    {
      label: "Total Locations",
      value: data?.locations_count,
      color: "p-2 space-y-2 bg-gray-200 w-full rounded-lg",
      icon: TotalLocationsIcon,
    },
    {
      label: "Total Ponds",
      value: data?.ponds_count,
      color: "p-2 space-y-2 bg-gray-200 w-full rounded-lg",
      icon: TotalPondsIcon,
    },
    {
      label: "Total Devices",
      value: data?.starterBoxes_count,
      color: "p-2 space-y-2 bg-gray-200 w-full rounded-lg",
      icon: TotalDeviceIcon,
    },
    {
      label: "Total Motors",
      value: data?.motors_count,
      color: "p-2 space-y-2 bg-gray-200 w-full rounded-lg",
      icon: TotalMotorIcon,
    },
    {
      label: "Scheduled",
      value: data?.motors_count,
      color: "p-2 space-y-2 bg-orange-100 w-full rounded-lg text-orange-500",
      icon: ScheduledIcon,
    },
    {
      label: "Manual",
      value: data?.motors_count,
      color: "p-2 space-y-2 bg-blue-100 w-full rounded-lg",
      icon: ManualIcon,
    },
    {
      label: "Automatic",
      value: data?.motors_count,
      color: "p-2 space-y-2 bg-green-100 w-full rounded-lg",
      icon: AutomaticIcon,
    },
  ];

  return (
    <div className="text-sm grid grid-cols-8 items-center justify-between p-4 gap-4 bg-white w-full overflow-hidden">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-2 space-y-2 w-full rounded-lg ${stat.color}`}
        >
          <div className="flex items-center justify-between">
            <div>{stat.label}</div>
            <div>{stat.icon && <stat.icon className="w-4 h-4" />} </div>
          </div>
          <div className="text-lg text-start text-black">
            <CountUp start={0} end={stat.value} duration={1.5} separator="," />
          </div>
        </div>
      ))}
      <div className="h-[68dvh] ">
        <iframe
          className="w-screen h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103045.21336649994!2d80.01798268900757!3d15.339393550817624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b09e9c48d24cb%3A0x1715949069af4a9d!2sThetupuram%20Poleramma%20temple!5e1!3m2!1sen!2sin!4v1742191576681!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default DashboardStats;
