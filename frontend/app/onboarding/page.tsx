"use client";

import { useMemo, useState } from "react";
import { determinePrimaryGoal, goalLabels } from "../../lib/templates";

const questions = [
  {
    id: "businessName",
    label: "What is your business name?",
    type: "text",
  },
  {
    id: "industry",
    label: "Which industry best describes you?",
    type: "text",
  },
  {
    id: "intent",
    label: "What is the primary outcome you want from your site?",
    type: "select",
    options: [
      { value: "", label: "Select one" },
      { value: "contact_booking", label: "Get calls or bookings" },
      { value: "sell_products", label: "Sell products for pickup" },
      { value: "findable_professional", label: "Be findable + look professional" },
    ],
  },
  {
    id: "acceptsAppointments",
    label: "Do you take appointments?",
    type: "select",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
  {
    id: "sellsProducts",
    label: "Do you sell products or prepared food?",
    type: "select",
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
];

const OnboardingPage = () => {
  const [step, setStep] = useState(0);
  const [formState, setFormState] = useState({
    businessName: "",
    industry: "",
    intent: "",
    acceptsAppointments: "no",
    sellsProducts: "no",
  });

  const goal = useMemo(() => {
    return determinePrimaryGoal({
      intent: formState.intent,
      acceptsAppointments: formState.acceptsAppointments === "yes",
      sellsProducts: formState.sellsProducts === "yes",
    });
  }, [formState]);

  const currentQuestion = questions[step];
  const isLastStep = step === questions.length - 1;

  return (
    <div className="grid">
      <section className="card">
        <span className="badge">Guided Onboarding</span>
        <h1>Answer a few quick questions</h1>
        <p>We use your intent to decide the single goal for your website.</p>
        <div className="grid">
          <label htmlFor={currentQuestion.id}>{currentQuestion.label}</label>
          {currentQuestion.type === "select" ? (
            <select
              id={currentQuestion.id}
              value={formState[currentQuestion.id as keyof typeof formState]}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  [currentQuestion.id]: event.target.value,
                }))
              }
            >
              {currentQuestion.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={currentQuestion.id}
              type="text"
              value={formState[currentQuestion.id as keyof typeof formState]}
              onChange={(event) =>
                setFormState((prev) => ({
                  ...prev,
                  [currentQuestion.id]: event.target.value,
                }))
              }
            />
          )}
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <button
            className="button secondary"
            onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
            disabled={step === 0}
          >
            Back
          </button>
          {isLastStep ? (
            <a className="button" href="/preview">
              View Suggested Website
            </a>
          ) : (
            <button
              className="button"
              onClick={() => setStep((prev) => Math.min(prev + 1, questions.length - 1))}
            >
              Next
            </button>
          )}
        </div>
      </section>
      <section className="card">
        <h2>Your single-goal recommendation</h2>
        <p>
          {goalLabels[goal]} — based on your intent, the system will configure a
          website optimized for this goal only.
        </p>
        <ul className="list">
          <li>No layout editing or extra pages unless you request expansion.</li>
          <li>Ordering and booking cannot both be enabled.</li>
          <li>Upgrade prompts appear only after explicit intent.</li>
        </ul>
      </section>
    </div>
  );
};

export default OnboardingPage;
