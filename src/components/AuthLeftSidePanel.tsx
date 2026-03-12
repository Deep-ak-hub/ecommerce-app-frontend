import { LogoComponent } from './LogoComponent'

export default function AuthLeftSidePanel() {
  return (
    <>
     <div className="flex w-full h-screen ">
        <div className="w-1/3 hidden lg:flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800">
          <LogoComponent className="size-42" />
          <div className="text-center font-semibold text-blue-100">
            <h3>Buy Whatever You Want !!</h3>
          </div>
        </div>
        <div className="w-full lg:w-2/3 bg-gray-200"></div>
      </div>
    </>
  )
}
