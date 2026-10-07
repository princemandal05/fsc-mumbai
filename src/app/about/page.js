"use client";

import Link from "next/link";
import HeritageTimeline from "@/components/HeritageTimeline";
import { useDonation } from "@/context/DonationContext";

export default function AboutPage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Page Hero Header */}
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
            backgroundColor: "var(--color-navy-soft)",
            color: "var(--color-navy)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}>
            🏛️ Founded in 1955 • 70 Years of Legacy
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Empowering the Family as the Core Unit of Society
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Family Service Centre (FSC) is a secular, non-profit social development organization in Mumbai dedicated to non-institutional child protection, preventive family care, and sustainable community empowerment.
          </p>
        </div>
      </section>

      {/* Vision, Mission & Core Values */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div className="card" style={{ padding: "2.5rem 2rem" }}>
              <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>🎯</div>
              <h3 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Our Vision</h3>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                A compassionate society where every child grows in an atmosphere of warmth, love, and protection within a nurturing family, protected from institutionalization, neglect, and exploitation.
              </p>
            </div>

            <div className="card" style={{ padding: "2.5rem 2rem" }}>
              <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>🌱</div>
              <h3 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Our Mission</h3>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                To empower vulnerable families through non-institutional preventive programs, facilitate legal transparent adoptions under CARA, sustain children in school via sponsorships, and mobilize urban grassroots communities.
              </p>
            </div>

            <div className="card" style={{ padding: "2.5rem 2rem" }}>
              <div style={{ fontSize: "2.25rem", marginBottom: "1rem" }}>🤝</div>
              <h3 style={{ fontSize: "1.45rem", marginBottom: "0.75rem", color: "var(--color-navy)" }}>Nirmala Niketan Roots</h3>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.65 }}>
                Professionalized in 1961 under the academic guidance of the renowned College of Social Work, Nirmala Niketan, establishing highest ethics, structured casework standards, and continuous field research in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 70-Year Historical Milestones & Leadership */}
      <HeritageTimeline />

      {/* Accreditations & Transparent Governance */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-badge forest">Legal Compliance & Transparency</div>
            <h2 className="section-title">Official Recognitions & Certifications</h2>
            <p className="section-desc">
              We uphold highest standards of financial probity, statutory accountability, and child safety compliance.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <div className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎖️</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>Ahilyadevi Holkar Award</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Conferred by the Government of Maharashtra for pioneering contributions to women and child development.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>⚖️</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>CARA Recognized RIPA</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Licensed by State Government and Central Adoption Resource Authority for in-country & inter-country adoption.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📜</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>Credibility Alliance</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Full accreditation under Desirable Norms for organizational transparency and governance integrity.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🧾</div>
              <h4 style={{ fontSize: "1.1rem", marginBottom: "0.35rem" }}>80G & FCRA Certified</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                Registered under Section 80G for 50% tax relief on all donations, and Foreign Contribution Regulation Act (FCRA).
              </p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Link href="/contact" className="btn btn-secondary btn-lg" style={{ marginRight: "1rem" }}>
              Connect with Our Leadership
            </Link>
            <button onClick={() => openDonation(3000, "monthly")} className="btn btn-primary btn-lg">
              Support Our Mission
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
