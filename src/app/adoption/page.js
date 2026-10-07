"use client";

import Link from "next/link";
import AdoptionStepper from "@/components/AdoptionStepper";
import { useDonation } from "@/context/DonationContext";

export default function AdoptionPage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Header Banner */}
      <section style={{
        padding: "4.5rem 0 3.5rem 0",
        background: "radial-gradient(circle at 10% 20%, rgba(27, 102, 76, 0.06) 0%, transparent 40%), var(--color-bg-page)",
        borderBottom: "1px solid var(--color-border)"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 0.9rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--color-forest-soft)",
            color: "var(--color-forest)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}>
            ⚖️ CARA Recognized Specialized Adoption Agency (RIPA)
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Legal Child Adoption with Integrity & Warmth
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Family Service Centre is authorized by the Government of Maharashtra and the Central Adoption Resource Authority (CARA) to guide prospective parents through the legal adoption journey in India and internationally.
          </p>
        </div>
      </section>

      {/* Trust & Eligibility Overview */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-terracotta)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ✦ Over 500 Forever Families Formed
              </span>
              <h2 style={{ fontSize: "2.1rem", margin: "0.5rem 0 1.25rem 0", color: "var(--color-navy)", lineHeight: 1.25 }}>
                Our Commitment to Child-Centric Legal Placement
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Every child has the fundamental right to grow up in a loving, permanent home. As one of Mumbai’s oldest licensed adoption agencies, Family Service Centre ensures every step adheres strictly to the Juvenile Justice Act and statutory CARA regulations.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
                Our licensed, experienced social workers conduct sensitive Home Study Reports (HSR), provide pre-adoption preparation, and offer continuous post-adoption family guidance for 2 years following court orders.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#cara-steps" className="btn btn-primary">
                  View 5-Step Process ↓
                </a>
                <Link href="/contact" className="btn btn-outline">
                  Book Confidential Consultation
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "4px solid #FFFFFF" }}>
              <img
                src="/images/adoption_family.jpg"
                alt="Loving adoptive parents with child in Mumbai"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stepper & FAQs Component */}
      <div id="cara-steps">
        <AdoptionStepper />
      </div>

      {/* Statutory Guidance Box */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <div style={{
            background: "var(--color-bg-subtle)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            padding: "2.5rem",
            textAlign: "center"
          }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--color-navy)", marginBottom: "0.75rem" }}>
              Important Statutory Notice Regarding Adoption
            </h3>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
              Adoption of orphaned, abandoned, or surrendered children in India is strictly governed by CARA under the Ministry of Women and Child Development. 
              <strong> Direct adoption or monetary transactions for adopting a child are strictly illegal and punishable under the Juvenile Justice Act.</strong> 
              All registrations must take place via <a href="https://cara.wcd.gov.in" target="_blank" rel="noreferrer" style={{ color: "var(--color-terracotta)", fontWeight: 700, textDecoration: "underline" }}>cara.wcd.gov.in</a>.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn btn-secondary">
                Speak with FSC Adoption Department
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
