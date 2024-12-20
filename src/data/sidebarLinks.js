import { ROLE_TYPE } from "../utils/constants";
const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  {
    id: 2,
    name: "Dashboard",
    path: "/dashboard/instructor",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscDashboard",
  },
  {
    id: 3,
    name: "All Courses",
    path: "/dashboard/all-courses",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Course",
    path: "/dashboard/add-course",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscAdd",
  },
  {
    id: 5,
    name: "Enrolled Courses",
    path: "/dashboard/enrolled-courses",
    type: ROLE_TYPE.STUDENT,
    icon: "VscMortarBoard",
  },
  {
    id: 6,
    name: "Cart",
    path: "/dashboard/cart",
    type: ROLE_TYPE.STUDENT,
    icon: "AiOutlineShoppingCart",
  },
  {
    id: 7,
    name: "Certificate Approval",
    path: "/dashboard/certificate",
    type: ROLE_TYPE.INSTRUCTOR,
    icon: "VscCheckAll", 
  },

  {
    id: 8,
    name: "Internship Application",
    path: "/internship",
    type: ROLE_TYPE.STUDENT,
    icon: "VscFile",
  },
];

// module.exports = sidebarLinks
export default sidebarLinks
