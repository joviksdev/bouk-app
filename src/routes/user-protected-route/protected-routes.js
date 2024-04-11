import * as React from "react";
import {
  MdPerson,
  MdPersonOutline,
  MdShoppingCart,
  MdOutlineShoppingCart,
  MdLocationOn,
  MdOutlineLocationOn,
  MdNotifications,
  MdOutlineNotifications,
  MdLiveHelp,
  MdOutlineLiveHelp,
  MdInfo,
  MdOutlineInfo,
} from "react-icons/md";
import DeliveryAddress from "../../pages/dashboard/delivery-address/delivery-address";
import Profile from "../../pages/dashboard/profile/profile";
import History from "../../pages/dashboard/history/history";
import Notifications from "../../pages/dashboard/notifications/notifications";
import Help from "../../pages/dashboard/help/help";
import DashboardAbout from "../../pages/dashboard/about/about";

const protectedRoutes = [
  {
    iconActive: <MdPerson />,
    iconInactive: <MdPersonOutline />,
    title: "Profile",
    path: "/profile",
    element: Profile,
  },
  {
    iconActive: <MdShoppingCart />,
    iconInactive: <MdOutlineShoppingCart />,
    title: "History",
    path: "/history",
    element: History,
  },
  {
    iconActive: <MdLocationOn />,
    iconInactive: <MdOutlineLocationOn />,
    title: "Delivery Address",
    path: "/delivery-address",
    element: DeliveryAddress,
  },
  {
    iconActive: <MdNotifications />,
    iconInactive: <MdOutlineNotifications />,
    title: "Notifications",
    path: "/notifications",
    element: Notifications,
  },
  {
    iconActive: <MdLiveHelp />,
    iconInactive: <MdOutlineLiveHelp />,
    title: "Help",
    path: "/help",
    element: Help,
  },
  {
    iconActive: <MdInfo />,
    iconInactive: <MdOutlineInfo />,
    title: "About",
    path: "/profile-about",
    element: DashboardAbout,
  },
];

export default protectedRoutes;
