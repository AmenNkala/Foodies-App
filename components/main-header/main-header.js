import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import imgLogo from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={imgLogo} alt='Logo' priority />
          Next Level Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href='#'>Browse Meals</Link>
            </li>
            <li>
              <Link href='#'>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
