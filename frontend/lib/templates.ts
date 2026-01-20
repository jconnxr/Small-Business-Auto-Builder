export const goals = {
  CONTACT: "contact_booking",
  SELL: "sell_products",
  FINDABLE: "findable_professional",
} as const;

export const determinePrimaryGoal = ({
  intent,
  sellsProducts,
  acceptsAppointments,
}: {
  intent?: string;
  sellsProducts?: boolean;
  acceptsAppointments?: boolean;
}) => {
  if (!intent && !sellsProducts && !acceptsAppointments) {
    return goals.FINDABLE;
  }
  if (intent === goals.CONTACT || acceptsAppointments) {
    return goals.CONTACT;
  }
  if (intent === goals.SELL || sellsProducts) {
    return goals.SELL;
  }
  if (intent === goals.FINDABLE) {
    return goals.FINDABLE;
  }
  return goals.FINDABLE;
};

export const goalLabels: Record<string, string> = {
  [goals.CONTACT]: "Contact / Booking",
  [goals.SELL]: "Sell Products",
  [goals.FINDABLE]: "Findable / Professional",
};

export const templates = {
  [goals.CONTACT]: [
    "Hero",
    "Booking CTA",
    "Lead intake form",
    "Testimonials",
    "Footer",
  ],
  [goals.SELL]: [
    "Hero",
    "Featured products",
    "Pickup ordering",
    "Reviews",
    "Footer",
  ],
  [goals.FINDABLE]: [
    "Hero",
    "Business info",
    "Hours + location",
    "Trust signals",
    "Footer",
  ],
};
