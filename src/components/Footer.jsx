"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (newsletterEmail) setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Col 1: Identity & Compliance */}
          <div className={styles.footerBrand}>
            <h3>Family Service Centre</h3>
            <span className={styles.footerBrandSubtitle}>Eucharistic Congress Bldg III, Colaba, Mumbai</span>
            <p className={styles.footerBio}>
              A secular, non-profit child protection organization committed to empowering families, 
              facilitating transparent CARA adoptions, and keeping vulnerable children out of institutions through education and crisis grants.
            </p>
            <div className={styles.regBadgesList}>
              <span>• Bombay Public Trusts Act, 1950 (Reg: F-1027 BOM)</span>
              <span>• Central Adoption Resource Authority (CARA) RIPA Licensed</span>
              <span>• Ahilyadevi Holkar Award Recipient (Govt. of Maharashtra)</span>
              <span>• Section 80G Certified | FCRA Compliant</span>
            </div>
          </div>

          {/* Col 2: Core Programs */}
          <div className={styles.footerCol}>
            <h4>Core Programs</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/adoption">CARA Legal Adoption</Link></li>
              <li><Link href="/sponsorship">Educational Child Sponsorship</Link></li>
              <li><Link href="/programs#bsy">Bal Sangopan Yojana (BSY)</Link></li>
              <li><Link href="/programs#community">Community Interventions & SHGs</Link></li>
              <li><Link href="/programs#counseling">Child Guidance & Counseling</Link></li>
              <li><Link href="/programs#foster">Foster Care Crisis Unit</Link></li>
            </ul>
          </div>

          {/* Col 3: Organization */}
          <div className={styles.footerCol}>
            <h4>Organization</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">Our 70-Year Journey (1955)</Link></li>
              <li><Link href="/about#governance">Managing Committee & Board</Link></li>
              <li><Link href="/stories">Success Stories & Impact</Link></li>
              <li><Link href="/contact">Social Worker Careers</Link></li>
              <li><Link href="/contact">Volunteer Inquiries</Link></li>
              <li><Link href="/contact">Contact South Mumbai Office</Link></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Transparency */}
          <div className={`${styles.footerCol} ${styles.newsletterBox}`}>
            <h4>Impact Updates</h4>
            <p>
              Subscribe to our quarterly newsletter for community impact reports, adoption stories, and child welfare updates.
            </p>
            {subscribed ? (
              <div style={{ color: "#2ECC71", fontSize: "0.85rem", fontWeight: "600" }}>
                ✓ Subscribed successfully! Thank you for supporting FSC Mumbai.
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className={styles.newsletterForm}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={styles.newsletterInput}
                />
                <button type="submit" className="btn btn-primary btn-sm">
                  Join
                </button>
              </form>
            )}
            <p style={{ fontSize: "0.775rem", color: "#7E96AD", marginTop: "1rem" }}>
              Tax exemption certificates under Section 80G issued digitally for all Indian contributions.
            </p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className={styles.bottomBar}>
          <div>
            © 1955 – 2026 Family Service Centre (FSC), Mumbai. All rights reserved.
          </div>
          <div className={styles.bottomLegalLinks}>
            <Link href="/contact">Child Protection Policy</Link>
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">80G / FCRA Disclosures</Link>
            <Link href="/about">Credibility Alliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
