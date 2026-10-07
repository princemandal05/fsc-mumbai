"use client";

import { useState } from "react";
import styles from "./DonationModal.module.css";

const QUICK_AMOUNTS = [1000, 1500, 3000, 5000, 10000];

export default function DonationModal({ isOpen, onClose, initialAmount = 1500, initialFrequency = "monthly" }) {
  const [amount, setAmount] = useState(initialAmount || 1500);
  const [customVal, setCustomVal] = useState("");
  const [payMethod, setPayMethod] = useState("upi");
  const [pan, setPan] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleQuickClick = (val) => {
    setAmount(val);
    setCustomVal("");
  };

  const handleCustomInput = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    setCustomVal(val);
    if (val) setAmount(Number(val));
  };

  const handleCompleteDonation = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.modalHeader}>
          <h3 className={styles.modalTitle}>Support Family Service Centre</h3>
          <p className={styles.modalSubtitle}>
            100% Secure Contribution • Section 80G Tax Exemption Eligible
          </p>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className={styles.modalBody}>
          {isSuccess ? (
            <div className={styles.successBox}>
              <div className={styles.successIcon}>🎉</div>
              <h4 className={styles.successTitle}>Pledge Successfully Recorded!</h4>
              <p className={styles.successDesc}>
                Thank you, <strong>{donorName || "Kind Donor"}</strong>! Your contribution of{" "}
                <strong>₹{amount.toLocaleString("en-IN")}</strong> will directly support child education 
                and vulnerable families in Mumbai.
              </p>
              <div style={{ background: "var(--color-bg-page)", padding: "1rem", borderRadius: "8px", fontSize: "0.85rem", marginBottom: "1.5rem" }}>
                <strong>Simulated 80G Tax Receipt ID:</strong> FSC-80G-{Math.floor(100000 + Math.random() * 900000)}<br />
                Sent to: {donorEmail || "your registered email"}
              </div>
              <button 
                onClick={() => { setIsSuccess(false); onClose(); }} 
                className="btn btn-secondary"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleCompleteDonation}>
              {/* Quick Amounts */}
              <div style={{ marginBottom: "0.75rem", fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-navy)" }}>
                Select Contribution Amount (INR):
              </div>
              <div className={styles.quickAmounts}>
                {QUICK_AMOUNTS.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleQuickClick(val)}
                    className={`${styles.amountChip} ${amount === val && !customVal ? styles.amountChipActive : ""}`}
                  >
                    ₹{val.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="modal-custom-amount">Or Custom Amount (₹):</label>
                <input
                  id="modal-custom-amount"
                  type="text"
                  placeholder="e.g. 7500"
                  value={customVal}
                  onChange={handleCustomInput}
                  className="formInput"
                  style={{ width: "100%", padding: "0.65rem 1rem", border: "1.5px solid var(--color-border)", borderRadius: "8px" }}
                />
              </div>

              <div className={styles.paymentTabs}>
                <button
                  type="button"
                  className={`${styles.payTab} ${payMethod === "upi" ? styles.payTabActive : ""}`}
                  onClick={() => setPayMethod("upi")}
                >
                  ⚡ UPI / QR
                </button>
                <button
                  type="button"
                  className={`${styles.payTab} ${payMethod === "card" ? styles.payTabActive : ""}`}
                  onClick={() => setPayMethod("card")}
                >
                  💳 Debit / Credit Card
                </button>
                <button
                  type="button"
                  className={`${styles.payTab} ${payMethod === "netbanking" ? styles.payTabActive : ""}`}
                  onClick={() => setPayMethod("netbanking")}
                >
                  🏦 Netbanking / NEFT
                </button>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="donor-fullname">Full Name (As per PAN) *</label>
                <input
                  id="donor-fullname"
                  type="text"
                  required
                  placeholder="e.g. Rajesh Mehta"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  style={{ width: "100%", padding: "0.65rem 1rem", border: "1.5px solid var(--color-border)", borderRadius: "8px" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div className={styles.inputGroup}>
                  <label htmlFor="donor-email">Email Address *</label>
                  <input
                    id="donor-email"
                    type="email"
                    required
                    placeholder="rajesh@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    style={{ width: "100%", padding: "0.65rem 1rem", border: "1.5px solid var(--color-border)", borderRadius: "8px" }}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="donor-pan">PAN Number (For 80G)</label>
                  <input
                    id="donor-pan"
                    type="text"
                    maxLength={10}
                    placeholder="ABCDE1234F"
                    value={pan}
                    onChange={(e) => setPan(e.target.value.toUpperCase())}
                    style={{ width: "100%", padding: "0.65rem 1rem", border: "1.5px solid var(--color-border)", borderRadius: "8px" }}
                  />
                </div>
              </div>

              <div className={styles.taxNoticeBadge}>
                <span>🛡️</span>
                <span>All Indian donations qualify for 50% tax exemption under Section 80G of the IT Act.</span>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: "100%" }}
              >
                Proceed to Contribute ₹{amount.toLocaleString("en-IN")} →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
