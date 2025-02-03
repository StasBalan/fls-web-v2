import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";
import { lazy, Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";

import styles from "./Home.module.scss";
import "./Home.scss";

const WidgetExamples = lazy(() => import("./components/WidgetExpamples.tsx"));

export function Home() {
  return (
    <div className={styles.wrapper}>
      <PageHeader />
      <div className={styles.container}>
        <section className={styles.content}>
          <div className={styles.texts}>
            <h1 className="text-center text-4xl font-bold lg:text-5xl text-balance">
              Enhance your stream with
              <br />
              <span className="text-[#FF5500]">FACEIT</span> CS2 statistics
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
            <Suspense fallback={<></>}>
              <WidgetExamples />
            </Suspense>
          </div>
        </section>

        <PageFooter />
      </div>
    </div>
  );
}
