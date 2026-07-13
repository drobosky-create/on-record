/**
 * The typographic wordmark — IBM Plex Sans 600, tracked .02em.
 * foil renders the silver-foil gradient (dark surfaces only); otherwise solid ink.
 * @dsCard
 */
export interface WordmarkProps {
  /** "On Record" | "Man on Record" | "Woman on Record" | "The Common Record" */
  edition?: string;
  /** Silver-foil treatment — the only permitted gradient; dark surfaces only */
  foil?: boolean;
  /** Font size in px (default 34) */
  size?: number;
  style?: React.CSSProperties;
}
export declare function Wordmark(props: WordmarkProps): JSX.Element;
