import React, { useEffect, useRef } from 'react';
import 'asciinema-player/dist/bundle/asciinema-player.css';
import type { AsciinemaOptions, AsciinemaPlayerInstance } from 'asciinema-player';

export interface AsciinemaPlayerProps extends AsciinemaOptions {
  src: string;
}

export default function AsciinemaPlayer({ src, ...opts }: AsciinemaPlayerProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: AsciinemaPlayerInstance | undefined;
    
    import('asciinema-player').then((AsciinemaPlayer) => {
      if (ref.current) {
        player = AsciinemaPlayer.create(src, ref.current, opts);
      }
    });

    return () => {
      if (player && typeof player.dispose === 'function') {
        player.dispose();
      }
    };
  }, [src, opts]);

  return <div ref={ref} />;
}
