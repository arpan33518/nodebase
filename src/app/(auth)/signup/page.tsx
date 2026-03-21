import { RegisterForm } from "@/features/auth/components/register-form";
import { requireUnauth } from "@/lib/auth-utils";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  await requireUnauth();

  return (
    <RegisterForm />
  )

};

export default Page;