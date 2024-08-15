import Image from "next/image";
import styles from "./page.module.css";
import { GameBackgroundGroundContainer } from "@/components/GameBackGroundContainer";

const borderScr = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmUExURTq+QS1bQymXUC7KXFDrbCt9SisvNTaQTXyNSDfCWf8oKGrdSzu/WDq6PjKOQZGhUlreZ1jhaDpXQXpdPTh3Ry1+NTq7Pi17NES4VjguNHltQK1mPHxHOD+LSzORTkOJSzyMTDZYQbr8KgYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIJSURBVDhPbVTtYsIgDCwUsKuddTr34b7f/yV3dwnInPejAsnlkhAcgBDHNEZgvI0kW4q50Bv+OcQ0bqY7t98ECcEYISNyjNM8IZabDX92VMmpbJUQcVFYbqygMMYMie1wT0LqazAthsdKKrIlFBHKbtgyJWwURGDcJIIp4EsrCSxiG8BgcNLo5R+F1maaV9UM/wAC3RUdIfaM6DRF1nq/PiCBBL8DGUGpW5YrszcJgBVoiS/tOR+vCH1XAO7qiREeRWCX5E6i4AqEOiYTXHDDrQg6x3h120iFCswIO0iUUk7D0xMkJJCSx6uoxRhDTTqJkCMbW7tU0RKDgQnFgoRE0E3g/GqSLqA3vqGU59MAwq7dnAF991XrG628ZxI4r9qLRKzz2rSsKtlslmy+xWg1Lq7Q3QPtdZb8PST4VwYLxhIzZAfqks9Sew/SlLmhKjESrCgUuRR/D2TUGv7B25oBEPQeKNC6dAsdYcdb6N+PIjbYUiF9lngJetFoQ3VcppfuzlUzGfmVs2TjfZ7PXdXT/NZPlTGQ0jtHg4Rl+jh/kudwBedfZukgAro0Mb4V0dEa6I0vZgn+A4f16+3bzi/+nt6y/pslvgco4EQ+nkZtQDdLKKIS8ub4iSN3Mp4T9lLARjllNEnjbXen+66+5u9r/lAF/62ab16FGONIpgcnfAkdnG+OP7mcfgFSPBrMLulZNAAAAABJRU5ErkJggg==')`;
const mainSrc = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURTq+QWrdSzq7Pjq6PjKOQTq5PuZdsVoAAAAJcEhZcwAADsIAAA7CARUoSoAAAABhSURBVCjPYyAWMKLRyAJMSsKGDAwsDEqKxsIgGiQgApJTUjR0BisCCghDBYyhAs5gGSUVE4gAEUAAzQVYAJNSqCjEHggNFBCFCKiIoglAaaCAqytEAEITCSgNjyHhfQYGAJgEECJ5G9oTAAAAAElFTkSuQmCC')`;

export default function Home() {
  return (
    <main>
      <GameBackgroundGroundContainer
        mainSrc={mainSrc}
        borderSrc={borderScr}
        applyMainToEdges
      >
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/app/page.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore starter templates for Next.js.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </GameBackgroundGroundContainer>
    </main>
  );
}
