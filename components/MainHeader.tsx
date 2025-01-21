import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <Link
      href="/"
      className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
      title="Return to Homepage"
    >
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <Image
          alt="TaoismZen Logo"
          src="/logo.svg"
          className="dark:invert"
          fill
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-medium tracking-tight">
          Taoist Wisdom
        </span>
        <span className="text-xs sm:text-sm text-muted-foreground">
          探索道家智慧
        </span>
      </div>
    </Link>
  );
}
