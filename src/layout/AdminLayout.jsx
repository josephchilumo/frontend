import Sidebar from "../components/admin/components/Sidebar";

const AdminLayout = ({ children}) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar/>
            <main className="flex-1 ml-64 p-8 bg-gray-100">
                {children}
            </main>
        </div>
    );
};

export default AdminLayout;