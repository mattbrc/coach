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
        <Landing />
      </div>
    </main>
  );
}
