import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Person, Recipe } from "schema-dts";
import { JsonLd, jsonLdScriptProps } from "react-schemaorg";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          {...jsonLdScriptProps<Recipe>({
            "@context": "https://schema.org",
            "@type": "Recipe",
            name: "Non-alcoholic Pina Colada",
            image: [
              "https://example.com/photos/1x1/photo.jpg",
              "https://example.com/photos/4x3/photo.jpg",
              "https://example.com/photos/16x9/photo.jpg",
            ],
            author: {
              "@type": "Person",
              name: "Mary Stone",
            },
            datePublished: "2018-03-10",
            description:
              "This non-alcoholic pina colada is everyone's favorite!",
            recipeCuisine: "American",
            prepTime: "PT1M",
            cookTime: "PT2M",
            totalTime: "PT3M",
            keywords: "non-alcoholic",
            recipeYield: "1 serving",
            recipeCategory: "Drink",
            nutrition: {
              "@type": "NutritionInformation",
              calories: "120 calories",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "18",
            },
            recipeIngredient: [
              "2 cups of pineapple juice",
              "5/8 cup cream of coconut",
              "ice",
            ],
            recipeInstructions: [
              {
                "@type": "HowToStep",
                text: "Blend 2 cups of pineapple juice and 5/8 cup cream of coconut until smooth.",
              },
              {
                "@type": "HowToStep",
                text: "Fill a glass with ice.",
              },
              {
                "@type": "HowToStep",
                text: "Pour the pineapple juice and coconut mixture over ice.",
              },
            ],
            video: {
              "@type": "VideoObject",
              name: "How to make a Party Coffee Cake",
              description: "This is how you make a Party Coffee Cake.",
              thumbnailUrl: [
                "https://example.com/photos/1x1/photo.jpg",
                "https://example.com/photos/4x3/photo.jpg",
                "https://example.com/photos/16x9/photo.jpg",
              ],
              contentUrl: "http://www.example.com/video123.mp4",
              embedUrl: "http://www.example.com/videoplayer?video=123",
              uploadDate: "2018-02-05T08:00:00+08:00",
              duration: "PT1M33S",
              interactionStatistic: {
                "@type": "InteractionCounter",
                interactionType: { "@type": "WatchAction" },
                userInteractionCount: 2347,
              },
              expires: "2019-02-05T08:00:00+08:00",
            },
          })}
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
