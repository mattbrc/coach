"use client";

import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { api } from "~/trpc/react";
import toast from "react-hot-toast";
import { Icons } from "~/components/icons";
import { Card } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";

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
            <Badge variant="acid">Coming Soon</Badge>
            <h1 className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none">
              The Platform for Coaches.
            </h1>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Focus on what you do best, we&apos;ll take care of the rest.
              Virtual coaching, powerful analytics, client engagement +
              retention, and sales pages.
            </p>
          </div>
          <div className="mx-auto max-w-sm space-y-2 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createSignUp.mutate({ email });
              }}
              className="flex space-x-2"
            >
              <Input
                type="text"
                placeholder="Enter your email"
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
              <p className="text-xs text-red-400">
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
          {/* <div className="mx-auto grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Seamless Client Management</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Easily manage and monitor your clients&apos; progress in one
                place
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Real-time Business Insights</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Make informed decisions with AI-driven actionable data to grow
                your business
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Dynamic Content Creation</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Engage your audience with fresh content
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Virtual Coaching Platform</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Deliver personalized training and consultations through our
                platform, reaching clients anywhere, anytime, without
                compromising on the quality of your coaching
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Customizable Product Pages</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Create a stunning online presence in minutes, complete with
                booking capabilities and automated payments, powered by Stripe
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <Icons.explore className="mx-auto h-6 w-6 opacity-70" />
              <h3 className="text-lg font-bold">Client Engagement Tools</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Boost retention with targeted communication
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
