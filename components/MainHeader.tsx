import Image from "next/image";
import Link from "next/link";

export default function MainHeader() {
  return (
    <Link href="/" className="flex space-x-3">
      <Image
        alt="TaoismZen Logo"
        src="/logo.svg"
        className="sm:w-12 sm:h-12 w-8 h-8 dark:invert"
        width={32}
        height={32}
      />
      <span className="sm:text-4xl text-2xl ml-2 tracking-tight font-extralight flex items-center">
        TaoismZen
      </span>
    </Link>
  );
}
