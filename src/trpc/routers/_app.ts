import { z } from 'zod';
import { baseProcedure, createTRPCRouter, protectedProcedure } from '../init';
import { prisma } from '@/lib/prisma';
import { inngest } from '@/inngest/client';
import { google } from '@ai-sdk/google';
import { generateText } from 'ai';
import { TRPCError } from '@trpc/server';


export const appRouter = createTRPCRouter({

  testAi: baseProcedure.mutation(async () => {

    // throw new TRPCError({
    //   code: "BAD_REQUEST", message: "something went wrong"
    // });
    await inngest.send({
      name: "execute/ai",
    });
    return "AI execution triggered";
  }),
  getWorkflows: baseProcedure.query(() => {
    return prisma.workflow.findMany();
  }),
  createWorkflow: protectedProcedure.mutation(async () => {
    await inngest.send({
      name: "test/hello.world",
      data: {
        email: "arpan@gmail.com",
      }
    })
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;