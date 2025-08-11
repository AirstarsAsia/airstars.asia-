export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Acceptance of Terms</h2>
            <p className="text-slate-600 mb-4">
              By engaging Airstars for IT consultancy services or using our website, you agree to be bound by these 
              Terms of Service. These terms govern all services including network infrastructure design, wireless 
              site surveys, device management, workspace solutions, and ongoing IT support.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Services Provided</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Network and Wireless Services</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Wireless site surveys and RF planning</li>
              <li>Network infrastructure design and implementation</li>
              <li>Security assessments and configuration</li>
              <li>Performance optimization and troubleshooting</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Device Management</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Mac deployment and configuration</li>
              <li>Mobile Device Management (MDM) setup</li>
              <li>Security policy implementation</li>
              <li>Software distribution and updates</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Workspace Solutions</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Google Workspace and Microsoft 365 setup</li>
              <li>User training and workflow optimization</li>
              <li>Integration with existing systems</li>
              <li>Ongoing support and maintenance</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Client Responsibilities</h2>
            <p className="text-slate-600 mb-4">Clients agree to:</p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Provide accurate information about existing infrastructure and requirements</li>
              <li>Grant necessary access to systems and facilities for service delivery</li>
              <li>Maintain current backups of critical data before any system changes</li>
              <li>Follow security recommendations and best practices</li>
              <li>Notify us promptly of any issues or changes affecting our services</li>
              <li>Ensure authorized personnel are available during scheduled work</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Service Limitations and Disclaimers</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Limitations</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Network performance may be affected by factors beyond our control</li>
              <li>Third-party software and hardware compatibility cannot be guaranteed</li>
              <li>Internet connectivity and cloud service availability are not under our control</li>
              <li>Legacy systems may have inherent security and performance limitations</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Availability</h3>
            <p className="text-slate-600 mb-4">
              While we strive for maximum uptime and reliability, we cannot guarantee uninterrupted service. 
              Planned maintenance will be scheduled during agreed maintenance windows with advance notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Payment Terms</h2>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Project fees are due as specified in individual service agreements</li>
              <li>Ongoing support services are billed monthly in advance</li>
              <li>Payment terms are typically 30 days from invoice date</li>
              <li>Late payments may incur interest charges and service suspension</li>
              <li>Disputed charges must be raised within 30 days of invoice date</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Intellectual Property</h2>
            <p className="text-slate-600 mb-4">
              All documentation, configurations, and custom solutions developed during service delivery remain 
              our intellectual property unless specifically transferred under separate agreement. Clients receive 
              a license to use these materials for their business operations.
            </p>
            <p className="text-slate-600 mb-4">
              Client data and existing systems remain the property of the client. We claim no ownership over 
              client information or business processes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Confidentiality</h2>
            <p className="text-slate-600 mb-4">
              We maintain strict confidentiality regarding all client information, network configurations, 
              and business processes. This obligation continues beyond the termination of services.
            </p>
            <p className="text-slate-600 mb-4">
              Clients agree to keep confidential any proprietary methods, tools, or processes we use in 
              service delivery.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
            <p className="text-slate-600 mb-4">
              Our liability is limited to the fees paid for the specific service that gave rise to the claim. 
              We are not liable for indirect, consequential, or punitive damages including but not limited to:
            </p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Business interruption or lost profits</li>
              <li>Data loss or corruption (beyond our direct control)</li>
              <li>Third-party service failures</li>
              <li>Force majeure events</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Service Termination</h2>
            <p className="text-slate-600 mb-4">
              Either party may terminate ongoing services with 30 days written notice. Project-based work 
              continues until completion unless terminated by mutual agreement.
            </p>
            <p className="text-slate-600 mb-4">
              We reserve the right to immediately terminate services for non-payment, breach of terms, 
              or activities that compromise security or legal compliance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Protection and Security</h2>
            <p className="text-slate-600 mb-4">
              We implement appropriate technical and organizational measures to protect client data. 
              However, clients remain responsible for their own data backup and recovery procedures.
            </p>
            <p className="text-slate-600 mb-4">
              Any security incidents will be reported promptly according to applicable regulations 
              and industry best practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Governing Law</h2>
            <p className="text-slate-600 mb-4">
              These terms are governed by the laws of England and Wales. Any disputes will be resolved 
              through binding arbitration or in the courts of England and Wales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Changes to Terms</h2>
            <p className="text-slate-600 mb-4">
              We may update these terms periodically. Existing clients will be notified of material changes 
              with 30 days advance notice. Continued use of services constitutes acceptance of updated terms.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-600 mb-4">
              Questions about these Terms of Service should be directed to:
            </p>
            <div className="text-slate-600 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:hello@airstars.asia" className="text-blue-600 hover:underline">hello@airstars.asia</a></p>
              <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
            </div>
            <p className="text-slate-600 mt-4 text-sm">
              Airstars operates under Shababu Systems Ltd, registered in England and Wales.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}