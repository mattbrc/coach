import Link from "next/link";
import * as React from "react";

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 flex w-full justify-between bg-background/60 p-4">
      <footer className="flex h-10 w-full shrink-0 items-center px-4 md:px-6">
        <div className="mr-auto">
          <div>
            <h1 className="font-mono text-sm">2024 Athlana</h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              An app by{" "}
              <Link href="https://instagram.com/acidgambit">ACIDGAMBIT</Link>
              &nbsp;| Washington, D.C.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
