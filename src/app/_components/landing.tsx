"use client";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import { Icons } from "~/components/icons";

export default function Landing() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const createSignUp = api.email.create.useMutation({
    onSuccess: () => {
      toast.success("Thank you for signing up!");
      router.refresh();
      setEmail("");
    },
    onError: (e) => {
      const error = e.message[0];
      console.log("error email string: ", error);
    },
  });

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Coming Soon
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Actionable insights for your coaching business.
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Understand your clients better with powerful analytics and
              reporting tools. Let data drive your decisions and help your
              clients achieve their goals.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createSignUp.mutate({ email });
              }}
              className="flex space-x-2"
            >
              <Input
                type="text"
                placeholder="bob@bob.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-lg flex-1"
              />
              <Button type="submit" disabled={createSignUp.isLoading}>
                {/* {createSignUp.isLoading ? "Signing Up..." : "Sign Up"} */}
                Sign Up
              </Button>
            </form>
            {createSignUp.error?.data?.zodError?.fieldErrors.email?.[0] && (
              <p className="text-xs text-red-600">
                {createSignUp.error.data.zodError.fieldErrors.email[0]}
              </p>
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              {/* <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link> */}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
