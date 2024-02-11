import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { signUps } from "~/server/db/schema";

export const emailRouter = createTRPCRouter({
  // hello: publicProcedure
  //   .input(z.object({ text: z.string() }))
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input.text}`,
  //     };
  //   }),

  create: publicProcedure
    .input(z.object({ email: z.string().email({ message: "Invalid email address" }).min(1) }))
    .mutation(async ({ ctx, input }) => {
      await ctx.db.insert(signUps).values({
        email: input.email,
      });
    }),

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.query.posts.findFirst({
  //     orderBy: (posts, { desc }) => [desc(posts.createdAt)],
  //   });
  // }),
});
