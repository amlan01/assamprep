import React from 'react';

export const metadata = {
  title: 'Terms of Service | AssamPrep',
  description: 'Terms of Service and usage guidelines for the AssamPrep platform.',
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Last Updated:</strong> {new Date().toLocaleDateString('en-IN')}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">1. Acceptance of Terms</h2>
            <p>By accessing and using AssamPrep (the "Platform"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use the Platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">2. Description of Service</h2>
            <p>AssamPrep provides an online testing and analytics platform designed to help aspirants prepare for various Assam Government examinations, including but not limited to APSC CCE, ADRE, and Assam Police recruitment exams. We do not guarantee success in any examination.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">3. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You must provide accurate, complete, and current information when creating an account.</li>
              <li>You are responsible for safeguarding the password that you use to access the Platform.</li>
              <li>Account sharing is strictly prohibited. If we detect that multiple individuals are using a single account, we reserve the right to suspend or terminate the account without a refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">4. Intellectual Property</h2>
            <p>All content present on the Platform, including mock test questions, study materials, graphics, logos, and software, is the property of AssamPrep or its content creators and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without explicit permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">5. Payments, Subscriptions, and Refunds</h2>
            <p>Certain features and test series on AssamPrep are available under paid subscription plans.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>All payments must be made through our authorized payment gateways.</li>
              <li>Subscriptions are non-transferable.</li>
              <li>Refund requests will only be considered strictly in accordance with our separate Refund Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">6. User Conduct</h2>
            <p>You agree not to use the Platform to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Attempt to scrape, reverse engineer, or exploit the platform's test engine.</li>
              <li>Upload or transmit any malicious code or viruses.</li>
              <li>Post false, misleading, or defamatory content in community forums (if applicable).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">7. Limitation of Liability</h2>
            <p>AssamPrep shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Platform.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">Contact Information</h2>
            <p>For any questions regarding these Terms, please contact us at <strong>legal@assamprep.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
