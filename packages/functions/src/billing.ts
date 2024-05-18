import Stripe from "stripe";
import { Config } from "sst/node/config";
import handler from "@try-sst/core/handler";
import { calculateCost } from "@try-sst/core/cost";

export const main = handler(async (event) => {
  const { storage, source } = JSON.parse(event.body || "{}");
  const amount = calculateCost(storage);
  const description = "Scratch charge";

  const stripe = new Stripe(Config.STRIPE_SECRET_KEY, {
    apiVersion: "2024-04-10",
  });

  await stripe.charges.create({
    source,
    amount,
    description,
    currency: "usd",
  });

  return JSON.stringify({ status: true });
});
