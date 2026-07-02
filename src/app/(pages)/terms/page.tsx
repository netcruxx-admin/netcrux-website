import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions — Net-Crux",
  description:
    "Read the terms and conditions governing the use of Net-Crux IT Services' website and software development services.",
}

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 md:max-w-5xl">
      <div className="mb-10">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Terms & Conditions</h1>
        <p className="text-sm text-gray-500">Effective date: July 2, 2026</p>
      </div>

      <div className="space-y-10 text-sm text-gray-600 md:text-base">
        <section>
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of the
            website and services provided by Net-Crux IT Services (&quot;Net-Crux&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing our website or
            engaging our services, you agree to be bound by these Terms. If you do not agree, please
            discontinue use immediately.
          </p>
        </section>

        {/* 1 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Services</h2>
          <p className="mb-3">
            Net-Crux provides custom software development services including, but not limited to,
            mobile application development, web application development, UI/UX design, API
            integration, consulting, and ongoing technical support (&quot;Services&quot;).
          </p>
          <p>
            The scope, timeline, deliverables, and pricing for any specific engagement are defined in
            a separate Statement of Work (&quot;SOW&quot;) or service agreement signed by both
            parties. In the event of a conflict between these Terms and a signed SOW, the SOW shall
            prevail.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Eligibility & Account Use</h2>
          <p className="mb-3">
            By using this website or engaging our Services, you represent that you are at least 18
            years of age and have the legal authority to enter into a binding agreement on behalf of
            yourself or the entity you represent.
          </p>
          <p>
            You agree to provide accurate, current, and complete information during any engagement or
            communication with us, and to update such information as necessary.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            3. Project Engagement & Payment
          </h2>
          <p className="mb-3">
            All projects commence upon execution of a signed SOW and receipt of any agreed deposit.
            Unless otherwise specified in the SOW:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Payments are due as per the milestone schedule defined in the SOW. Late payments may
              attract a penalty of 1.5% per month on the outstanding amount.
            </li>
            <li>
              Net-Crux reserves the right to pause work on a project where invoices are overdue by
              more than 14 days.
            </li>
            <li>
              All fees are quoted exclusive of applicable taxes (including GST where applicable).
            </li>
            <li>
              Deposits and milestone payments made are non-refundable once the corresponding work has
              commenced.
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            4. Client Responsibilities
          </h2>
          <p className="mb-3">
            Timely delivery of our Services depends on your cooperation. You agree to:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Provide all required content, assets, credentials, and feedback within agreed
              timelines.
            </li>
            <li>
              Designate a primary point of contact who has authority to make decisions on the
              project.
            </li>
            <li>
              Review and approve deliverables within the review period specified in the SOW.
              Unreasonable delays in approval may affect project timelines and costs.
            </li>
            <li>
              Ensure that any materials, data, or intellectual property you provide to us does not
              infringe the rights of any third party.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            5. Intellectual Property Rights
          </h2>
          <h3 className="mb-2 font-semibold text-gray-800">Client-Owned Work</h3>
          <p className="mb-3">
            Upon receipt of full and final payment for a project, Net-Crux assigns to you all
            intellectual property rights in the custom deliverables created specifically for that
            project, as defined in the SOW.
          </p>
          <h3 className="mb-2 font-semibold text-gray-800">Net-Crux Retained Rights</h3>
          <p className="mb-3">
            We retain ownership of all pre-existing tools, frameworks, libraries, methodologies,
            know-how, and generic code components developed independently of your project
            (&quot;Net-Crux IP&quot;). Where Net-Crux IP is incorporated into your deliverables, we
            grant you a perpetual, non-exclusive, royalty-free licence to use it solely as part of
            the delivered product.
          </p>
          <h3 className="mb-2 font-semibold text-gray-800">Portfolio Rights</h3>
          <p>
            Unless you request otherwise in writing, Net-Crux reserves the right to showcase
            completed work in our portfolio, case studies, and marketing materials.
          </p>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Confidentiality</h2>
          <p className="mb-3">
            Both parties agree to keep confidential any proprietary or sensitive information
            disclosed during the engagement (&quot;Confidential Information&quot;). Confidential
            Information shall not be disclosed to any third party without prior written consent,
            except:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>As required by applicable law or court order.</li>
            <li>To employees or contractors who need it to perform the Services, under equivalent confidentiality obligations.</li>
            <li>Information that becomes publicly available through no fault of the receiving party.</li>
          </ul>
          <p className="mt-3">
            This confidentiality obligation survives termination of the engagement for a period of
            three (3) years.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Third-Party Tools & Services</h2>
          <p className="mb-3">
            Our Services may involve the use of third-party platforms, APIs, cloud services, or
            open-source software (e.g., payment gateways, mapping services, cloud hosting
            providers). You acknowledge that:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Such third-party services are subject to their own terms and pricing, which may change
              independently of our engagement.
            </li>
            <li>
              Net-Crux is not liable for outages, data loss, policy changes, or discontinuation of
              third-party services.
            </li>
            <li>
              Any costs associated with third-party licences, subscriptions, or APIs required for
              your project are your responsibility unless explicitly included in the SOW.
            </li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            8. Warranties & Disclaimer
          </h2>
          <p className="mb-3">
            Net-Crux warrants that the Services will be performed with reasonable skill and care, in
            a professional manner consistent with industry standards.
          </p>
          <p className="mb-3">
            Except as expressly stated above, to the maximum extent permitted by applicable law, all
            Services and deliverables are provided <span className="font-medium text-gray-800">&quot;as is&quot;</span> without
            any warranty of any kind, express or implied, including warranties of merchantability,
            fitness for a particular purpose, or non-infringement.
          </p>
          <p>
            We do not warrant that software will be entirely free of bugs or that it will operate
            without interruption. Post-delivery bug fixes may be covered under a warranty period
            defined in your SOW.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            9. Limitation of Liability
          </h2>
          <p className="mb-3">
            To the fullest extent permitted by law, Net-Crux's total cumulative liability to you for
            any claims arising out of or related to these Terms or the Services shall not exceed the
            total fees paid by you to Net-Crux in the three (3) months preceding the claim.
          </p>
          <p>
            In no event shall Net-Crux be liable for any indirect, incidental, special,
            consequential, or punitive damages, including but not limited to loss of revenue, loss of
            data, loss of profits, or business interruption, even if advised of the possibility of
            such damages.
          </p>
        </section>

        {/* 10 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">10. Termination</h2>
          <p className="mb-3">
            Either party may terminate an engagement by providing written notice as specified in the
            SOW. Upon termination:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              You shall pay for all work completed up to the termination date, including any
              partially completed milestones on a pro-rata basis.
            </li>
            <li>
              Net-Crux will deliver all completed work and work-in-progress materials upon receipt of
              outstanding payment.
            </li>
            <li>
              Confidentiality, IP assignment (for paid work), and limitation of liability clauses
              survive termination.
            </li>
          </ul>
          <p className="mt-3">
            Net-Crux reserves the right to terminate services immediately and without notice if a
            client engages in unlawful activity, abusive conduct, or material breach of these Terms.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            11. Website Use & Acceptable Conduct
          </h2>
          <p className="mb-3">By accessing our website, you agree not to:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Use the site for any unlawful purpose or in violation of any applicable regulations.</li>
            <li>Attempt to gain unauthorised access to any part of the website or its infrastructure.</li>
            <li>Upload or transmit malicious code, viruses, or disruptive content.</li>
            <li>Scrape, copy, or reproduce any content from this website without our prior written consent.</li>
            <li>Misrepresent your identity or affiliation when contacting us.</li>
          </ul>
        </section>

        {/* 12 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">12. Governing Law & Disputes</h2>
          <p className="mb-3">
            These Terms shall be governed by and construed in accordance with the laws of India.
            Any disputes arising from or related to these Terms or the Services shall first be
            attempted to be resolved through good-faith negotiation between the parties.
          </p>
          <p>
            If a resolution cannot be reached within 30 days of written notice, the dispute shall be
            subject to the exclusive jurisdiction of the courts located in Kangra, Himachal Pradesh,
            India.
          </p>
        </section>

        {/* 13 */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-gray-900">
            13. Changes to These Terms
          </h2>
          <p>
            We reserve the right to update these Terms at any time. Changes take effect upon posting
            to this page with a revised effective date. Continued use of our website or Services
            after changes are posted constitutes your acceptance of the updated Terms. We encourage
            you to review this page periodically.
          </p>
        </section>

        {/* 14 — Contact */}
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-3 text-xl font-semibold text-gray-900">14. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms or wish to discuss a specific engagement,
            please get in touch:
          </p>
          <ul className="space-y-1">
            <li>
              <span className="font-medium text-gray-800">Company:</span> Net-Crux IT Services
            </li>
            <li>
              <span className="font-medium text-gray-800">Email:</span>{" "}
              <a
                href="mailto:netcruxx@gmail.com"
                className="text-accent underline underline-offset-2 transition-opacity hover:opacity-75"
              >
                netcruxx@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium text-gray-800">Address:</span>{" "}
              <a
                href="https://maps.app.goo.gl/7KiRCSvrgjRBCL8BA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 transition-opacity hover:opacity-75"
              >
                Dharamshala.co, RCC Building, Civil Lines, Jawahar Nagar, Dharamshala, Himachal Pradesh 176215
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
