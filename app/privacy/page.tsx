export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-600 mb-4">
              Airstars is committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, and protect information when you use our IT consultancy 
              services, including network infrastructure, device management, and workspace solutions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Personal Information</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Contact details (name, email, phone number, business address)</li>
              <li>Business information (company name, role, industry)</li>
              <li>Communication preferences and service requirements</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Technical Information</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Network configuration data during site surveys and assessments</li>
              <li>Device inventory and management information</li>
              <li>System logs and performance metrics (when providing ongoing support)</li>
              <li>Workspace configuration details (Google Workspace, Microsoft 365)</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Website Usage Data</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>IP address, browser type, and device information</li>
              <li>Pages visited and time spent on our website</li>
              <li>Referral sources and search terms used</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Your Information</h2>
            
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Service Delivery</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Conducting wireless site surveys and network assessments</li>
              <li>Configuring and managing IT infrastructure and devices</li>
              <li>Providing ongoing technical support and maintenance</li>
              <li>Implementing security policies and monitoring systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Communication</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Responding to service inquiries and support requests</li>
              <li>Providing project updates and technical recommendations</li>
              <li>Sending service-related notifications and security alerts</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-800 mb-3">Business Operations</h3>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Maintaining accurate client records and service history</li>
              <li>Improving our services based on client feedback</li>
              <li>Ensuring compliance with industry standards and regulations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Protection and Security</h2>
            <p className="text-slate-600 mb-4">
              We implement industry-standard security measures to protect your information:
            </p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Encrypted data transmission and storage</li>
              <li>Access controls and authentication systems</li>
              <li>Regular security assessments and updates</li>
              <li>Secure disposal of data when no longer needed</li>
              <li>Staff training on data protection best practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Sharing and Third Parties</h2>
            <p className="text-slate-600 mb-4">
              We do not sell or rent your personal information. We may share information only in these circumstances:
            </p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>With your explicit consent for specific service requirements</li>
              <li>With trusted technology partners when necessary for service delivery</li>
              <li>When required by law or to protect our legal rights</li>
              <li>In connection with a business transfer or acquisition</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Retention</h2>
            <p className="text-slate-600 mb-4">
              We retain your information for as long as necessary to provide services and comply with legal obligations:
            </p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Active client data: Duration of service relationship plus 7 years</li>
              <li>Technical documentation: 3 years after project completion</li>
              <li>Communication records: 2 years from last contact</li>
              <li>Website analytics: 26 months maximum</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Your Rights</h2>
            <p className="text-slate-600 mb-4">You have the right to:</p>
            <ul className="text-slate-600 mb-4 list-disc list-inside space-y-2">
              <li>Access your personal information we hold</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Cookies and Tracking</h2>
            <p className="text-slate-600 mb-4">
              Our website uses essential cookies for functionality and analytics cookies to improve user experience. 
              You can control cookie preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Updates to This Policy</h2>
            <p className="text-slate-600 mb-4">
              We may update this Privacy Policy periodically. We will notify you of significant changes via email 
              or website notice. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-600 mb-4">
              For questions about this Privacy Policy or to exercise your rights, contact us at:
            </p>
            <div className="text-slate-600 space-y-2">
              <p><strong>Email:</strong> <a href="mailto:hello@airstars.asia" className="text-blue-600 hover:underline">hello@airstars.asia</a></p>
              <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
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