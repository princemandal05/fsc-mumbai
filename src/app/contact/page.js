"use client";

import ContactIntake from "@/components/ContactIntake";

export default function ContactPage() {
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
            backgroundColor: "var(--color-navy-soft)",
            color: "var(--color-navy)",
            fontWeight: 700,
            fontSize: "0.8125rem",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "1rem"
          }}>
            📍 Colaba Headquarters • South Mumbai
          </div>
          <h1 style={{ fontSize: "clamp(2.3rem, 4vw, 3.2rem)", fontWeight: 800, color: "var(--color-navy)", marginBottom: "1.25rem", lineHeight: 1.2 }}>
            Contact Family Service Centre
          </h1>
          <p style={{ fontSize: "1.15rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>
            Reach out to our caseworkers, adoption officers, or counseling unit. 
            All adoption and counseling inquiries are handled with strict privacy and legal care.
          </p>
        </div>
      </section>

      {/* Main Contact Card & Multi-category Intake Form */}
      <ContactIntake />

      {/* Transit & Emergency Quick Access Info */}
      <section className="section section-alt" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            <div className="card" style={{ padding: "1.75rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚆</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.35rem" }}>Getting to Our Office</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                Located at Eucharistic Congress Building No. III, 5 Convent Street, Colaba. Accessible via Chhatrapati Shivaji Maharaj Terminus (CSMT) and Churchgate railway stations by taxi or BEST bus.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🆘</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.35rem" }}>Child in Crisis / Emergency</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                If you encounter an abandoned or distressed child in Mumbai, immediately contact the national 24/7 Child Helpline at <strong>1098</strong> or contact our office during working hours.
              </p>
            </div>

            <div className="card" style={{ padding: "1.75rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💼</div>
              <h4 style={{ fontSize: "1.15rem", color: "var(--color-navy)", marginBottom: "0.35rem" }}>CSR & Corporate Partnerships</h4>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                FSC welcomes corporate social responsibility partnerships for educational sponsorship, community study centers, and nutrition drives. Email us at <a href="mailto:director@fscmumbai.org" style={{ color: "var(--color-terracotta)", fontWeight: 700 }}>director@fscmumbai.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
