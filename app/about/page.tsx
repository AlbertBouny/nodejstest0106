import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Taoist Wisdom & Metaphysical Arts",
  description: "Learn about our mission to bridge traditional Taoist wisdom with modern understanding, our team of experts, and our commitment to preserving and sharing authentic Chinese metaphysical arts.",
  keywords: "Taoist wisdom, Chinese metaphysics, about us, expert team, traditional knowledge, modern interpretation",
};

export default function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
        <p className="max-w-[900px] text-muted-foreground">
          Bridging ancient wisdom with modern understanding to help you navigate life's journey
        </p>
      </div>

      {/* Mission Section */}
      <section className="mt-16" id="mission">
        <h2 className="text-3xl font-bold">Our Mission</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Our mission is to make the profound wisdom of Taoist metaphysical arts accessible to a global audience while preserving its authenticity and depth. We strive to bridge the gap between traditional Chinese wisdom and contemporary understanding.
            </p>
            <p className="text-muted-foreground">
              Through careful interpretation and modern presentation, we aim to help individuals worldwide benefit from these time-tested practices while maintaining respect for their cultural origins.
            </p>
          </div>
          <div className="relative h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/images/culture/mission.jpg"
              alt="Traditional Taoist temple representing our connection to ancient wisdom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Our Values</h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Authenticity</h3>
            <p className="text-muted-foreground">
              We maintain the integrity of traditional teachings while making them accessible to modern practitioners.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Respect</h3>
            <p className="text-muted-foreground">
              We honor the cultural heritage and spiritual depth of Taoist practices and Chinese metaphysical arts.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Excellence</h3>
            <p className="text-muted-foreground">
              We strive for the highest standards in our interpretations, consultations, and educational materials.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Team Section */}
      <section className="mt-16" id="experts">
        <h2 className="text-3xl font-bold">Our Experts</h2>
        <div className="mt-6 space-y-4">
          <p className="text-muted-foreground">
            Our team consists of experienced practitioners and scholars who have dedicated their lives to studying and practicing traditional Chinese metaphysical arts. Each expert brings decades of experience and a deep understanding of both traditional practices and modern applications.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4">
              <div className="relative h-[200px] overflow-hidden rounded-lg">
                <Image
                  src="/images/culture/expert1.jpg"
                  alt="Expert in Ba Zi and Zi Wei Dou Shu"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Master Chen</h3>
                <p className="text-sm text-muted-foreground">Ba Zi & Zi Wei Dou Shu Expert</p>
              </div>
            </div>
            {/* Add more expert profiles as needed */}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold">Our Commitment</h2>
        <div className="mt-6 space-y-4">
          <p className="text-muted-foreground">
            We are committed to providing accurate, ethical, and practical guidance while maintaining the highest standards of professional integrity. Our goal is to help you understand and apply these ancient wisdom traditions in ways that are meaningful and beneficial to your modern life.
          </p>
          <p className="text-muted-foreground">
            Through continuous learning and adaptation, we ensure that our services remain relevant while staying true to the core principles of traditional Chinese metaphysical arts.
          </p>
        </div>
      </section>
    </div>
  );
} 