// src/global.d.ts

declare module '*.cast' {
  const src: string;
  export default src;
}

declare module 'asciinema-player' {
  export interface AsciinemaOptions {
    cols?: number;
    rows?: number;
    autoPlay?: boolean;
    loop?: boolean | number;
    idleTimeLimit?: number;
    theme?: string;
    poster?: string;
    fit?: 'none' | 'contain' | 'cover';
    controls?: boolean | 'auto';
    markers?: [number, string][];
    [key: string]: any;
  }

  export interface AsciinemaPlayerInstance {
    dispose: () => void;
    play: () => void;
    pause: () => void;
    seek: (location: number | string) => void;
  }

  export function create(
    src: string,
    element: HTMLElement,
    opts?: AsciinemaOptions
  ): AsciinemaPlayerInstance;
}
