import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h4>Powered by DashSquared</h4>
        </div>
        <div>
          <Button className="justified centered">My Chats</Button>
        </div>
      </div>
    </main>
  );
}
