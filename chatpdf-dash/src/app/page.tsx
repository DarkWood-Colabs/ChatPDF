import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h4>Powered by DashSquared</h4>
        </div>
        <div className="flex mt-2">
          {isAuth && <Button className="justified centered">My Chats</Button>}
        </div>

        <div className="w-full mt-4">
          {isAuth ? (
            <><FileUpload /><h1>File Upload</h1></>
            ):(<Link href="/sign-in">Login to Get Started</Link>)
          }
        </div>
      </div>
    </main>
  );
}
