"use client";

import Link from "next/link";
import FocusAreas from "@/components/FocusAreas";
import { useDonation } from "@/context/DonationContext";

export default function ProgramsPage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Header Banner */}
      <section style={{
        padding: "4.5rem 0 3.5rem 0",
        background: "radial-gradient(circle at 10% 20%, rgba(217, 136, 38, 0.06) 0%, transparent 40%), var(--color-bg-page)",
        borderBottom: "1px solid var(--color-border)"
      }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "860px" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 0.9rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--color-gold-soft)",
            color: "var(--color-gold)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}>
            🤝 Grassroots Empowerment & Crisis Care
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Community Interventions, BSY & Counseling
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Working directly in urban slum clusters and high-density settlements in Mumbai, 
            we preserve families in distress, mobilize women&apos;s self-help groups, and provide professional psychological guidance.
          </p>
        </div>
      </section>

      {/* Interactive Tabs Showcase */}
      <FocusAreas />

      {/* Deep-Dive Section 1: Bal Sangopan Yojana (BSY) */}
      <section className="section section-alt" id="bsy">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-terracotta)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ✦ State Crisis Intervention Scheme
              </span>
              <h2 style={{ fontSize: "2.1rem", margin: "0.5rem 0 1.25rem 0", color: "var(--color-navy)", lineHeight: 1.25 }}>
                Bal Sangopan Yojana (BSY): Keeping Children Out of Institutions
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                When sudden tragedy strikes—such as the death of a family&apos;s primary breadwinner, terminal hospitalization, desertion, or imprisonment—families often face catastrophic poverty. 
                Without help, surviving single parents are often pressured to surrender their children to orphanages.
              </p>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.75rem" }}>
                FSC has been a pioneer in foster care since 1964 and has partnered with the Government of Maharashtra since 1994 to implement the Bal Sangopan Yojana. 
                We provide monthly subsistence stipends, grocery aid, school linkage, and case management to keep over 50 crisis families whole each year.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-primary">
                  Inquire About BSY Scheme
                </Link>
                <button onClick={() => openDonation(5000, "monthly")} className="btn btn-outline">
                  Sponsor a Crisis Family (₹5,000/mo)
                </button>
              </div>
            </div>

            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "4px solid #FFFFFF" }}>
              <img
                src="/images/adoption_family.jpg"
                alt="Family supported by Bal Sangopan Yojana foster grant"
                style={{ width: "100%", height: "380px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Section 2: Grassroots Community Development & SHGs */}
      <section className="section" id="community">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3.5rem", alignItems: "center" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "4px solid #FFFFFF" }}>
              <img
                src="/images/community_women.jpg"
                alt="Empowered Indian women in a community circle in Mumbai"
                style={{ width: "100%", height: "380px", objectFit: "cover" }}
              />
            </div>

            <div>
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-forest)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                ✦ Reaching 100,000+ Urban Slum Residents
              </span>
              <h2 style={{ fontSize: "2.1rem", margin: "0.5rem 0 1.25rem 0", color: "var(--color-navy)", lineHeight: 1.25 }}>
                Community Mobilization & Women&apos;s Empowerment
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                Initiated in 1997, our community intervention approach operates across six vulnerable settlements in Colaba, Cuffe Parade, and Bhayandar. 
                We work on the principles of community initiative, participation, and collective ownership.
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
                <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "var(--color-text-main)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span>
                  <span><strong>Women&apos;s Self-Help Groups (SHGs):</strong> Fostering micro-savings, bank linkages, financial literacy, and livelihood micro-enterprises.</span>
                </li>
                <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "var(--color-text-main)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span>
                  <span><strong>Community Study Centers:</strong> Providing quiet, illuminated spaces with tutors for children living in cramped urban slums.</span>
                </li>
                <li style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", color: "var(--color-text-main)", fontSize: "0.95rem" }}>
                  <span style={{ color: "var(--color-forest)", fontWeight: 800 }}>✓</span>
                  <span><strong>Adolescent Life Skills:</strong> Training in leadership, gender awareness, menstrual hygiene, and digital literacy.</span>
                </li>
              </ul>

              <Link href="/stories" className="btn btn-secondary">
                Read Community Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep-Dive Section 3: Child Guidance & Counseling */}
      <section className="section section-alt" id="counseling">
        <div className="container" style={{ maxWidth: "860px", textAlign: "center" }}>
          <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-terracotta)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            ✦ Specialized Wing Established in 2008
          </span>
          <h2 style={{ fontSize: "2.2rem", margin: "0.5rem 0 1rem 0", color: "var(--color-navy)" }}>
            Child Guidance & Family Counseling Unit
          </h2>
          <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "2rem" }}>
            Emotional health is crucial for a child&apos;s development. Our qualified psychologists and counselors work directly with children and parents to overcome ADHD, dyslexia, severe anxiety, and domestic trauma.
          </p>

          <div style={{
            background: "#FFFFFF",
            padding: "2.5rem",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            textAlign: "left",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2rem"
          }}>
            <div>
              <h4 style={{ color: "var(--color-navy)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Services for Children & Youth:
              </h4>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                <li>Psychometric & learning disability evaluations</li>
                <li>Therapeutic interventions for ADHD & behavioral challenges</li>
                <li>Exam stress reduction and emotional coping mechanisms</li>
                <li>Trauma counseling for children facing family conflict</li>
              </ul>
            </div>

            <div>
              <h4 style={{ color: "var(--color-navy)", fontSize: "1.15rem", marginBottom: "0.5rem" }}>
                Services for Parents & Caregivers:
              </h4>
              <ul style={{ listStyle: "disc", paddingLeft: "1.25rem", color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                <li>Positive parenting workshops and constructive discipline</li>
                <li>Marital and family mediation sessions</li>
                <li>Support groups for parents of neurodiverse children</li>
                <li>Confidential guidance available at subsidized rates</li>
              </ul>
            </div>
          </div>

          <Link href="/contact" className="btn btn-primary btn-lg">
            Schedule a Confidential Counseling Intake
          </Link>
        </div>
      </section>
    </main>
  );
}
