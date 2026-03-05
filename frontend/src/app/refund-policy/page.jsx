export default function RefundPolicy() {
  return (
    <section className="py-16 bg-[var(--background)]">
      <div className="container-custom max-w-4xl">
        {/* Title */}

        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text-main)]">
            Refund & Service Policy
          </h1>
          <p className="mt-4 text-[var(--text-light)]">
            Last Updated: {new Date().getFullYear()}
          </p>
        </div>

        <div className="space-y-8 text-[var(--text-light)] leading-relaxed">
          {/* Service Agreement */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              1. Service Agreement
            </h2>
            <p>
              All services provided by Swasyaha Solutions are governed by
              project-specific agreements that define the scope of work,
              deliverables, timelines, and responsibilities of both the client
              and the company. Clients are encouraged to carefully review the
              project agreement before confirming the service.
            </p>
          </div>

          {/* Project Scope */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              2. Project Scope and Requirements
            </h2>
            <p>
              Each project is executed based on the requirements agreed upon
              during the initial consultation. Any additional features,
              modifications, or scope changes requested after project approval
              may require additional time, cost, or resources.
            </p>
          </div>

          {/* Payment Policy */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              3. Payment Policy
            </h2>
            <p>
              Payments for services are typically structured in milestone-based
              installments depending on the complexity and duration of the
              project. Development work begins only after the initial payment or
              deposit has been received.
            </p>
          </div>

          {/* Refund Policy */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              4. Refund Policy
            </h2>
            <p>
              Due to the nature of digital services and software development,
              refunds may not be applicable once work has commenced and
              resources have been allocated to the project. However, in certain
              circumstances, partial refunds may be considered depending on the
              stage of project completion and mutual agreement between both
              parties.
            </p>
          </div>

          {/* Project Cancellation */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              5. Project Cancellation
            </h2>
            <p>
              If a client chooses to cancel a project after development has
              begun, charges will apply based on the work completed and the
              resources utilized up to the point of cancellation.
            </p>
          </div>

          {/* Client Responsibilities */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              6. Client Responsibilities
            </h2>
            <p>
              Clients are responsible for providing necessary information,
              project materials, approvals, and feedback required to complete
              the project. Delays in providing required resources may affect
              project timelines.
            </p>
          </div>

          {/* Delivery Timelines */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              7. Delivery Timelines
            </h2>
            <p>
              While Swasyaha Solutions strives to deliver projects within the
              agreed timeframe, delivery timelines may vary depending on project
              complexity, scope changes, and external factors.
            </p>
          </div>

          {/* Maintenance Services */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              8. Maintenance and Support
            </h2>
            <p>
              Ongoing maintenance, updates, and support services may be provided
              under separate maintenance agreements. These services may include
              bug fixes, security updates, feature enhancements, and system
              monitoring.
            </p>
          </div>

          {/* Third Party Services */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              9. Third-Party Services
            </h2>
            <p>
              Some projects may involve third-party services such as hosting
              providers, domain registrars, payment gateways, or external APIs.
              Swasyaha Solutions is not responsible for issues arising from
              third-party services beyond our control.
            </p>
          </div>

          {/* Limitation of Liability */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              10. Limitation of Liability
            </h2>
            <p>
              Swasyaha Solutions shall not be liable for any indirect,
              incidental, or consequential damages resulting from the use of
              services, software solutions, or digital platforms developed for
              the client.
            </p>
          </div>

          {/* Policy Updates */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              11. Policy Updates
            </h2>
            <p>
              We reserve the right to update or modify this Refund and Service
              Policy at any time. Any updates will be reflected on this page.
            </p>
          </div>

          {/* Contact Information */}

          <div>
            <h2 className="text-xl font-semibold text-[var(--text-main)] mb-2">
              12. Contact Information
            </h2>
            <p>
              If you have any questions regarding our refund or service policy,
              you may contact us at:
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
