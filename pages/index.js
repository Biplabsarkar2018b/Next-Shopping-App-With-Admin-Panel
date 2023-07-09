import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  // console.log(session.user.image);
  return (
    <Layout>
      <div className="font-semibold flex justify-between">
        <div className="text-2xl">
          Hello, <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div className="rounded-full overflow-hidden border-black border-2 w-20"><img src={session?.user?.image}alt="User Photo" /></div>
      </div>
    </Layout>
  );
}
