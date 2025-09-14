import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="max-w-screen-xl mx-auto">
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <h3>Frontend Logistics</h3>
            <p>
              Your trusted partner for seamless logistics solutions across
              India.
            </p>
            <Link href="#">Company QR Code</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Quick Links</h3>
            <Link href="/careers">Careers</Link>
            <Link href="/rider-signup">Become a Rider</Link>
            <Link href="/deliver-with-us">Deliver With Us</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Company</h3>
            <Link href="/">Home</Link>
            <Link href="/services#services">Services</Link>
            <Link href="/services#pricing">Pricing Plans</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Resources</h3>
            <Link href="/blogs">Blogs</Link>
            <Link href="/faqs">FAQs</Link>
          </div>

          <div className={styles.footerCol}>
            <h3>Reach Us At</h3>
            <Link href="#">hello@frontend.com</Link>
            <Link href="#">+91-98765-43210</Link>
            <Link href="#">HQ Address</Link>

            <div className={styles.socialIcons}>
              <Link href="https://facebook.com" target="_blank">
                <img
                  src="/icons/footer/fb.svg"
                  alt="Facebook"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://x.com" target="_blank">
                <img
                  src="/icons/footer/x.svg"
                  alt="X (Twitter)"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <img
                  src="/icons/footer/link.svg"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <img
                  src="/icons/footer/ig.svg"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
              </Link>
              <Link href="https://wa.me/919876543210" target="_blank">
                <img
                  src="/icons/footer/wap.svg"
                  alt="WhatsApp"
                  width={28}
                  height={28}
                />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
            <p>© 2025 Frontend Logistics. All Rights Reserved</p>
          </div>
          <div className={styles.footerBottomRight}>
            <Link href="#">Terms & Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
