import styles from "./page.module.css";
import Player from "./player";

export default function Home() {
  const playerStyle = {
    width: "900px",
  };

  return (
    <main className={styles.main}>
      <div style={playerStyle}>
        <Player
          src="/video/video.mp4"
          subtitles={{
            src: "/video/subtitles.ass",
            type: "ass",
          }}
        ></Player>
      </div>
    </main>
  );
}
