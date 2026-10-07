"use client";

import styles from "./Hero.module.css";

export default function Hero({ onOpenDonation }) {
  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div className={styles.heroGrid}>
          {/* Left Text Narrative */}
          <div className={styles.heroContent}>
            <div className={styles.badgePill}>
              <span>✨ 70 Years of Service (1955 – Present)</span>
            </div>

            <h1 className={styles.headline}>
              Every Child Deserves a Family. <br />
              <span className={styles.headlineGradient}>Every Family Deserves a Future.</span>
            </h1>

            <p className={styles.subheadline}>
              Family Service Centre (FSC) is a secular, accredited child welfare non-profit based in South Mumbai. 
              We protect children by strengthening the family through <strong>licensed legal adoptions</strong>, 
              <strong> educational sponsorships</strong>, <strong>Bal Sangopan crisis support</strong>, and <strong>grassroots community action</strong>.
            </p>

            <div className={styles.ctaGroup}>
              <a href="#sponsorship" className="btn btn-primary btn-lg">
                Sponsor a Child&apos;s Education
              </a>
              <a href="#adoption" className="btn btn-outline btn-lg">
                Explore CARA Adoption
              </a>
            </div>

            <div className={styles.heroStatsRow}>
              <div className={styles.miniStat}>
                <span className={styles.miniStatNumber}>500+</span>
                <span className={styles.miniStatLabel}>Legal Adoptions Placed</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatNumber}>1,200+</span>
                <span className={styles.miniStatLabel}>Students Sponsored</span>
              </div>
              <div className={styles.miniStat}>
                <span className={styles.miniStatNumber}>100k+</span>
                <span className={styles.miniStatLabel}>Community Lives Reached</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Column */}
          <div className={styles.visualWrapper}>
            <div className={styles.imageFrame}>
              <img
                src="/images/hero_education.jpg"
                alt="Children in Mumbai empowered through Family Service Centre education programs"
                className={styles.heroImg}
              />
            </div>

            {/* Floating Top Pill */}
            <div className={styles.floatingBadgeRight}>
              <span>🏛️ CARA RIPA Licensed</span>
            </div>

            {/* Floating Bottom Card */}
            <div className={styles.floatingBadge}>
              <div className={styles.floatingIcon}>🎓</div>
              <div>
                <div className={styles.floatingTitle}>₹1,500/Month</div>
                <div className={styles.floatingSub}>Provides full tuition, books, uniform & nutrition for 1 student</div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Credentials Ribbon */}
        <div className={styles.trustRibbon}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
            </div>
            <div>
              <div className={styles.trustTitle}>Ahilyadevi Holkar Award</div>
              <div className={styles.trustSub}>Govt. of Maharashtra State Honor</div>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div className={styles.trustTitle}>CARA Recognized Agency</div>
              <div className={styles.trustSub}>Licensed In-Country & Inter-Country RIPA</div>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className={styles.trustTitle}>Credibility Alliance</div>
              <div className={styles.trustSub}>Full Accreditation for Financial Integrity</div>
            </div>
          </div>

          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 7h10M7 12h10M7 17h6"/></svg>
            </div>
            <div>
              <div className={styles.trustTitle}>Tax Exemption 80G</div>
              <div className={styles.trustSub}>50% Tax Exemption on All Donations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
