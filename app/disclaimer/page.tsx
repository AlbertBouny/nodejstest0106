import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Taoist Wisdom & Metaphysical Arts",
  description: "Important disclaimers regarding the use of our services, consultations, and metaphysical arts practices.",
  keywords: "disclaimer, legal notice, service limitations, metaphysical arts disclaimer",
};

const disclaimerPoints = [
  {
    title: "Educational Purpose",
    content: "Our content and services are provided for educational and informational purposes only. They are not intended to substitute for professional advice in any field."
  },
  {
    title: "No Guarantees",
    content: "While we strive for accuracy and authenticity in our interpretations and guidance, we cannot guarantee specific outcomes or results from using our services."
  },
  {
    title: "Personal Responsibility",
    content: "Users are responsible for their own decisions and actions. We encourage critical thinking and personal judgment in applying any guidance received."
  },
  {
    title: "Cultural Context",
    content: "Our interpretations of Taoist practices and Chinese metaphysical arts are adapted for modern understanding while respecting traditional wisdom."
  }
];

export default function DisclaimerPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className="rounded-full bg-warning/10 p-3">
          <ExclamationTriangleIcon className="h-8 w-8 text-warning" />
        </div>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Disclaimer</h1>
        <p className="max-w-[900px] text-muted-foreground">
          Important information about the nature and limitations of our services
        </p>
      </div>

      <div className="mt-16 space-y-12">
        {/* Introduction */}
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <p className="text-muted-foreground">
            Please read this disclaimer carefully before using our website or services. By accessing and using our platform, you acknowledge and agree to the following terms and limitations.
          </p>
        </section>

        {/* Main Points */}
        <div className="grid gap-6 md:grid-cols-2">
          {disclaimerPoints.map((point, index) => (
            <section key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
              <h2 className="text-xl font-semibold">{point.title}</h2>
              <p className="mt-4 text-muted-foreground">{point.content}</p>
            </section>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-8">
          {/* Medical Disclaimer */}
          <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold">Medical Disclaimer</h2>
            <p className="mt-4 text-muted-foreground">
              The information provided on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </section>

          {/* Financial Disclaimer */}
          <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold">Financial Disclaimer</h2>
            <p className="mt-4 text-muted-foreground">
              Our services should not be considered financial advice. Any decisions related to financial matters should be made in consultation with qualified financial advisors.
            </p>
          </section>

          {/* Professional Advice */}
          <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold">Professional Advice</h2>
            <p className="mt-4 text-muted-foreground">
              While our experts are knowledgeable in traditional Chinese metaphysical arts, their guidance should be considered complementary to, not a replacement for, professional services in fields such as healthcare, psychology, law, or finance.
            </p>
          </section>

          {/* Accuracy of Information */}
          <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
            <h2 className="text-2xl font-bold">Accuracy of Information</h2>
            <p className="mt-4 text-muted-foreground">
              We make every effort to ensure the accuracy of our content and interpretations. However, we cannot guarantee that all information is complete, current, or error-free. Users should verify critical information from multiple sources.
            </p>
          </section>
        </div>

        {/* Final Note */}
        <section className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
          <h2 className="text-2xl font-bold">Questions or Concerns</h2>
          <p className="mt-4 text-muted-foreground">
            If you have any questions about this disclaimer, please contact us at{" "}
            <a href="mailto:contact@daoistculture.com" className="text-primary hover:underline">
              contact@daoistculture.com
            </a>
            . We are committed to maintaining transparency and addressing any concerns you may have about our services.
          </p>
        </section>
      </div>
    </div>
  );
} 