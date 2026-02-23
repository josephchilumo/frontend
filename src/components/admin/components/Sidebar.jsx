import { NavLink } from "react-router-dom";
import { 
  HomeIcon, 
  BookOpenIcon, 
  UserGroupIcon, 
  BuildingOfficeIcon, 
  ClipboardDocumentListIcon 
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menu = [
    { name: "Dashboard", icon: HomeIcon, path: "/admin/dashboard" },
    { name: "Publications", icon: BookOpenIcon, path: "/admin/publications" },
    { name: "Team", icon: UserGroupIcon, path: "/admin/team" },
    { name: "Locations", icon: BuildingOfficeIcon, path: "/admin/locations" },
    { name: "Users", icon: ClipboardDocumentListIcon, path: "/admin/users" },
    { name: "Consultations", icon: ClipboardDocumentListIcon, path: "/admin/consultations" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed">
      <div className="text-2xl font-bold p-6 border-b border-gray-700">
        Chibiti Admin
      </div>

      <nav className="mt-6">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "dashboard"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 transition-all duration-200 ${
                isActive
                  ? "bg-[#C6A75E] text-gray-900 font-semibold"
                  : "hover:bg-gray-800 text-gray-300"
              }`
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;