import AuthLeftSidePanel from "@/components/AuthLeftSidePanel";
import { Outlet } from "react-router";

export default function AuthLayoutPage() {
  return (
    <>
      <div className="flex w-full grow h-screen">
        <AuthLeftSidePanel />
        <Outlet />
      </div>
    </>
  );
}
