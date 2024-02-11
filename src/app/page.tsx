import { unstable_noStore as noStore } from "next/cache";
// import Link from "next/link";

// import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";
import Landing from "./_components/landing";
import { Button } from "~/components/ui/button";
import { Footer } from "~/components/footer";
import Link from "next/link";

export default async function Home() {
  noStore();

  return (
    <main>
      <div>
        <header className="sticky top-0 z-40">
          <div className="header-bg container flex h-16 items-center justify-between py-4">
            <p className="font-mono text-lg tracking-tighter">Athlana</p>
            <div className="flex gap-2">
              <Button variant="ghost" asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              {/* <Button variant="ghost">Login</Button>
              <Button>Sign Up</Button> */}
            </div>
          </div>
        </header>
      </div>
      <div>
        <Landing />
        <Footer />
      </div>
    </main>
  );
}
