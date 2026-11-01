const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ANAGHA SOFTECH PRIVATE LIMITED ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground leading-relaxed mb-2">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Register on the website</li>
                    <li>Express an interest in obtaining information about us or our services</li>
                    <li>Participate in activities on the website</li>
                    <li>Contact us via email, phone, or contact forms</li>
                    <li>Apply for employment opportunities</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-2">
                    The personal information we collect may include: name, email address, phone number, company name, job title, resume/CV, and any other information you choose to provide.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may automatically collect certain information when you visit, use, or navigate the website. This information may include: IP address, browser type, operating system, referring URLs, pages viewed, and time spent on pages.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We use the information we collect or receive to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our services</li>
                <li>Communicate with you about our services, including customer support</li>
                <li>Process your transactions and manage your requests</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Analyze usage patterns and optimize user experience</li>
                <li>Prevent fraudulent transactions and protect against criminal activity</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Disclosure of Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                We may share information we have collected about you in certain situations:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf</li>
                <li><strong>Business Partners:</strong> We may share your information with our business partners to offer you certain products or services</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, sale, or acquisition</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%. Any transmission of personal information is at your own risk.
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
            </div>

            {/* Your Privacy Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to processing of your personal information</li>
                <li>The right to request restriction of processing</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use cookies and similar tracking technologies to collect and track information about your activity on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </div>

            {/* Third-Party Websites */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Third-Party Websites</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to read the privacy policies of any third-party sites you visit.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us.
              </p>
            </div>

            {/* Changes to This Policy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Us */}
            <div className="bg-gradient-card p-8 rounded-xl border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Email:</strong> privacy@anaghasoft.ai</p>
                <p><strong>Address:</strong> Plot no 84 & 85 part, H- No:1-4-190/84 & 85 part, Kamakshi  Nilayam, Bhasker Rao Nagar Colony, Phase-3, Hyderabad-500094</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
