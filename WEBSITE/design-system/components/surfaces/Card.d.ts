/**
 * Flat surface card — paper (#E7E0D2 on bone) or ink (#141414).
 * 1px hairline border, 24px padding, no shadow, no rounding.
 * @dsCard
 * @startingPoint section="Components" subtitle="Paper + ink flat cards" viewport="700x220"
 */
export interface CardProps {
  variant?: "paper" | "ink";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
