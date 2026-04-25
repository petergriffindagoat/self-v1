import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>SelfStorage.help</h4>
            <p>
              Performance SEO built for independent self-storage operators across the US. We help
              small operators win local search against national chains.
            </p>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li><Link href="/#services">Local SEO</Link></li>
              <li><Link href="/#services">Landing pages</Link></li>
              <li><Link href="/#services">Technical audits</Link></li>
              <li><Link href="/#services">Review strategy</Link></li>
              <li><Link href="/#services">Content</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/#process">Our process</Link></li>
              <li><Link href="/#results">Results</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get in touch</h5>
            <ul>
              <li><Link href="/#contact">Free audit</Link></li>
              <li><a href="mailto:hello@selfstorage.help">hello@selfstorage.help</a></li>
              <li><Link href="#">Book a call</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 SelfStorage.help. Operated by MAAI LLC, Wyoming, USA.</div>
          <div>Privacy · Terms</div>
        </div>
      </div>
    </footer>
  );
}
