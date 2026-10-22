"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDonation } from "@/context/DonationContext";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { openDonation } = useDonation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Sleek Top Authority & Contact Bar */}
      <div className={styles.topBar}>
        <div className={styles.topBarContainer}>
          <div className={styles.topBadgeGroup}>
            <span className={styles.badgeItem}>
              <span className={styles.goldDot}></span>
              Govt. of Maharashtra Awardee
            </span>
            <span className={styles.badgeItem}>
              <span className={styles.goldDot}></span>
              CARA Licensed Adoption Agency (RIPA)
            </span>
            <span className={styles.badgeItem}>
              <span className={styles.goldDot}></span>
              Section 80G Tax Exemption
            </span>
          </div>

          <div className={styles.topContactGroup}>
            <a href="tel:+912222021432" className={styles.topContactLink}>
              <span>📞</span> +91 22 2202 1432
            </a>
            <span className={styles.topSeparator}></span>
            <a href="mailto:director@fscmumbai.org" className={styles.topContactLink}>
              <span>✉️</span> director@fscmumbai.org
            </a>
            <span className={styles.topSeparator}></span>
            <span className={styles.topContactLink}>
              <span>📍</span> Colaba, Mumbai
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          {/* Brand Emblem & Titles */}
          <Link href="/" className={styles.brand} aria-label="Family Service Centre Homepage">
            <div className={styles.brandIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <div className={styles.brandDetails}>
              <span className={styles.brandName}>Family Service Centre</span>
              <span className={styles.brandMeta}>MUMBAI • EST. 1955</span>
            </div>
          </Link>

          {/* Symmetrical Navigation Links */}
          <nav className={styles.navWrapper} aria-label="Main Navigation">
            <ul className={styles.navMenu}>
              <li>
                <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.activeNavLink : ""}`}>
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? styles.activeNavLink : ""}`}>
                  About Us
                </Link>
              </li>

              {/* Programs Dropdown */}
              <li className={styles.dropdownWrapper} ref={dropRef}>
                <button
                  type="button"
                  className={`${styles.dropdownButton} ${pathname.startsWith("/programs") ? styles.activeNavLink : ""}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  onMouseEnter={() => setDropdownOpen(true)}
                  aria-expanded={dropdownOpen}
                >
                  <span>Programs</span>
                  <span style={{ fontSize: "9px", marginTop: "2px" }}>▼</span>
                </button>

                {dropdownOpen && (
                  <div className={styles.dropdownCard} onMouseLeave={() => setDropdownOpen(false)}>
                    <Link href="/adoption" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      <span className={styles.itemIcon}>🏠</span>
                      <div>
                        <div className={styles.itemTitle}>CARA Legal Adoption</div>
                        <div className={styles.itemDesc}>Specialized in-country & inter-country placement</div>
                      </div>
                    </Link>

                    <Link href="/sponsorship" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      <span className={styles.itemIcon}>🎓</span>
                      <div>
                        <div className={styles.itemTitle}>Educational Sponsorship</div>
                        <div className={styles.itemDesc}>Tuition, books & whole-family support</div>
                      </div>
                    </Link>

                    <Link href="/programs#bsy" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      <span className={styles.itemIcon}>🛡️</span>
                      <div>
                        <div className={styles.itemTitle}>Bal Sangopan Yojana (BSY)</div>
                        <div className={styles.itemDesc}>State crisis foster care keeping families together</div>
                      </div>
                    </Link>

                    <Link href="/programs#community" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      <span className={styles.itemIcon}>🤝</span>
                      <div>
                        <div className={styles.itemTitle}>Community Interventions</div>
                        <div className={styles.itemDesc}>Women&apos;s SHGs & slum study centers</div>
                      </div>
                    </Link>

                    <Link href="/programs#counseling" className={styles.dropdownItem} onClick={() => setDropdownOpen(false)}>
                      <span className={styles.itemIcon}>🧠</span>
                      <div>
                        <div className={styles.itemTitle}>Child Guidance & Counseling</div>
                        <div className={styles.itemDesc}>ADHD, learning differences & family therapy</div>
                      </div>
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link href="/adoption" className={`${styles.navLink} ${isActive("/adoption") ? styles.activeNavLink : ""}`}>
                  Adoption
                </Link>
              </li>

              <li>
                <Link href="/sponsorship" className={`${styles.navLink} ${isActive("/sponsorship") ? styles.activeNavLink : ""}`}>
                  Sponsorship
                </Link>
              </li>

              <li>
                <Link href="/stories" className={`${styles.navLink} ${isActive("/stories") ? styles.activeNavLink : ""}`}>
                  Stories
                </Link>
              </li>

              <li>
                <Link href="/contact" className={`${styles.navLink} ${isActive("/contact") ? styles.activeNavLink : ""}`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Symmetrical Action CTAs */}
          <div className={styles.navActions}>
            <Link href="/sponsorship" className={styles.sponsorButton}>
              Sponsor a Child
            </Link>

            <button
              onClick={() => openDonation(1500, "monthly")}
              className={styles.donateButton}
              id="header-donate-btn"
            >
              <span>❤️</span>
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggleBtn}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className={styles.mobileDrawer}>
            <ul className={styles.mobileNavLinks}>
              <li><Link href="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
              <li><Link href="/about" onClick={() => setMobileOpen(false)}>About Us (70 Years)</Link></li>
              <li><Link href="/adoption" onClick={() => setMobileOpen(false)}>CARA Legal Adoption</Link></li>
              <li><Link href="/sponsorship" onClick={() => setMobileOpen(false)}>Educational Sponsorship</Link></li>
              <li><Link href="/programs" onClick={() => setMobileOpen(false)}>All Programs (BSY & Community)</Link></li>
              <li><Link href="/stories" onClick={() => setMobileOpen(false)}>Success Stories</Link></li>
              <li><Link href="/contact" onClick={() => setMobileOpen(false)}>Contact Us</Link></li>
            </ul>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <Link
                href="/sponsorship"
                onClick={() => setMobileOpen(false)}
                className={styles.sponsorButton}
                style={{ width: "100%", textAlign: "center" }}
              >
                Sponsor a Child
              </Link>
              <button
                onClick={() => { setMobileOpen(false); openDonation(1500, "monthly"); }}
                className={styles.donateButton}
                style={{ width: "100%", justifyContent: "center" }}
              >
                ❤️ Donate Now (80G Eligible)
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
