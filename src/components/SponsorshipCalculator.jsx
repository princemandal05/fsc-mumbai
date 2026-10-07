"use client";

import { useState } from "react";
import styles from "./SponsorshipCalculator.module.css";

const TIERS = [
  {
    id: "educate",
    amount: 1500,
    title: "Educate 1 Child",
    desc: "Covers monthly tuition, school supplies, uniform, and school exam fees.",
    deliverables: [
      "100% School/Junior college tuition covered",
      "Books, notebook sets & school bags",
      "Term-wise caseworker academic tracking",
    ],
  },
  {
    id: "holistic",
    amount: 3000,
    title: "Holistic Scholar",
    desc: "Education plus monthly nutrition rations, pediatric health checkups, and tutoring.",
    deliverables: [
      "All educational costs plus remedial tuition",
      "Monthly protein & micronutrient rations",
      "Quarterly pediatric health & vision checkup",
      "Child Guidance counseling support",
    ],
  },
  {
    id: "crisis",
    amount: 5000,
    title: "Family Crisis (BSY)",
    desc: "Sustains a family facing sudden breadwinner loss or illness, keeping child with family.",
    deliverables: [
      "Crisis subsistence subsidy preventing child separation",
      "Complete educational & healthcare coverage",
      "Intensive household social worker rehabilitation",
      "Vocational linkage for the surviving caregiver",
    ],
  },
];

export default function SponsorshipCalculator({ onOpenDonation }) {
  const [frequency, setFrequency] = useState("monthly"); // "monthly" | "annually"
  const [selectedTier, setSelectedTier] = useState(TIERS[0].id);
  const [customAmount, setCustomAmount] = useState("");

  const activeTierObj = TIERS.find((t) => t.id === selectedTier);
  const baseMonthlyAmount = customAmount ? Number(customAmount) || 0 : activeTierObj?.amount || 1500;
  const calculatedTotal = frequency === "annually" ? baseMonthlyAmount * 12 : baseMonthlyAmount;

  const handleSelectTier = (tierId) => {
    setSelectedTier(tierId);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(val);
    setSelectedTier("custom");
  };

  return (
    <section className="section" id="sponsorship">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Tax Exempt Under Section 80G</div>
          <h2 className="section-title">Child Educational Sponsorship Calculator</h2>
          <p className="section-desc">
            Directly impact the life of an underprivileged child in Mumbai. 
            Choose an ongoing sponsorship tier or tailor a custom contribution.
          </p>
        </div>

        <div className={styles.calcCard}>
          {/* Controls Column */}
          <div className={styles.calcControls}>
            {/* Frequency Toggle */}
            <div className={styles.frequencyToggle}>
              <button
                className={`${styles.freqBtn} ${frequency === "monthly" ? styles.freqBtnActive : ""}`}
                onClick={() => setFrequency("monthly")}
              >
                Monthly Support
              </button>
              <button
                className={`${styles.freqBtn} ${frequency === "annually" ? styles.freqBtnActive : ""}`}
                onClick={() => setFrequency("annually")}
              >
                Annual Pledge (12 Months)
              </button>
            </div>

            {/* Tiers Grid */}
            <div className={styles.tiersGrid}>
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  onClick={() => handleSelectTier(tier.id)}
                  className={`${styles.tierCard} ${selectedTier === tier.id ? styles.tierCardActive : ""}`}
                >
                  <div className={styles.tierAmount}>₹{tier.amount.toLocaleString("en-IN")}</div>
                  <div className={styles.tierTitle}>{tier.title}</div>
                  <div className={styles.tierDescription}>{tier.desc}</div>
                </div>
              ))}

              <div
                onClick={() => setSelectedTier("custom")}
                className={`${styles.tierCard} ${selectedTier === "custom" ? styles.tierCardActive : ""}`}
              >
                <div className={styles.tierAmount}>Custom</div>
                <div className={styles.tierTitle}>Choose Amount</div>
                <div className={styles.tierDescription}>Pledge an amount that suits your charitable goal.</div>
              </div>
            </div>

            {/* Custom Amount Field */}
            {selectedTier === "custom" && (
              <div className={styles.customInputWrapper}>
                <label htmlFor="custom-amount-input">Enter Monthly Amount (INR):</label>
                <div className={styles.customInputGroup}>
                  <span className={styles.rupeePrefix}>₹</span>
                  <input
                    id="custom-amount-input"
                    type="text"
                    placeholder="e.g. 2500"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className={styles.customInput}
                  />
                </div>
              </div>
            )}

            <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              🔒 100% of educational sponsorships are deployed directly to student tuition, books, 
              medical camps, and home caseworker visits. Zero hidden administrative leakages.
            </p>
          </div>

          {/* Impact Summary Column */}
          <div className={styles.impactSummaryCard}>
            <div>
              <div className={styles.summaryHeader}>
                <h4>Your Sponsorship Pledge</h4>
                <p>Tax Exemption Certificate (80G) generated instantly upon receipt.</p>
              </div>

              <div className={styles.totalDisplay}>
                <div className={styles.totalLabel}>
                  Total {frequency === "annually" ? "Annual" : "Monthly"} Pledge
                </div>
                <div className={styles.totalAmount}>
                  ₹{calculatedTotal.toLocaleString("en-IN")}
                </div>
                <div className={styles.totalPeriod}>
                  {frequency === "annually" ? "Billed once per year" : "Billed monthly"}
                </div>
              </div>

              <div className={styles.breakdownList}>
                {(activeTierObj?.deliverables || [
                  "Essential schooling fees and textbooks",
                  "Nutrition supplements and pediatric care",
                  "Caseworker monitoring and family preservation",
                ]).map((item, idx) => (
                  <div key={idx} className={styles.breakdownItem}>
                    <span className={styles.breakdownCheck}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={() => onOpenDonation(calculatedTotal, frequency)}
                className="btn btn-primary btn-lg"
                style={{ width: "100%" }}
                id="sponsor-pledge-btn"
              >
                Pledge Sponsorship (₹{calculatedTotal.toLocaleString("en-IN")})
              </button>

              <div className={styles.taxNotice}>
                ✓ Eligible for 50% Tax Deduction under Section 80G (PAN required)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
