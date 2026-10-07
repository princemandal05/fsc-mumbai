"use client";

import Link from "next/link";
import { useDonation } from "@/context/DonationContext";
import styles from "./Home.module.css";

export default function HomePage() {
  const { openDonation } = useDonation();

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroBadge}>
                ✨ 70 Years of Service (1955 – Present)
              </div>

              <h1 className={styles.heroTitle}>
                Every Child Deserves a Family. <br />
                <span className={styles.heroTitleAccent}>Every Family Deserves a Future.</span>
              </h1>

              <p className={styles.heroDesc}>
                Family Service Centre (FSC) is a secular, state-accredited child welfare trust in South Mumbai. 
                We keep children thriving in families through <strong>licensed legal adoptions (CARA RIPA)</strong>, 
                <strong> educational sponsorships</strong>, <strong>Bal Sangopan crisis support</strong>, and <strong>grassroots community action</strong>.
              </p>

              <div className={styles.heroCtas}>
                <Link href="/sponsorship" className="btn btn-primary btn-lg">
                  Sponsor a Child&apos;s Education →
                </Link>
                <Link href="/adoption" className="btn btn-outline btn-lg">
                  Explore Legal Adoption
                </Link>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>500+</span>
                  <span className={styles.statLbl}>Legal Adoptions</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>1,200+</span>
                  <span className={styles.statLbl}>Sponsored Scholars</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>100,000+</span>
                  <span className={styles.statLbl}>Community Reach</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className={styles.visualWrapper}>
              <div className={styles.visualFrame}>
                <img
                  src="/images/hero_education.jpg"
                  alt="Children smiling with school books in Mumbai classroom"
                  className={styles.heroImage}
                />
              </div>

              <div className={styles.floatingTag}>
                <div className={styles.tagIcon}>🎓</div>
                <div>
                  <div className={styles.tagTitle}>₹1,500/Month</div>
                  <div className={styles.tagSub}>Secures tuition, uniform & nutrition for 1 student</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Five Core Pillars Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge navy">Our Programs</div>
            <h2 className="section-title">Comprehensive Child Welfare Services</h2>
            <p className="section-desc">
              We provide family-centered, preventive interventions across five core specialized divisions.
            </p>
          </div>

          <div className={styles.programsGrid}>
            {/* Card 1: Adoption */}
            <div className={styles.programCard}>
              <div className={styles.cardIcon}>🏠</div>
              <span className={styles.cardEyebrow}>CARA RIPA Licensed</span>
              <h3 className={styles.cardTitle}>CARA Legal Adoption</h3>
              <p className={styles.cardText}>
                Authorized Specialized Adoption Agency facilitating legal in-country and inter-country placement, certified Home Study Reports (HSR), and post-adoption care.
              </p>
              <div>
                <Link href="/adoption" className="btn btn-outline btn-sm">
                  Adoption Guide & Steps →
                </Link>
              </div>
            </div>

            {/* Card 2: Sponsorship */}
            <div className={styles.programCard}>
              <div className={styles.cardIcon}>📚</div>
              <span className={styles.cardEyebrow} style={{ color: "var(--color-forest)" }}>
                Since 1962 • 80G Tax Exemption
              </span>
              <h3 className={styles.cardTitle}>Educational Sponsorship</h3>
              <p className={styles.cardText}>
                Shielding children from child labor and dropouts with tuition, school kits, nutrition, and home visits by professional social workers.
              </p>
              <div>
                <Link href="/sponsorship" className="btn btn-outline btn-sm">
                  Calculate Sponsorship →
                </Link>
              </div>
            </div>

            {/* Card 3: Bal Sangopan Yojana */}
            <div className={styles.programCard}>
              <div className={styles.cardIcon}>🛡️</div>
              <span className={styles.cardEyebrow} style={{ color: "var(--color-primary)" }}>
                Govt. of Maharashtra Scheme
              </span>
              <h3 className={styles.cardTitle}>Bal Sangopan Yojana</h3>
              <p className={styles.cardText}>
                State-partnered crisis foster care stipends sustaining families affected by death of breadwinner or severe illness to prevent child separation.
              </p>
              <div>
                <Link href="/programs#bsy" className="btn btn-outline btn-sm">
                  Crisis Care Details →
                </Link>
              </div>
            </div>

            {/* Card 4: Community Interventions */}
            <div className={styles.programCard}>
              <div className={styles.cardIcon}>🤝</div>
              <span className={styles.cardEyebrow} style={{ color: "var(--color-gold)" }}>
                Colaba, Cuffe Parade, Bhayandar
              </span>
              <h3 className={styles.cardTitle}>Community Interventions</h3>
              <p className={styles.cardText}>
                Organizing women&apos;s self-help groups (SHGs), operating neighborhood study centers, and fostering health camps across high-density urban slums.
              </p>
              <div>
                <Link href="/programs#community" className="btn btn-outline btn-sm">
                  Explore Grassroots Work →
                </Link>
              </div>
            </div>

            {/* Card 5: Child Guidance & Counseling */}
            <div className={styles.programCard}>
              <div className={styles.cardIcon}>🧠</div>
              <span className={styles.cardEyebrow}>Specialized Unit Est. 2008</span>
              <h3 className={styles.cardTitle}>Child Guidance Counseling</h3>
              <p className={styles.cardText}>
                Dedicated psycho-social counseling for children facing ADHD, learning disabilities, behavioral strain, and adolescent emotional trauma.
              </p>
              <div>
                <Link href="/programs#counseling" className="btn btn-outline btn-sm">
                  Consultation Services →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section */}
      <section className="section section-alt">
        <div className="container">
          <div className={styles.spotlightCard}>
            <div>
              <span className="section-badge">✦ Featured Transformation</span>
              <h2 style={{ fontSize: "2.1rem", margin: "var(--space-3) 0 var(--space-4) 0", lineHeight: 1.25 }}>
                &ldquo;They didn&apos;t just pay my fees; they walked with my family through every hardship.&rdquo;
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "var(--space-6)" }}>
                Pooja was on the verge of discontinuing school in 7th grade after her father&apos;s incapacitation. 
                With FSC sponsorship and regular home visits by social caseworkers, she completed her Bachelor of Commerce (B.Com) with distinction and is now employed with a corporate firm in South Mumbai.
              </p>
              <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
                <Link href="/stories" className="btn btn-primary">
                  Read More Success Stories →
                </Link>
                <button onClick={() => openDonation(1500, "monthly")} className="btn btn-outline">
                  Sponsor a Child Like Pooja
                </button>
              </div>
            </div>

            <div className={styles.spotlightImage}>
              <img
                src="/images/adoption_family.jpg"
                alt="Happy Indian family supported through Family Service Centre"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Direct CTA Banner */}
      <section className={styles.ctaBanner}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2 className={styles.ctaTitle}>
            Help Keep a Family Together Today
          </h2>
          <p className={styles.ctaDesc}>
            Whether through ₹1,500 monthly educational sponsorship or a one-time crisis donation, 
            your contribution directly protects vulnerable children in Mumbai. All donations receive Section 80G tax receipts.
          </p>
          <div className={styles.ctaButtons}>
            <button onClick={() => openDonation(1500, "monthly")} className="btn btn-primary btn-lg">
              Make an 80G Tax-Deductible Gift
            </button>
            <Link href="/contact" className="btn btn-white btn-lg">
              Contact Colaba Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
