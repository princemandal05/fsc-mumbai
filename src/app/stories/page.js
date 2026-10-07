"use client";

import Link from "next/link";
import SuccessStories from "@/components/SuccessStories";
import { useDonation } from "@/context/DonationContext";

export default function StoriesPage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Header Banner */}
      <section style={{
        padding: "4.5rem 0 3.5rem 0",
        background: "radial-gradient(circle at 10% 20%, rgba(11, 40, 68, 0.05) 0%, transparent 40%), var(--color-bg-page)",
        borderBottom: "1px solid var(--color-border)"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 0.9rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--color-terracotta-soft)",
            color: "var(--color-terracotta)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}>
            🌟 Voices of Transformation
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Real Stories of Hope, Love & Resilience
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Behind every number is a human life. Explore verified journeys of children educated through sponsorship, families formed through legal adoption, and mothers empowered through community self-help groups.
          </p>
        </div>
      </section>

      {/* Filterable Success Stories Component */}
      <SuccessStories />

      {/* Call to Action Banner */}
      <section className="section" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <div style={{
            background: "linear-gradient(135deg, var(--color-navy) 0%, var(--color-navy-dark) 100%)",
            color: "#FFFFFF",
            padding: "3.5rem 2.5rem",
            borderRadius: "var(--radius-xl)",
            boxShadow: "var(--shadow-lg)"
          }}>
            <h2 style={{ color: "#FFFFFF", fontSize: "2rem", marginBottom: "1rem" }}>
              Be the Reason for the Next Success Story
            </h2>
            <p style={{ color: "#B8CCE0", fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "2rem", maxWidth: "620px", margin: "0 auto 2rem auto" }}>
              Your pledge of ₹1,500/month keeps a child in school and out of hazardous labor, or helps sustain a family facing sudden bereavement.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <button onClick={() => openDonation(1500, "monthly")} className="btn btn-primary btn-lg">
                Sponsor a Child Today
              </button>
              <Link href="/contact" className="btn btn-white btn-lg">
                Volunteer with FSC
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
