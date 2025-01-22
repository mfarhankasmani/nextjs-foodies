import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "../main-header-background";
import NavLink from "./nav-link";

export default function MainHeaders() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt={"A plate with food on it"} priority />
          Amazing Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <NavLink href="/meals">Browse Meals</NavLink>
            <NavLink href="/community">Foodies Community</NavLink>
          </ul>
        </nav>
      </header>
    </>
  );
}
