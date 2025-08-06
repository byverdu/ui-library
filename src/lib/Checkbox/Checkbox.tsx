import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from '@mui/material';

/**
 * Props for the Checkbox component
 * @public
 */
export type CheckboxProps = MUICheckboxProps;

/**
 * A Checkbox component that extends Material-UI's Checkbox.
 * It includes an aria-label for accessibility.
 *
 * @public
 * @param props - The component props (extends Material-UI CheckboxProps)
 * @returns A React component
 *
 * @example
 * ```tsx
 * <Checkbox checked={checked} onChange={handleChange} />
 * ```
 */
const Checkbox = ({ ...props }: MUICheckboxProps) => (
  <MUICheckbox {...props} inputProps={{ 'aria-label': 'controlled' }} />
);

export default Checkbox;
