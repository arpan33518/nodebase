import Image from "next/image";
import Link from "next/link";

const AuthLayout = ({children}:{children:React.ReactNode;}) =>{
return(
    <>
    <div className="bg-muted flex min-h-svh flex-col justify-center p-6 md:p-10">
      <div className="mx-auto flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <Image src="/logos/logo.svg" alt="Logo" width={100} height={100} />
          <span className="text-xl">NodeBase</span>
        </Link>
        {children}
      </div>
    </div>
    </>
)
}

export default AuthLayout