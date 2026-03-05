export default function DisclaimerPage() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom max-w-4xl">
        {/* Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Disclaimer
          </h1>
          <p className="mt-4 text-[var(--text-light)]">
            Last Updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="space-y-8 text-[var(--text-light)] leading-relaxed">
          {/* General Disclaimer */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              1. General Information
            </h2>
            <p>
              The information provided on the Swasyaha Solutions website is for
              general informational purposes only. While we strive to keep the
              information accurate and up to date, we make no representations or
              warranties of any kind regarding the completeness, accuracy,
              reliability, or availability of the information contained on this
              website.
            </p>
          </div>

          {/* Professional Disclaimer */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              2. Professional Disclaimer
            </h2>
            <p>
              The content on this website is not intended to replace
              professional advice including legal, financial, or technical
              consultation. Visitors should seek appropriate professional advice
              before making any business or technical decisions based on the
              information provided on this website.
            </p>
          </div>

          {/* External Links */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              3. External Links Disclaimer
            </h2>
            <p>
              Our website may contain links to third-party websites or services
              that are not owned or controlled by Swasyaha Solutions. We do not
              guarantee the accuracy, relevance, or reliability of information
              on these external websites.
            </p>
          </div>

          {/* Errors and Omissions */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              4. Errors and Omissions
            </h2>
            <p>
              Although we strive to ensure that the information on this website
              is accurate, there may occasionally be errors, omissions, or
              outdated information. Swasyaha Solutions does not accept
              responsibility for any inaccuracies or mistakes that may appear on
              this website.
            </p>
          </div>

          {/* Fair Use */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              5. Fair Use Disclaimer
            </h2>
            <p>
              This website may contain copyrighted material which may not always
              be specifically authorized by the copyright owner. Such material
              is used for informational or educational purposes and is believed
              to constitute fair use under applicable copyright laws.
            </p>
          </div>

          {/* Testimonials */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              6. Testimonials Disclaimer
            </h2>
            <p>
              Testimonials appearing on this website represent individual
              experiences and opinions. They do not guarantee that every user
              will achieve the same results when using our services.
            </p>
          </div>

          {/* Limitation of Liability */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              Under no circumstances shall Swasyaha Solutions be liable for any
              loss or damage including indirect or consequential loss arising
              from the use of this website or reliance on any information
              provided on the website.
            </p>
          </div>

          {/* Technology Services Disclaimer */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              8. Technology Services Disclaimer
            </h2>
            <p>
              Swasyaha Solutions provides digital technology services including
              software development, cloud solutions, and IT consulting.
              Project-specific results depend on various factors including
              client requirements, system environment, and third-party services.
            </p>
          </div>

          {/* Availability */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              9. Website Availability
            </h2>
            <p>
              While we aim to ensure that this website is available at all
              times, Swasyaha Solutions does not guarantee uninterrupted access
              and may temporarily suspend access for maintenance or updates.
            </p>
          </div>

          {/* Consent */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              10. Consent
            </h2>
            <p>
              By using our website, you hereby consent to this Disclaimer and
              agree to its terms.
            </p>
          </div>

          {/* Updates */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              11. Updates to This Disclaimer
            </h2>
            <p>
              We reserve the right to update or modify this Disclaimer at any
              time. Any updates will be posted on this page with the updated
              revision date.
            </p>
          </div>

          {/* Contact */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              12. Contact Information
            </h2>
            <p>
              If you have any questions regarding this Disclaimer, you may
              contact us at:
            </p>

            <p className="mt-2">
              Email: rajleelavathi6@gmail.com
              <br />
              Phone: +91 73494 45974
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
