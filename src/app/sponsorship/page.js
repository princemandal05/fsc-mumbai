"use client";

import Link from "next/link";
import SponsorshipCalculator from "@/components/SponsorshipCalculator";
import { useDonation } from "@/context/DonationContext";

export default function SponsorshipPage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Page Header */}
      <section style={{
        padding: "4.5rem 0 3.5rem 0",
        background: "radial-gradient(circle at 10% 20%, rgba(217, 83, 56, 0.06) 0%, transparent 40%), var(--color-bg-page)",
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
            🎓 Since 1962 • 1,200+ Scholars Supported
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Sponsor an Underprivileged Child&apos;s Education
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Poverty forces thousands of children into child labor and early dropouts. 
            For ₹1,500/month, you provide full tuition, school supplies, nutrition, and home caseworker support.
          </p>
        </div>
      </section>

      {/* Philosophy of Holistic Sponsorship */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-forest)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ✦ The Child as an Entry Point
              </span>
              <h2 style={{ fontSize: "2.1rem", margin: "0.5rem 0 1.25rem 0", color: "var(--color-navy)", lineHeight: 1.25 }}>
                More Than Financial Aid: A Family-Centered Partnership
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                At Family Service Centre, we view sponsorship as much more than a scholarship handout. 
                We use the child as an <strong>&ldquo;entry point&rdquo;</strong> to assess the needs of the entire family. 
                Our dedicated social workers conduct regular home visits, parent-teacher conferences, and provide remedial tutoring.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
                Over our six decades of sponsorship interventions, supported students have achieved a <strong>100% pass rate in SSC exams</strong>, 
                with scores of alumni graduating into engineering, banking, commerce, and corporate careers.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="#calculator" className="btn btn-primary">
                  Use Sponsorship Calculator ↓
                </a>
                <Link href="/stories" className="btn btn-outline">
                  Read Alumni Success Stories
                </Link>
              </div>
            </div>

            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "4px solid #FFFFFF" }}>
              <img
                src="/images/hero_education.jpg"
                alt="Smiling sponsored school students in Mumbai"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Sponsorship Calculator */}
      <div id="calculator">
        <SponsorshipCalculator onOpenDonation={openDonation} />
      </div>

      {/* 80G Tax Exemption & Accountability */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-badge navy">Financial Integrity & Tax Benefit</div>
            <h2 className="section-title">Section 80G Tax Exemption (50% Deduction)</h2>
            <p className="section-desc">
              Family Service Centre is certified under Section 80G of the Income Tax Act, 1961. 
              All contributions made by Indian taxpayers qualify for a 50% tax deduction.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.75rem" }}>
            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚡</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>Instant Digital 80G Receipt</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                Your formal 80G tax receipt is instantly generated and emailed upon successful donation, complete with unique trust registration numbers for tax filing.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>Annual Academic Report</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                Annual sponsors receive progress updates, school marks card copies, and personal greeting letters from their sponsored child.
              </p>
            </div>

            <div className="card" style={{ padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🛡️</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.5rem" }}>Credibility Alliance Accredited</h4>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                FSC adheres to stringent non-profit governance standards, ensuring zero administrative leakages and audited financial statements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
