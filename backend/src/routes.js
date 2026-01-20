import express from "express";
import { nanoid } from "nanoid";
import { store } from "./store.js";
import { determinePrimaryGoal, templateForGoal } from "./templates.js";

export const router = express.Router();

router.post("/onboarding", (req, res) => {
  const { businessName, industry, intent, sellsProducts, acceptsAppointments } =
    req.body;
  const decision = determinePrimaryGoal({
    intent,
    sellsProducts,
    acceptsAppointments,
  });
  res.json({
    businessName,
    industry,
    primaryGoal: decision,
    pathwayType: decision,
    template: templateForGoal(decision),
  });
});

router.post("/businesses", (req, res) => {
  const { name, industry, primaryGoal } = req.body;
  const normalizedGoal = determinePrimaryGoal({ intent: primaryGoal });
  if (!normalizedGoal) {
    return res.status(400).json({ error: "Invalid primary goal." });
  }
  const business = {
    id: nanoid(),
    name,
    industry,
    primaryGoal: normalizedGoal,
    status: "draft",
    createdAt: new Date().toISOString(),
  };
  store.businesses.push(business);
  const website = {
    id: nanoid(),
    businessId: business.id,
    pathwayType: normalizedGoal,
    templateVersion: "v4",
    domain: null,
    publishedAt: null,
  };
  store.websites.push(website);
  res.status(201).json({ business, website });
});

router.get("/businesses/:id", (req, res) => {
  const business = store.businesses.find((item) => item.id === req.params.id);
  if (!business) {
    return res.status(404).json({ error: "Business not found." });
  }
  const website = store.websites.find((item) => item.businessId === business.id);
  res.json({ business, website, template: templateForGoal(business.primaryGoal) });
});

router.post("/businesses/:id/publish", (req, res) => {
  const business = store.businesses.find((item) => item.id === req.params.id);
  if (!business) {
    return res.status(404).json({ error: "Business not found." });
  }
  business.status = "published";
  const website = store.websites.find((item) => item.businessId === business.id);
  if (website) {
    website.publishedAt = new Date().toISOString();
  }
  res.json({ business, website });
});

router.post("/help-request", (req, res) => {
  const { businessId, reason } = req.body;
  const record = {
    id: nanoid(),
    businessId,
    priority: "intent",
    triggerReason: reason || "Help requested",
    lastActivity: new Date().toISOString(),
  };
  store.crmRecords.push(record);
  res.status(201).json({ record });
});

router.post("/bookings", (req, res) => {
  const { businessId, customerInfo, datetime } = req.body;
  const booking = {
    id: nanoid(),
    businessId,
    customerInfo,
    datetime,
    status: "requested",
  };
  store.bookings.push(booking);
  res.status(201).json({ booking });
});

router.post("/orders", (req, res) => {
  const { businessId, items, total, pickupTime } = req.body;
  const order = {
    id: nanoid(),
    businessId,
    items,
    total,
    status: "open",
    pickupTime,
  };
  store.orders.push(order);
  res.status(201).json({ order });
});
