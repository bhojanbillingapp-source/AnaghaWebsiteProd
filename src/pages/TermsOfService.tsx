const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Terms of Service
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
            {/* Agreement to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and ANAGHA SOFTECH PRIVATE LIMITED ("we," "us" or "our"), concerning your access to and use of our website and services. You agree that by accessing the website and services, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the site and services and you must discontinue use immediately.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                ANAGHA SOFTECH PRIVATE LIMITED provides HR and workforce solutions, including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Talent Acquisition & Staffing services</li>
                <li>Recruitment Process Outsourcing (RPO)</li>
                <li>Training & Skill Development programs</li>
                <li>HR Consultancy services</li>
                <li>AI-powered workforce solutions</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
              </p>
            </div>

            {/* User Representations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Representations</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                By using our services, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>All registration information you submit will be true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update it as necessary</li>
                <li>You have the legal capacity and agree to comply with these Terms of Service</li>
                <li>You are at least 18 years of age</li>
                <li>You will not access the services through automated or non-human means</li>
                <li>You will not use the services for any illegal or unauthorized purpose</li>
                <li>Your use of the services will not violate any applicable law or regulation</li>
              </ul>
            </div>

            {/* Prohibited Activities */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                You may not access or use the services for any purpose other than that for which we make the services available. The services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Systematically retrieving data or content to create a collection or database</li>
                <li>Making unauthorized use of the services</li>
                <li>Using the services to advertise or offer to sell goods and services</li>
                <li>Circumventing or disabling any security features of the services</li>
                <li>Engaging in unauthorized framing of or linking to the services</li>
                <li>Interfering with or disrupting the services</li>
                <li>Attempting to impersonate another user or person</li>
                <li>Uploading or transmitting viruses, malware, or any other malicious code</li>
                <li>Harassing, annoying, intimidating, or threatening any of our employees or agents</li>
                <li>Copying or adapting the services' software</li>
              </ul>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unless otherwise indicated, the services and all content, features, and functionality are owned by ANAGHA SOFTECH PRIVATE LIMITED and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any of our intellectual property without our express written permission.
              </p>
            </div>

            {/* User Data and Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Data and Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We will maintain certain data that you transmit to the services for the purpose of managing the performance of the services, as well as data relating to your use of the services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption. Please refer to our Privacy Policy for information about how we collect, use, and disclose your personal data.
              </p>
            </div>

            {/* Client Obligations */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Client Obligations</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                When engaging our services, clients agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>Provide accurate and complete information regarding job requirements and organizational needs</li>
                <li>Respond promptly to candidate submissions and interview requests</li>
                <li>Comply with all applicable employment laws and regulations</li>
                <li>Maintain confidentiality of candidate information shared by ANAGHA SOFTECH PRIVATE LIMITED</li>
                <li>Pay agreed-upon fees in a timely manner according to our payment terms</li>
                <li>Provide feedback on candidates and services to help improve our offerings</li>
              </ul>
            </div>

            {/* Fees and Payment */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Fees and Payment</h2>
              <p className="text-muted-foreground leading-relaxed">
                Fees for our services will be outlined in individual service agreements. Payment terms will be specified in your contract with ANAGHA SOFTECH PRIVATE LIMITED. Late payments may be subject to interest charges and may result in suspension of services. All fees are non-refundable unless otherwise specified in your service agreement.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event will ANAGHA SOFTECH PRIVATE LIMITED or its directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the services, even if we have been advised of the possibility of such damages. To the maximum extent permitted by law, our total liability to you for all claims arising out of or related to these terms or the services shall not exceed the amount paid by you to ANAGHA SOFTECH PRIVATE LIMITED in the twelve (12) months preceding the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) your use of the services; (2) breach of these Terms of Service; (3) any breach of your representations and warranties; (4) your violation of the rights of a third party; or (5) any harmful acts toward any other user of the services with whom you connected via the services.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service. Upon termination, your right to use the services will immediately cease. All provisions of the Terms of Service which by their nature should survive termination shall survive termination.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service and your use of the services are governed by and construed in accordance with the laws applicable in our jurisdiction, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms of Service will be brought exclusively in the courts located in our jurisdiction.
              </p>
            </div>

            {/* Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed">
                Any dispute arising from these Terms of Service shall first be attempted to be resolved through good faith negotiations between the parties. If negotiations fail, disputes may be resolved through binding arbitration in accordance with the rules of a recognized arbitration association.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms of Service at any time. We will provide notice of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date. Your continued use of the services after any such changes constitutes your acceptance of the new Terms of Service.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms of Service is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-card p-8 rounded-xl border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="text-muted-foreground space-y-2">
                <p><strong>Email:</strong> legal@anaghasoft.ai</p>
                <p><strong>Address:</strong> Plot no 84 & 85 part, H- No:1-4-190/84 & 85 part, Kamakshi  Nilayam, Bhasker Rao Nagar Colony, Phase-3, Hyderabad-500094</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
