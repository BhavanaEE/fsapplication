import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav>
        <img />
        <Link href="/" passHref>
          Home
        </Link>
        <Link href="/about-us" passHref>
          About Us
        </Link>
        <Link href="/events" passHref>
          Events
        </Link>
      </nav>
    </header>
  );
};
