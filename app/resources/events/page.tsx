import { Button } from "@/components/ui/button";
import {
  AcademicCapIcon,
  BookOpenIcon,
  CalendarIcon,
  GlobeAltIcon,
  MapPinIcon,
  UserGroupIcon,
  VideoCameraIcon
} from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cultural Events | Taoist Cultural Activities and Workshops",
  description: "Join our Taoist cultural events, workshops, and online sessions to deepen your understanding of Taoist wisdom and practices.",
  keywords: "Taoist events, cultural workshops, meditation sessions, Qi Gong classes, Taoist ceremonies, online workshops",
};

// Add event categories
const eventCategories = [
  {
    icon: GlobeAltIcon,
    title: "Cultural Ceremonies",
    count: "Monthly",
    description: "Traditional Taoist ceremonies and rituals"
  },
  {
    icon: AcademicCapIcon,
    title: "Workshops",
    count: "Weekly",
    description: "Hands-on learning experiences"
  },
  {
    icon: BookOpenIcon,
    title: "Study Groups",
    count: "Bi-weekly",
    description: "Deep discussions on Taoist texts"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to Taoist Meditation",
    type: "Online Workshop",
    date: "2024-03-15",
    time: "10:00 AM - 12:00 PM EST",
    description: "Learn fundamental Taoist meditation techniques for inner peace and spiritual growth.",
    instructor: "Master Chen",
    image: "/images/events/meditation-workshop.jpg"
  },
  {
    id: 2,
    title: "Qi Gong for Health & Vitality",
    type: "In-Person Workshop",
    date: "2024-03-20",
    time: "2:00 PM - 4:00 PM EST",
    location: "Central Park, New York",
    description: "Experience the healing benefits of Qi Gong exercises led by experienced practitioners.",
    instructor: "Dr. Sarah Wong",
    image: "/images/events/qigong-class.jpg"
  },
  {
    id: 3,
    title: "Understanding Ba Zi Charts",
    type: "Online Seminar",
    date: "2024-03-25",
    time: "7:00 PM - 9:00 PM EST",
    description: "Discover how to interpret Ba Zi charts and understand their influence on life paths.",
    instructor: "Master Liu",
    image: "/images/events/bazi-seminar.jpg"
  },
  {
    id: 4,
    title: "Taoist Philosophy Study Group",
    type: "Online Discussion",
    date: "2024-03-30",
    time: "7:00 PM - 8:30 PM EST",
    description: "Join our monthly study group exploring key concepts from classical Taoist texts.",
    instructor: "Dr. Michael Chen",
    image: "/images/events/study-group.jpg"
  },
  {
    id: 5,
    title: "Traditional Tea Ceremony",
    type: "Cultural Event",
    date: "2024-04-05",
    time: "3:00 PM - 5:00 PM EST",
    location: "Taoist Cultural Center",
    description: "Experience the mindfulness and beauty of traditional Chinese tea ceremony.",
    instructor: "Master Zhang",
    image: "/images/events/tea-ceremony-new.jpg"
  }
];

const pastEvents = [
  {
    id: 1,
    title: "Taoist Tea Ceremony",
    type: "Cultural Workshop",
    date: "2024-02-15",
    description: "A traditional tea ceremony exploring mindfulness and presence.",
    image: "/images/events/tea-ceremony.jpg"
  },
  {
    id: 2,
    title: "Feng Shui Basics",
    type: "Online Workshop",
    date: "2024-02-10",
    description: "Introduction to fundamental Feng Shui principles for home and office.",
    image: "/images/events/fengshui-workshop.jpg"
  },
  {
    id: 3,
    title: "Taoist Philosophy Discussion",
    type: "Online Seminar",
    date: "2024-02-05",
    description: "Exploring key concepts from the Tao Te Ching and their modern applications.",
    image: "/images/events/philosophy-discussion.jpg"
  }
];

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Enhanced Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Taoist Cultural Events</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Immerse yourself in the richness of Taoist culture through our carefully curated events and workshops
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            View Calendar
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Subscribe to Updates
          </Button>
        </div>
      </section>

      {/* Event Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Event Types</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {eventCategories.map((category, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm hover:shadow-md transition-shadow">
              <category.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-primary mb-2">{category.count}</p>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Upcoming Events */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            View All Events
          </Button>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4 hover:bg-primary/20 transition-colors">
                  {event.type}
                </div>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{event.date} | {event.time}</span>
                  </div>
                  {event.location && (
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>Instructor: {event.instructor}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Online Learning Section */}
      <section className="mb-16">
        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Learn From Anywhere</h2>
              <p className="text-muted-foreground mb-6">
                Access our comprehensive library of recorded workshops, online courses, and study materials
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <VideoCameraIcon className="h-5 w-5 text-primary" />
                  <span>Live streaming sessions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <BookOpenIcon className="h-5 w-5 text-primary" />
                  <span>Downloadable resources</span>
                </div>
                <div className="flex items-center space-x-2">
                  <UserGroupIcon className="h-5 w-5 text-primary" />
                  <span>Interactive community</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/resources/library">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Explore Online Learning
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 w-full md:w-1/2 rounded-lg overflow-hidden">
              <Image
                src="/images/events/online-learning.jpg"
                alt="Online Learning"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Signup */}
      <section className="text-center bg-primary/5 rounded-lg p-12">
        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for event updates, cultural insights, and exclusive content
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/newsletter">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe Now
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 