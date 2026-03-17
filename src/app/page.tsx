import { prisma } from "@/lib/prisma";

const Page = async () => {
  const users = await prisma.user.findMany();
  return (
    <div className="text-red-500">
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Page