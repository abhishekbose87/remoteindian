import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2020-03-02",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const {
    query: { pid },
  } = req;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        // Replace `price_...` with the actual price ID for your subscription
        // you created in step 2 of this guide.
        price: pid,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: "https://beta.remoteindian.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json({ id: session.id });
}

// app.listen(4242, () => console.log(`Listening on port ${4242}!`));
