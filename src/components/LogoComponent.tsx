import logo from "../assets/images/ecom_logo.png"

// export const LogoComponent = (props: Readonly<{className?: string}>) => {
export const LogoComponent = ({className}: Readonly<{className?: string}>) => {
    return (
        <>
        {/* className = {props.className} */}
        <div className={className}>
            <img src={logo} className="w-full" />
        </div>
        </>
    )
}
