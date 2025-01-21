import { HeartIcon, SparklesIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Taoist Culture and Metaphysical Arts",
  description: "Learn about our mission to share authentic Taoist wisdom and meet our expert practitioners dedicated to guiding you on your spiritual journey.",
  keywords: "about us, Taoist experts, mission statement, spiritual guidance, Chinese metaphysics",
};

const experts = [
  {
    name: "Master Chen Wei",
    title: "Senior Feng Shui Consultant",
    image: "/images/experts/master-chen.jpg",
    description: "30+ years of experience in classical Feng Shui and Ba Zi analysis.",
  },
  {
    name: "Dr. Sarah Wong",
    title: "Metaphysical Arts Specialist",
    image: "/images/experts/dr-wong.jpg",
    description: "Ph.D. in Chinese Philosophy with expertise in Zi Wei Dou Shu.",
  },
  {
    name: "Master Liu Ming",
    title: "Traditional Taoist Practitioner",
    image: "/images/experts/master-liu.jpg",
    description: "Lifelong dedication to preserving and teaching authentic Taoist practices.",
  },
];

const values = [
  {
    icon: SparklesIcon,
    title: "Authenticity",
    description: "We maintain the integrity of traditional Taoist teachings while making them accessible to modern practitioners.",
  },
  {
    icon: HeartIcon,
    title: "Compassion",
    description: "We approach every consultation with empathy and understanding, recognizing each person's unique journey.",
  },
  {
    icon: UserGroupIcon,
    title: "Community",
    description: "We foster a supportive community where seekers can learn, grow, and share their experiences.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-8 sm:py-12 px-4 sm:px-6 animate-in">
      {/* Hero Section */}
      <div className="mb-12 sm:mb-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Us
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground">
          Bridging ancient wisdom with modern understanding
        </p>
      </div>

      {/* Mission Section */}
      <section id="mission" className="mb-16 sm:mb-24 scroll-mt-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
              <p>
                Our mission is to bridge the profound wisdom of Taoist traditions with contemporary life, making ancient knowledge accessible and practical for modern seekers.
              </p>
              <p>
                We are committed to preserving and sharing authentic Taoist teachings while helping individuals navigate their personal and spiritual growth through traditional Chinese metaphysical arts.
              </p>
              <p>
                Through education, consultation, and community building, we aim to create a space where Eastern wisdom can flourish and transform lives in the Western world.
              </p>
            </div>
          </div>
          <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/about/mission.jpg"
              alt="Traditional Taoist temple representing our mission"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-16 sm:mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-xl border bg-card p-6 card-hover gradient-border"
              >
                <Icon className="h-12 w-12 text-primary" />
                <h3 className="mt-4 text-xl font-bold">{value.title}</h3>
                <p className="mt-2 text-base text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expert Team Section */}
      <section id="experts" className="scroll-mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Expert Team</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Meet our dedicated practitioners who bring decades of experience and deep understanding of Taoist arts.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {experts.map((expert) => (
            <div
              key={expert.name}
              className="rounded-xl border bg-card p-6 card-hover gradient-border"
            >
              <div className="relative mb-4 h-[250px] overflow-hidden rounded-lg">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold">{expert.name}</h3>
              <p className="text-primary font-medium">{expert.title}</p>
              <p className="mt-2 text-muted-foreground">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="mt-16 sm:mt-24">
        <div className="rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Commitment</h2>
          <p className="text-lg text-muted-foreground">
            We are dedicated to providing authentic guidance while maintaining the highest standards of professionalism and ethical practice. Our commitment is to help you discover practical applications of Taoist wisdom in your modern life.
          </p>
        </div>
      </section>
    </div>
  );
} 