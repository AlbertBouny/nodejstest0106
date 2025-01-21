import { BellAlertIcon, DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Taoist Wisdom & Metaphysical Arts",
  description: "Read our terms of service to understand the conditions of using our website and services, including consultations, online tools, and educational content.",
  keywords: "terms of service, user agreement, legal terms, service conditions, privacy policy",
};

const sections = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    icon: DocumentTextIcon,
    content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services."
  },
  {
    id: "services",
    title: "2. Service Description",
    icon: ShieldCheckIcon,
    content: "We provide various services related to Taoist practices and Chinese metaphysical arts, including educational content, online consultations, digital tools, and resources about Chinese metaphysical arts."
  },
  {
    id: "obligations",
    title: "3. User Obligations",
    icon: ScaleIcon,
    content: "Users must provide accurate information, use services lawfully, respect intellectual property rights, and maintain account confidentiality."
  },
  {
    id: "updates",
    title: "4. Changes to Terms",
    icon: BellAlertIcon,
    content: "We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on the site."
  }
];

export default function TermsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Terms of Service</h1>
        <p className="max-w-[900px] text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {/* Introduction */}
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            Welcome to Taoist Wisdom & Metaphysical Arts. By accessing our website and using our services, you agree to these terms and conditions. Please read them carefully before proceeding.
          </p>
        </section>

        {/* Main Sections */}
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <section key={section.id} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <p className="mt-4 text-muted-foreground">{section.content}</p>
              </section>
            );
          })}
        </div>

        {/* Additional Terms */}
        <div className="space-y-8 rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <section>
            <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
            <p className="mt-4 text-muted-foreground">
              All content on this website, including text, graphics, logos, and software, is the property of Taoist Wisdom & Metaphysical Arts and is protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Privacy Policy</h2>
            <p className="mt-4 text-muted-foreground">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p className="mt-4 text-muted-foreground">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>
        </div>

        {/* Contact Information */}
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about these Terms, please contact us at{" "}
            <a href="mailto:contact@daoistculture.com" className="text-primary hover:underline">
              contact@daoistculture.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 