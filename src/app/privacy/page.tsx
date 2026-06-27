import React from 'react';

export const metadata = {
  title: 'Privacy Policy | AssamPrep',
  description: 'Privacy Policy and data collection practices for AssamPrep users.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p><strong>Effective Date:</strong> {new Date().toLocaleDateString('en-IN')}</p>
          
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">1. Information We Collect</h2>
            <p>At AssamPrep, we collect information that helps us provide you with a personalized and effective exam preparation experience. This includes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and demographic information provided during registration.</li>
              <li><strong>Exam Data:</strong> Your target exams (e.g., APSC, ADRE), mock test scores, time taken per question, and overall performance metrics.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, and usage patterns on our platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">2. How We Use Your Information</h2>
            <p>We use the collected data strictly for educational and platform enhancement purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>To provide, maintain, and improve our mock test platform and analytics engine.</li>
              <li>To personalize your study recommendations based on your weak and strong areas.</li>
              <li>To communicate with you regarding platform updates, new test series, and promotional offers.</li>
              <li>To generate aggregated, non-personally identifiable statistics regarding exam trends in Assam.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">3. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information and exam performance data from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">4. Third-Party Services</h2>
            <p>We may employ third-party companies and individuals to facilitate our platform (e.g., payment gateways, analytics providers like Google Analytics). These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">5. Your Rights</h2>
            <p>You have the right to access, update, or delete your personal information at any time through your account settings. You may also opt-out of promotional communications by following the unsubscribe instructions included in those emails.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">6. Changes to This Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3 mt-8">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <strong>privacy@assamprep.com</strong>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
