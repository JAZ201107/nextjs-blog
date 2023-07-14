import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Yuyang_Zhang.png"
          alt="An image showing Yuyang"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Yuyang</h1>
      <p>I blog about web development - especially frontend framework </p>
    </section>
  );
}

export default Hero;
