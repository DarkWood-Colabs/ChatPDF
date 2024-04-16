import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = await auth()
  const isAuth = !!userId
  return (
    <main className="flex min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 flex-col items-center justify-between p-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col item-center text-center">
          <div className="block justify-center">
            <h1 className="mr-5 text-5xl font-semibold">
              Chat with Any PDF
            </h1>
            <div className="flex mt-2 ">

              <div className="flex mt-3 justify-center">
                {isAuth && <Button className="mt-1 justify-center">Got To Chats</Button>}
              </div>
              <p className="py-1">
                Enjoy a Cup of Coffee with your Documents. <br></br>
                Data Acquisition with your <b>Business-Chad</b>, without having to <u>DIG!</u>
              </p>
              <div className="w-full mt-4">
                {isAuth ? 
                  (<><FileUpload /><h1>File Upload</h1></>):
                  (<Link href="/sign-in"><Button>Login to Get Started</Button></Link>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
