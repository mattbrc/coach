export const metadata = {
  title: "Athlana - Dashboard",
};

export default async function Page() {
  return (
    <div className="container flex flex-col items-center justify-center gap-6 px-4 py-6">
      {/* Content visible only on desktop (large screens) */}
      <div className="hidden md:block">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Your actual content for desktop users goes here.</p>
      </div>

      {/* Message visible only on mobile and tablets (small to medium screens) */}
      <div className="block py-20 text-center md:hidden">
        <p>
          Athlana is not available on mobile browsers (for now). Please use a
          laptop/desktop browser.
        </p>
      </div>
    </div>
  );
}
