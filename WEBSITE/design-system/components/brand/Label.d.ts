/**
 * Uppercase mono label / ledger counter — 12px IBM Plex Mono, tracked .12em.
 * The administrative voice: eyebrows, counters ("Day 001 / 090"), field labels.
 * @dsCard
 */
export interface LabelProps {
  /** Silver (for ink surfaces) instead of muted */
  dark?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Label(props: LabelProps): JSX.Element;
