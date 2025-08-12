const TermsConditions = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-lg text-muted-foreground text-center mb-12">
            Last updated: July 14, 2024
          </p>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By accessing and using Veredian Growth's services, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground">
              Veredian Growth provides educational masterclasses and mentorship services focused on 
              income generation strategies. Our services are educational in nature and designed to 
              provide knowledge and guidance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Important Disclaimers</h2>
            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
              <h3 className="font-bold text-yellow-800 mb-2">No Income Guarantees</h3>
              <p className="text-yellow-700 mb-4">
                We do not guarantee any specific income results. Success depends on individual effort, 
                market conditions, and proper implementation of strategies taught.
              </p>
              
              <h3 className="font-bold text-yellow-800 mb-2">Educational Purpose</h3>
              <p className="text-yellow-700">
                All content is for educational purposes only. We are not financial advisors, and our 
                content should not be considered financial advice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">Users agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate registration information</li>
              <li>Use services for lawful purposes only</li>
              <li>Not share login credentials with others</li>
              <li>Respect intellectual property rights</li>
              <li>Not attempt to reverse engineer or copy our content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Payment for masterclasses is required in advance. We accept payments through secure 
              payment gateways. All prices are in Indian Rupees (INR) unless otherwise specified.
            </p>
            <h3 className="font-bold mb-2">Refund Policy:</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>In any case refund will not be provided</li>
              <li>No refunds for no-shows or failure to attend scheduled sessions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All content, including but not limited to text, graphics, logos, videos, and software, 
              is the property of Veredian Growth and is protected by copyright laws. Users may not 
              reproduce, distribute, or create derivative works without explicit permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Privacy and Data Protection</h2>
            <p className="text-muted-foreground">
              Your privacy is important to us. Please review our Privacy Policy to understand how 
              we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Veredian Growth shall not be liable for any direct, indirect, incidental, special, 
              or consequential damages resulting from the use or inability to use our services, 
              even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Termination</h2>
            <p className="text-muted-foreground">
              We reserve the right to terminate or suspend access to our services immediately, 
              without prior notice, for any reason including breach of these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of India. 
              Any disputes shall be subject to the jurisdiction of courts in Mumbai, Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Users will be notified of 
              any changes, and continued use of services constitutes acceptance of new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these terms, please contact us at:
            </p>
            <div className="bg-muted/50 p-4 rounded-lg mt-4">
              <p className="text-muted-foreground">
                Email: veridiangrowthh@gmail.com<br />
                WhatsApp: +91 9652702916<br />
                Address: Mumbai, Maharashtra, India
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;