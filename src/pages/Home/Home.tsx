import { Button } from "@/components/ui/button";
import styles from "./Home.module.scss";
import { WidgetExamples } from "./components";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { Logo } from "@/assets/Logo";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link to="/" className={styles.logoContainer}>
            <Logo className={styles.logo} />
            <span className="text-[#FF5500]">FACEIT</span> Live Stats
          </Link>
          <div>
            <Button asChild>
              <Link to="/widget-builder">Build Widget</Link>
            </Button>
          </div>
        </header>

        <section className={styles.content}>
          <div className={styles.texts}>
            <h1 className="text-center text-4xl font-bold lg:text-5xl text-balance">
              Enhance your stream with
              <br />
              <span className="text-[#FF5500]">FACEIT</span> statistics
            </h1>
            <p
              className={clsx(
                styles.description,
                "text-center text-lg fill-mode-backwards lg:text-2xl text-balance"
              )}
            >
              Dynamic customizable widgets for OBS
              <br /> and other studio software.
            </p>
            <Button asChild className="mt-4">
              <Link to="/widget-builder">Build Widget</Link>
            </Button>
          </div>

          <div>
            <WidgetExamples />
          </div>
        </section>

        <footer className={styles.footer}>
          <div>
            FaceitLiveStats is developed independently and is not officially
            endorsed by or affiliated with FACEIT.
          </div>
          <div>© 2025 FaceitLiveStats</div>
        </footer>
      </div>
    </div>
  );
}
