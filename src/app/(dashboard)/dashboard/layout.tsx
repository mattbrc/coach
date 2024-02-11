import { notFound } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await currentUser();

  if (!user) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40">
        <div className="header-bg container flex h-16 items-center justify-between py-4">
          <p className="font-mono text-lg tracking-tighter">Athlana</p>
          <UserButton afterSignOutUrl="/" />
        </div>
      </header>
      <div>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
