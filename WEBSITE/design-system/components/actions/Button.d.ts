/**
 * On Record button. Primary = oxblood fill (hover deepens to maroon);
 * ghost = ink outline (hover inverts). Sharp corners, uppercase, no shadows.
 * @dsCard
 * @startingPoint section="Components" subtitle="Primary + ghost buttons" viewport="700x180"
 */
export interface ButtonProps {
  /** Visual variant */
  variant?: "primary" | "ghost";
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  disabled?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
