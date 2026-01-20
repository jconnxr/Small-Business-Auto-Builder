const GOALS = {
  CONTACT: "contact_booking",
  SELL: "sell_products",
  FINDABLE: "findable_professional",
};

export const determinePrimaryGoal = ({
  intent,
  sellsProducts,
  acceptsAppointments,
}) => {
  if (!intent && !sellsProducts && !acceptsAppointments) {
    return GOALS.FINDABLE;
  }
  if (intent === GOALS.CONTACT || acceptsAppointments) {
    return GOALS.CONTACT;
  }
  if (intent === GOALS.SELL || sellsProducts) {
    return GOALS.SELL;
  }
  if (intent === GOALS.FINDABLE) {
    return GOALS.FINDABLE;
  }
  return null;
};

const TEMPLATE_SECTIONS = {
  [GOALS.CONTACT]: [
    { id: "hero", type: "hero", locked: true },
    { id: "booking", type: "booking", locked: true },
    { id: "intake", type: "intake", locked: true },
    { id: "testimonials", type: "testimonials", locked: true },
    { id: "footer", type: "footer", locked: true },
  ],
  [GOALS.SELL]: [
    { id: "hero", type: "hero", locked: true },
    { id: "featured-products", type: "products", locked: true },
    { id: "order", type: "order", locked: true },
    { id: "reviews", type: "reviews", locked: true },
    { id: "footer", type: "footer", locked: true },
  ],
  [GOALS.FINDABLE]: [
    { id: "hero", type: "hero", locked: true },
    { id: "info", type: "business-info", locked: true },
    { id: "hours", type: "hours", locked: true },
    { id: "trust", type: "trust", locked: true },
    { id: "footer", type: "footer", locked: true },
  ],
};

export const templateForGoal = (goal) => {
  return {
    pathway: goal,
    version: "v4",
    sections: TEMPLATE_SECTIONS[goal] || [],
    editableFields: ["headline", "description", "cta"],
    locked: true,
  };
};

export const goals = GOALS;
