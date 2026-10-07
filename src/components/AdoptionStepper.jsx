"use client";

import { useState } from "react";
import styles from "./AdoptionStepper.module.css";

const STEPS = [
  {
    step: "01",
    title: "CARA Portal Registration",
    desc: "Prospective Adoptive Parents (PAPs) register officially on the CARINGS national portal (cara.nic.in) and select Family Service Centre (FSC Mumbai) as their designated agency for Home Study.",
  },
  {
    step: "02",
    title: "Home Study Report (HSR)",
    desc: "An authorized FSC social worker conducts home visits and counseling sessions to assess readiness, socio-economic stability, and psychological preparedness, compiling the formal HSR within statutory timelines.",
  },
  {
    step: "03",
    title: "Referral & Matching",
    desc: "Through the centralized CARINGS portal, prospective parents receive the Child Study Report (CSR) and Medical Examination Report (MER) when a child match is generated in accordance with senior eligibility.",
  },
  {
    step: "04",
    title: "Pre-Adoption Foster Care & Court Order",
    desc: "Parents physically meet the child. Upon mutual acceptance, the child is placed in pre-adoption foster care while FSC legal counsel files the petition for the formal final Adoption Order before the District Magistrate/Court.",
  },
  {
    step: "05",
    title: "Post-Adoption Follow-ups",
    desc: "FSC social workers conduct mandated quarterly progress visits for 24 months, providing continuous guidance on bonding, developmental milestones, and emotional integration into the new family.",
  },
];

const FAQS = [
  {
    q: "Who is legally eligible to adopt a child in India?",
    a: "Under CARA regulations and the Juvenile Justice Act, prospective parents must be physically fit, financially capable, and motivated to raise a child. For a married couple, at least 2 years of stable marital relationship is required, and both spouses must give consent. The age criteria vary depending on the age group of the child being adopted.",
  },
  {
    q: "Can single women or single men adopt through FSC?",
    a: "Yes. A single woman is legally eligible to adopt a child of any gender (male or female). A single man is eligible to adopt only a male child. Both must satisfy the standard financial, background, and Home Study criteria set by CARA.",
  },
  {
    q: "Does FSC accept direct off-portal child surrender or adoption requests?",
    a: "No. All adoptions in India must strictly adhere to the Central Adoption Resource Authority (CARA) mandate to protect children against illicit placement. FSC cannot directly hand over or bypass the CARINGS registry. If a mother or family is in crisis and contemplating surrender, FSC provides confidential counseling and legal Child Welfare Committee (CWC) safekeeping.",
  },
  {
    q: "Is FSC recognized for Inter-Country Adoption (Foreign / NRI / OCI)?",
    a: "Yes. FSC is recognized as a Specialized Adoption Agency / RIPA (Recognized Indian Placement Agency) authorized to process both in-country and inter-country adoption cases through foreign accredited adoption agencies (AFAA) under Hague Convention norms.",
  },
  {
    q: "What documents are required to start the Home Study process?",
    a: "Required documents include: Proof of Identity (Aadhaar/Passport), Proof of Residence, Marriage Certificate (if married), Birth Certificates, Income Tax returns/Salary Slips, Medical fitness certificates from a certified physician, and reference letters from two non-relatives.",
  },
];

export default function AdoptionStepper() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx);
  };

  return (
    <section className="section section-alt" id="adoption">
      <div className="container">
        <div className="section-header">
          <div className="section-badge forest">Legal & Transparent Child Protection</div>
          <h2 className="section-title">The Legal Adoption Journey in India</h2>
          <p className="section-desc">
            As a licensed Specialized Adoption Agency (RIPA) recognized by CARA and the Government of Maharashtra, 
            we guide prospective adoptive parents with integrity, empathy, and absolute legal transparency.
          </p>
        </div>

        {/* 5 Stepper Cards */}
        <div className={styles.stepperGrid}>
          {STEPS.map((item, idx) => (
            <div key={idx} className={styles.stepCard}>
              <div className={styles.stepNumber}>{item.step}</div>
              <h3 className={styles.stepTitle}>{item.title}</h3>
              <p className={styles.stepDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Adoption FAQs Accordion */}
        <div className={styles.faqSection}>
          <div className={styles.faqHeader}>
            <h3 className={styles.faqTitle}>Frequently Asked Adoption Questions</h3>
            <p className={styles.faqSubtitle}>Essential legal and procedural clarity for prospective adoptive parents</p>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className={`${styles.faqItem} ${openFaq === idx ? styles.faqItemOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className={styles.faqAnswer}>
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.helpDeskCard}>
            <div className={styles.helpDeskText}>
              <h4>Have specific questions or need confidential pre-adoption guidance?</h4>
              <p>Our licensed senior social workers and adoption officers are available for consultation.</p>
            </div>
            <a href="#contact" className="btn btn-secondary">
              Speak with an FSC Adoption Counselor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
