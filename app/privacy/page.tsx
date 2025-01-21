import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Taoist Culture and Metaphysical Arts",
  description: "Our commitment to protecting your privacy and personal information while using our Taoist culture and metaphysical arts services.",
  keywords: "privacy policy, data protection, user privacy, personal information, Taoist services",
};

export default function PrivacyPage() {
  return (
    <div className="container max-w-4xl py-12">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <ShieldCheckIcon className="mx-auto h-16 w-16 text-primary" />
        <h1 className="mt-4 text-4xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
        </p>
      </div>

      {/* Main Content */}
      <div className="space-y-8">
        {/* Introduction */}
        <section className="rounded-lg border p-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p className="mt-4 text-muted-foreground">
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this privacy policy carefully. By continuing to use our services, you acknowledge that you have read and understood this policy.
          </p>
        </section>

        {/* Information We Collect */}
        <section>
          <h2 className="text-2xl font-semibold">Information We Collect</h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p><strong>Personal Information:</strong> Name, email address, phone number, and birth details (if provided for astrological services).</p>
            <p><strong>Usage Data:</strong> Browser type, IP address, device information, and interaction with our website.</p>
            <p><strong>Consultation Information:</strong> Records of consultations, questions asked, and services requested.</p>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section>
          <h2 className="text-2xl font-semibold">How We Use Your Information</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section>
          <h2 className="text-2xl font-semibold">Data Protection</h2>
          <p className="mt-4 text-muted-foreground">
            We implement appropriate technical and organizational security measures to protect your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        {/* Your Rights */}
        <section>
          <h2 className="text-2xl font-semibold">Your Rights</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-muted-foreground">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to our use of your data</li>
            <li>Data portability</li>
          </ul>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact us at:{" "}
            <a href="mailto:privacy@daoistculture.com" className="text-primary hover:underline">
              privacy@daoistculture.com
            </a>
          </p>
        </section>

        {/* Last Updated */}
        <section className="mt-8 text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </section>
      </div>
    </div>
  );
} 