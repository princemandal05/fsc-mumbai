"use client";

import { useState } from "react";
import styles from "./FocusAreas.module.css";

const PROGRAMS = [
  {
    id: "adoption",
    category: "CARA Recognized RIPA",
    title: "Legal Child Adoption & Placement",
    desc: "Family Service Centre is licensed by the Government of Maharashtra and recognized by the Central Adoption Resource Authority (CARA) as a specialized adoption agency for in-country and inter-country adoptions. We believe every child deserves a loving, permanent home.",
    features: [
      "Rigorous Home Study Reports (HSR) conducted by licensed professional social workers",
      "Comprehensive pre-adoption preparation, psycho-social counseling, and legal documentation",
      "Seamless processing through the Central Adoption Resource Authority (CARINGS portal)",
      "Dedicated post-placement monitoring, guidance, and ongoing family developmental support",
    ],
    image: "/images/adoption_family.jpg",
    alt: "Happy Indian parents with adopted child in Mumbai",
    overlayText: "Over 500 children placed in permanent, loving families through strict legal adherence.",
    ctaText: "View CARA Adoption Steps",
    ctaLink: "#adoption",
  },
  {
    id: "sponsorship",
    category: "Preventive Education Since 1962",
    title: "Educational Child Sponsorship",
    desc: "Initiated in 1962, our educational sponsorship program ensures children from economically disadvantaged families do not drop out to work. We use the child as an 'entry point' to uplift the entire household toward self-reliance.",
    features: [
      "Full coverage of school & college tuition fees, textbooks, uniforms, and stationery",
      "Nutritional supplements and routine pediatric health checkups to combat malnutrition",
      "Regular home & school visits by dedicated caseworkers to monitor academic performance",
      "100% SSC pass rate among supported students over consecutive academic years",
    ],
    image: "/images/hero_education.jpg",
    alt: "Smiling school children in Mumbai supported through educational sponsorship",
    overlayText: "1,200+ students supported from primary school through higher vocational diplomas.",
    ctaText: "Calculate Sponsorship Impact",
    ctaLink: "#sponsorship",
  },
  {
    id: "bsy",
    category: "State Crisis Intervention Scheme",
    title: "Bal Sangopan Yojana (BSY)",
    desc: "FSC has been pioneering foster care since 1964 and has been implementing the Government of Maharashtra's Bal Sangopan Yojana since 1994. The scheme prevents children from being abandoned or institutionalized during severe family crisis.",
    features: [
      "Targeted monthly financial grants to families struck by sudden death of a parent, desertion, or terminal illness",
      "Intensive case management and rehabilitation counseling to preserve family stability",
      "Preventing institutionalization by enabling children to stay with surviving relatives or foster guardians",
      "Empowering single mothers through skill development and social security scheme linkage",
    ],
    image: "/images/adoption_family.jpg",
    alt: "Loving foster family supported under Bal Sangopan Yojana",
    overlayText: "Sustaining 50+ families in acute crisis annually across Mumbai's urban settlements.",
    ctaText: "Learn About Crisis Support",
    ctaLink: "#contact",
  },
  {
    id: "community",
    category: "Grassroots Development Since 1997",
    title: "Community Interventions & SHGs",
    desc: "Active since 1997, our community interventions focus on urban slum communities in South Mumbai (Colaba, Cuffe Parade) and western suburbs (Bhayandar). We foster community initiative, collective participation, and ownership.",
    features: [
      "Formation of vibrant Women's Self-Help Groups (SHGs) fostering micro-savings and financial literacy",
      "Community study centers and remedial classes for children residing in congested tenements",
      "Adolescent life skills workshops, gender sensitization, and preventive adolescent healthcare",
      "Reaching over 100,000 residents across 6 major urban slum pockets with essential civic linkages",
    ],
    image: "/images/community_women.jpg",
    alt: "Empowered Indian women in a community circle in Mumbai",
    overlayText: "Grassroots mobilization touching 100,000+ residents in Colaba, Cuffe Parade, and Bhayandar.",
    ctaText: "Explore Community Work",
    ctaLink: "#stories",
  },
  {
    id: "counseling",
    category: "Child Guidance Unit Est. 2008",
    title: "Counseling & Psycho-Social Care",
    desc: "Established in 2008, our dedicated Child Guidance and Counseling Unit empowers children and families with coping tools to navigate emotional distress, academic pressure, trauma, and behavioral challenges.",
    features: [
      "Professional assessment & intervention for ADHD, dyslexia, and learning difficulties",
      "Confidential individual therapy for adolescents experiencing trauma, anxiety, or family strain",
      "Parenting workshops on positive discipline, emotional resilience, and healthy communication",
      "Accessible mental health services offered regardless of a family's financial capability",
    ],
    image: "/images/hero_education.jpg",
    alt: "Counselor working with children in Mumbai",
    overlayText: "Empowering children and caregivers with tools to conquer psychological hurdles.",
    ctaText: "Request Counseling Guidance",
    ctaLink: "#contact",
  },
];

export default function FocusAreas() {
  const [activeTab, setActiveTab] = useState(PROGRAMS[0].id);

  const currentProgram = PROGRAMS.find((p) => p.id === activeTab) || PROGRAMS[0];

  return (
    <section className="section" id="focus-areas">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Five Pillars of Impact</div>
          <h2 className="section-title">Our Core Programs & Focus Areas</h2>
          <p className="section-desc">
            We deliver holistic, non-institutional child protection and family welfare services, 
            ensuring every child grows in an environment of safety, care, and opportunity.
          </p>
        </div>

        {/* Tab Selector */}
        <div className={styles.tabsNav} role="tablist">
          {PROGRAMS.map((prog) => (
            <button
              key={prog.id}
              role="tab"
              aria-selected={activeTab === prog.id}
              onClick={() => setActiveTab(prog.id)}
              className={`${styles.tabBtn} ${activeTab === prog.id ? styles.activeTabBtn : ""}`}
            >
              {prog.title.split("&")[0].trim()}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className={styles.panelCard}>
          <div className={styles.panelContent}>
            <span className={styles.panelCategory}>✦ {currentProgram.category}</span>
            <h3 className={styles.panelTitle}>{currentProgram.title}</h3>
            <p className={styles.panelDesc}>{currentProgram.desc}</p>

            <ul className={styles.featureList}>
              {currentProgram.features.map((feat, i) => (
                <li key={i} className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div>
              <a href={currentProgram.ctaLink} className="btn btn-primary">
                {currentProgram.ctaText} →
              </a>
            </div>
          </div>

          <div className={styles.panelVisual}>
            <img
              src={currentProgram.image}
              alt={currentProgram.alt}
              className={styles.panelImg}
            />
            <div className={styles.panelHighlightOverlay}>
              <span>✨</span>
              <span>{currentProgram.overlayText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
