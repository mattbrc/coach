import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";
import Landing from "./_components/landing";

export default async function Home() {
  noStore();

  return (
    <main>
      <div>
        <header className="sticky top-0 z-40">
          <div className="header-bg container flex h-16 items-center justify-between py-4">
            <p className="font-extrabold">Athlana</p>
          </div>
        </header>
      </div>
      <div>
        <Landing />
      </div>
    </main>
  );
}
