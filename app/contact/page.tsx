import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Taoist Wisdom & Metaphysical Arts",
  description: "Get in touch with our team of experts for consultations, questions, or support regarding Chinese metaphysical arts and Taoist practices.",
  keywords: "contact us, consultation booking, support, Chinese metaphysics, Taoist practices",
};

export default function ContactPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
        <p className="max-w-[900px] text-muted-foreground">
          We're here to help you on your journey of discovery and understanding
        </p>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-2 text-muted-foreground">
              Have questions about our services or need personalized guidance? Our team is here to help.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="mt-1 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">contact@daoistculture.com</p>
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <PhoneIcon className="mt-1 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
                <p className="text-sm text-muted-foreground">Mon-Fri 9:00-17:00 EST</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPinIcon className="mt-1 h-6 w-6" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">Online Consultations Available Worldwide</p>
                <p className="text-sm text-muted-foreground">In-person sessions available in select locations</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Consultation Hours</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Monday - Friday: 9:00 AM - 5:00 PM EST</p>
              <p>Saturday: 10:00 AM - 2:00 PM EST</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="How can we help?"
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              placeholder="Your message"
              className="h-32"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
} 