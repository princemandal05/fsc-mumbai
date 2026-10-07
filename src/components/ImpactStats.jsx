"use client";

import styles from "./ImpactStats.module.css";

const STATS_DATA = [
  {
    icon: "🏛️",
    value: "70+",
    label: "Years of Dedication",
    sub: "Founded in 1955, protecting Mumbai families across 7 decades",
  },
  {
    icon: "🏠",
    value: "500+",
    label: "Forever Homes",
    sub: "Children placed into loving families through CARA adoption",
  },
  {
    icon: "📚",
    value: "1,200+",
    label: "Scholars Nurtured",
    sub: "Children shielded from dropouts with holistic schooling aid",
  },
  {
    icon: "🤝",
    value: "100k+",
    label: "Community Members",
    sub: "Empowered in Colaba, Cuffe Parade & Bhayandar slums",
  },
  {
    icon: "🛡️",
    value: "50+",
    label: "Crisis Families / Year",
    sub: "Prevented from child separation under Bal Sangopan Yojana",
  },
];

export default function ImpactStats({ onOpenDonation }) {
  return (
    <section className={styles.impactSection} id="impact">
      <div className="container">
        <div className={styles.impactGrid}>
          {STATS_DATA.map((item, idx) => (
            <div key={idx} className={styles.impactCard}>
              <div className={styles.statIcon}>{item.icon}</div>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
              <div className={styles.statSub}>{item.sub}</div>
            </div>
          ))}
        </div>

        {/* Preventive Philosophy Banner */}
        <div className={styles.philosophyBanner}>
          <div className={styles.philosophyText}>
            <h3>Our Core Principle: Non-Institutional Child Protection</h3>
            <p>
              We firmly believe that institutional orphanages should always be the last resort. 
              By providing targeted crisis subsidies, educational backing, and legal foster care, 
              we help vulnerable biological and foster families remain whole.
            </p>
          </div>
          <div className={styles.philosophyAction}>
            <button onClick={onOpenDonation} className="btn btn-primary btn-lg">
              Support Our Mission
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
