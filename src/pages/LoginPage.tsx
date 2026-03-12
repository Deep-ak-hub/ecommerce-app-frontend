// import { useEffect, useState } from "react";
import AuthLeftSidePanel from "../components/AuthLeftSidePanel";
import { PageTitle } from "../components/PageTitleComponent";

export default function LoginPage() {
  /*   const [credentials, setCredentials] = useState({
    email:"",
    password: ""
  })

  useEffect(() => {
    console.log("On every state update or component render"); 
  })

  useEffect(() => {
    console.log("On every mounting phase only");
  }, [])

  useEffect(() => {
    console.log("On every change/state-manipulation of credentials");
  }, [credentials]) */

  return (
    <>
      <div className="flex w-full h-screen">
        <AuthLeftSidePanel />

        <div className="w-full flex flex-col lg:w-2/3 bg-gray-200">
          <PageTitle value="Login Page" className="text-gray-950" />
        </div>
      </div>
    </>
  );
}
