import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
// If your Prisma file is located elsewhere, you can change the path
import { prisma } from "./prisma";
import { polar, checkout, portal, usage, webhooks } from "@polar-sh/better-auth";
import { Polar } from "@polar-sh/sdk";

const polarClient = new Polar({
    accessToken: process.env.POLAR_ACCESS_TOKEN,
    server: process.env.NODE_ENV != "production" ? "sandbox" : "production"
});

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true,
        autoSignin: true,
        minPasswordLength: 8,
    },
    // Uncomment and add credentials in .env when ready:
    // socialProviders: { 
    //     github: { 
    //         clientId: process.env.GITHUB_CLIENT_ID as string, 
    //         clientSecret: process.env.GITHUB_CLIENT_SECRET as string, 
    //     },
    //     google: {
    //         clientId: process.env.GOOGLE_CLIENT_ID as string,
    //         clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //     },
    // },
    plugins: [
        polar({
            client: polarClient,
            createCustomerOnSignUp: true,
            use: [
                checkout({
                    products: [
                        {
                            productId: "9276bc07-3d88-45cf-ad03-2dbdf697da1f", // ID of Product from Polar Dashboard
                            slug: "pro" // Custom slug for easy reference in Checkout URL, e.g. /checkout/pro
                        }
                    ],
                    successUrl: "/workflows?checkout_id={CHECKOUT_ID}",
                    authenticatedUsersOnly: true
                }),
                portal(),
                usage(),
                //                 webhooks({
                //                     secret: process.env.POLAR_WEBHOOK_SECRET,
                //                     onCustomerStateChanged: (payload) => // Triggered when anything regarding a customer changes
                //                         onOrderPaid: (payload) => // Triggered when an order was paid (purchase, subscription renewal, etc.)
                //                     ...  // Over 25 granular webhook handlers
                // onPayload: (payload) => // Catch-all for all events
                //                 }) 
                //             ], 
                //         }) 
            ]
        })
    ]
});