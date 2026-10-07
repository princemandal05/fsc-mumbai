"use client";

import styles from "./HeritageTimeline.module.css";

const TIMELINE = [
  {
    year: "1955",
    title: "Grassroots Inception",
    desc: "Founded by an intrepid group of compassionate women in Mumbai driven to support underprivileged mothers and orphaned infants.",
  },
  {
    year: "1961",
    title: "Professionalization with Nirmala Niketan",
    desc: "Integrated under the scholarly and professional mentorship of the College of Social Work, Nirmala Niketan, establishing structured casework standards.",
  },
  {
    year: "1964",
    title: "Pioneering Foster Care",
    desc: "Initiated India's earliest non-institutional foster care models under the auspices of the Central Social Welfare Board.",
  },
  {
    year: "1994",
    title: "Bal Sangopan Yojana State Partnership",
    desc: "Formalized crisis partnership with the Government of Maharashtra to provide foster care stipends and prevent child institutionalization.",
  },
  {
    year: "1997",
    title: "Community Interventions Rollout",
    desc: "Expanded direct field presence into high-density urban slum pockets across Colaba, Cuffe Parade, and Bhayandar.",
  },
  {
    year: "2008",
    title: "Specialized Child Guidance Unit",
    desc: "Established a dedicated psycho-social counseling wing to support children with ADHD, learning difficulties, and family trauma.",
  },
  {
    year: "Present",
    title: "Accredited Excellence & Beyond",
    desc: "Recipient of the Ahilyadevi Holkar Award, CARA RIPA authorization, and continuous Credibility Alliance accreditation.",
  },
];

const LEADERS = [
  {
    role: "President / Managing Committee",
    name: "Mr. Vijendra Singh",
    affiliation: "Associate Vice President, The Indian Hotels Company Ltd. (IHCL)",
  },
  {
    role: "Joint Director - Programs",
    name: "Ms. Sheetal Rebello",
    affiliation: "Child Protection, CARA Adoption & Government Liaison Specialist",
  },
  {
    role: "Joint Director - Operations",
    name: "Ms. Avanti More",
    affiliation: "Community Interventions, Sponsorship & Social Work Administration",
  },
];

export default function HeritageTimeline() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-badge navy">Seven Decades of Trust</div>
          <h2 className="section-title">Our Heritage & Institutional Milestones</h2>
          <p className="section-desc">
            Since 1955, Family Service Centre has stayed true to its founding conviction: 
            the most powerful protector of a child is a secure, thriving family.
          </p>
        </div>

        {/* Timeline Component */}
        <div className={styles.timelineWrapper}>
          <div className={styles.timelineLine}></div>
          {TIMELINE.map((item, idx) => (
            <div key={idx} className={styles.timelineItem}>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineText}>{item.desc}</p>
                <div className={styles.timelineNode}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership & Governance Panel */}
        <div className={styles.leadershipSection}>
          <div className={styles.leadershipHeader}>
            <h3>Ethical Governance & Leadership</h3>
            <p>
              Managed under strict adherence to the Bombay Public Trusts Act, Credibility Alliance norms, 
              and the Ministry of Women & Child Development statutory mandates.
            </p>
          </div>

          <div className={styles.leadersGrid}>
            {LEADERS.map((leader, idx) => (
              <div key={idx} className={styles.leaderCard}>
                <div className={styles.leaderRole}>{leader.role}</div>
                <div className={styles.leaderName}>{leader.name}</div>
                <div className={styles.leaderAffiliation}>{leader.affiliation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
