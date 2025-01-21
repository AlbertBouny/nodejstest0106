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
    <div className="container py-8 sm:py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="mb-12 sm:mb-16 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-muted-foreground">
          Bridging ancient wisdom with modern understanding
        </p>
      </div>

      {/* Mission Section */}
      <section id="mission" className="mb-12 sm:mb-16 scroll-mt-16">
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Our Mission</h2>
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground">
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
          <div className="relative h-[200px] sm:h-[300px] overflow-hidden rounded-lg">
            <Image
              src="/images/about/mission.jpg"
              alt="Traditional Taoist temple representing our mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Values</h2>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-8 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="rounded-lg border p-4 sm:p-6">
                <Icon className="h-8 w-8 sm:h-12 sm:w-12 text-primary" />
                <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expert Team Section */}
      <section id="experts" className="scroll-mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Expert Team</h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
          Meet our dedicated practitioners who bring decades of experience and deep understanding of Taoist arts.
        </p>
        <div className="mt-6 sm:mt-8 grid gap-4 sm:gap-8 md:grid-cols-3">
          {experts.map((expert) => (
            <div key={expert.name} className="rounded-lg border p-4 sm:p-6">
              <div className="relative mb-3 sm:mb-4 h-[150px] sm:h-[200px] overflow-hidden rounded-lg">
                <Image
                  src={expert.image}
                  alt={expert.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold">{expert.name}</h3>
              <p className="text-sm sm:text-base text-primary">{expert.title}</p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
                {expert.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="mt-12 sm:mt-16 rounded-lg bg-muted p-4 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-bold">Our Commitment</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
          We are dedicated to providing authentic guidance while maintaining the highest standards of professionalism and ethical practice. Our commitment is to help you discover practical applications of Taoist wisdom in your modern life.
        </p>
      </section>
    </div>
  );
} 