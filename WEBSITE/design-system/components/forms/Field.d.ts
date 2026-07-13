/**
 * Ruled write-in field — hairline underline only (the book's ruled line),
 * mono uppercase label, focus rule turns oxblood. No boxes, no fills.
 * @dsCard
 * @startingPoint section="Components" subtitle="Ruled underline input" viewport="700x200"
 */
export interface FieldProps {
  /** Uppercase mono label above the rule */
  label?: string;
  /** Render a textarea instead of an input */
  multiline?: boolean;
  /** For use on ink surfaces */
  dark?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;
