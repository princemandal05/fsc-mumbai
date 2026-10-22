"use client";

import { useState } from "react";
import styles from "./ContactIntake.module.css";

export default function ContactIntake() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "adoption",
    city: "Mumbai",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-badge forest">Get In Touch</div>
          <h2 className="section-title">Reach Out to Family Service Centre</h2>
          <p className="section-desc">
            Whether you are an aspiring adoptive parent, prospective educational sponsor, 
            volunteer, or a family seeking crisis assistance, we are here to support you.
          </p>
        </div>

        <div className={styles.contactCard}>
          {/* Official Location & Contact Info */}
          <div className={styles.infoCol}>
            <div className={styles.infoHead}>
              <h3>Visit or Call Us</h3>
              <p>
                Our headquarters is centrally situated in South Mumbai. Appointments are recommended for adoption and counseling consultations.
              </p>
            </div>

            <div className={styles.contactDetailsList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📍</div>
                <div>
                  <div className={styles.contactLabel}>Head Office Location</div>
                  <div className={styles.contactValue}>
                    Family Service Centre<br />
                    Eucharistic Congress Building No. III<br />
                    5, Convent Street, Colaba<br />
                    Mumbai – 400 001, Maharashtra, India
                  </div>
                  <a
                    href="https://maps.google.com/?q=Family+Service+Centre+Eucharistic+Congress+Building+III+Colaba+Mumbai+400001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mapLinkBadge}
                  >
                    <span>🗺️ Open in Google Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>📞</div>
                <div>
                  <div className={styles.contactLabel}>Telephone Inquiries</div>
                  <div className={styles.contactValue}>
                    <a href="tel:+912222021432">+91 22 2202 1432</a> / <a href="tel:+912222828862">+91 22 2282 8862</a>
                  </div>
                </div>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>✉️</div>
                <div>
                  <div className={styles.contactLabel}>Email Communication</div>
                  <div className={styles.contactValue}>
                    <a href="mailto:director@fscmumbai.org">director@fscmumbai.org</a><br />
                    <a href="mailto:director.fscmumbai@gmail.com">director.fscmumbai@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.officeTiming}>
              <strong>Office Hours:</strong><br />
              Monday to Friday: 9:30 AM – 5:30 PM IST<br />
              Saturday: 9:30 AM – 1:30 PM IST (Sundays & Public Holidays Closed)
            </div>
          </div>

          {/* Inquiry Form */}
          <div className={styles.formCol}>
            <div className={styles.formHead}>
              <h4>Direct Consultation & Intake Form</h4>
              <p>Please select your topic below. Your inquiry is treated with strict confidentiality.</p>
            </div>

            {submitted ? (
              <div className={styles.successAlert}>
                <h4>✓ Thank You for Reaching Out!</h4>
                <p>
                  Your inquiry regarding <strong>{formData.inquiryType.toUpperCase()}</strong> has been recorded. 
                  An FSC senior caseworker or program director will contact you at <strong>{formData.email || formData.phone}</strong> within 1–2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: "1.25rem" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="intake-name">Full Name *</label>
                    <input
                      id="intake-name"
                      type="text"
                      required
                      placeholder="e.g. Anjali Sharma"
                      className={styles.formInput}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="intake-email">Email Address *</label>
                    <input
                      id="intake-email"
                      type="email"
                      required
                      placeholder="e.g. anjali@example.com"
                      className={styles.formInput}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="intake-phone">Phone Number *</label>
                    <input
                      id="intake-phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      className={styles.formInput}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="intake-city">City / Residence</label>
                    <input
                      id="intake-city"
                      type="text"
                      placeholder="e.g. Mumbai / Navi Mumbai"
                      className={styles.formInput}
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    />
                  </div>

                  <div className={`${styles.formGroup} ${styles.formFieldFull}`}>
                    <label htmlFor="intake-type">Purpose of Inquiry *</label>
                    <select
                      id="intake-type"
                      className={styles.formSelect}
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    >
                      <option value="adoption">Adoption Guidance (CARA / Home Study Consultation)</option>
                      <option value="sponsorship">Educational Child Sponsorship Program</option>
                      <option value="bsy">Bal Sangopan Yojana (BSY) Crisis Family Support</option>
                      <option value="counseling">Psycho-Social / Child Guidance Counseling</option>
                      <option value="volunteer">Volunteer Work or Career Opportunities</option>
                      <option value="general">CSR Partnership & General Inquiries</option>
                    </select>
                  </div>

                  <div className={`${styles.formGroup} ${styles.formFieldFull}`}>
                    <label htmlFor="intake-message">Your Message or Query *</label>
                    <textarea
                      id="intake-message"
                      required
                      placeholder="Please share details about your inquiry or requirements..."
                      className={styles.formTextarea}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                  Submit Confidential Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Interactive Google Map & Location Finder Card */}
        <div className={styles.mapCard}>
          <div className={styles.mapHeader}>
            <div>
              <div className={styles.mapBadge}>
                <span>📍</span>
                <span>Interactive Location Finder</span>
              </div>
              <h3 className={styles.mapTitle}>Visit Family Service Centre in Colaba</h3>
              <p className={styles.mapSubtitle}>
                Eucharistic Congress Building No. III, 5 Convent Street, Colaba, Mumbai – 400 001 (Behind Regal Cinema)
              </p>
            </div>
            <div className={styles.mapActions}>
              <a
                href="https://maps.google.com/?q=Family+Service+Centre+Eucharistic+Congress+Building+III+Colaba+Mumbai+400001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm"
              >
                Open Google Maps ↗
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Family+Service+Centre+Eucharistic+Congress+Building+III+Colaba+Mumbai+400001"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Get Directions 🚗
              </a>
            </div>
          </div>

          <div className={styles.mapFrameWrapper}>
            <iframe
              title="Family Service Centre Headquarters Location Map"
              src="https://maps.google.com/maps?q=Family+Service+Centre+Eucharistic+Congress+Building+III+5+Convent+Street+Colaba+Mumbai+400001&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="390"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
            />
          </div>

          <div className={styles.transitRow}>
            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>🚆</div>
              <div>
                <h4 className={styles.transitTitle}>By Local Train</h4>
                <p className={styles.transitDesc}>
                  10–12 mins from <strong>CSMT (Central)</strong> and <strong>Churchgate (Western)</strong> via taxi or BEST feeder bus.
                </p>
              </div>
            </div>

            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>🚌</div>
              <div>
                <h4 className={styles.transitTitle}>By BEST Bus</h4>
                <p className={styles.transitDesc}>
                  Frequent buses stop at <strong>Regal Cinema / SP Mukherjee Chowk (Museum)</strong> &amp; <strong>Colaba Depot</strong>.
                </p>
              </div>
            </div>

            <div className={styles.transitBox}>
              <div className={styles.transitIcon}>🏛️</div>
              <div>
                <h4 className={styles.transitTitle}>Landmarks</h4>
                <p className={styles.transitDesc}>
                  Located on Convent Street right behind Regal Cinema, adjacent to Cathedral of the Holy Name.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
