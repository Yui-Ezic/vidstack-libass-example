"use client";
import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import {
  LibASSTextRenderer,
  MediaPlayer,
  MediaProvider,
  Track,
} from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";
import { useEffect, useRef } from "react";

export default function Player(props) {
  const player = useRef(null);

  useEffect(() => {
    if (player.current) {
      const renderer = new LibASSTextRenderer(() => import("jassub"), {
        blendMode: "wasm",
        workerUrl: "/jassub/jassub-worker.js",
        legacyWorkerUrl: "/jassub/jassub-worker-legacy.js",
      });

      player.current.textRenderers.add(renderer);
    }
  }, []);

  return (
    <MediaPlayer
      ref={player}
      viewType="video"
      title="Sprite Fight"
      src={props.src}
    >
      <MediaProvider style={{ display: "block" }}>
        <Track
          src={props.subtitles.src}
          kind="subtitles"
          type={props.subtitles.type}
          default
        />
      </MediaProvider>
      <DefaultVideoLayout icons={defaultLayoutIcons} />
    </MediaPlayer>
  );
}
