import styles from "./page.module.css";
import Player from "./player";

export default function Home() {
  const playerStyle = {
    "maxWidth": "900px",
  };

  return (
    <main className={styles.main}>
      <div style={playerStyle}>
        <Player
          src="/video/video.mp4"
          subtitles={{
            src: "/video/subtitles.ass",
            type: "ass",
            fonts: {
              "ANGIE-BOLD": "/fonts/1_ANGIE-BOLD.woff2",
              3381: "/fonts/3381-font.ttf",
              9537: "/fonts/9537.otf",
            },
          }}
        ></Player>
      </div>
    </main>
  );
}
