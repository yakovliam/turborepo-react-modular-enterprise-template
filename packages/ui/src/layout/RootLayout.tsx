import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Root Header */}
      <div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-2 sm:px-6">
        Root Header
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
