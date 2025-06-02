import {
  Checkbox as MUICheckbox,
  CheckboxProps as MUICheckboxProps,
} from '@mui/material';

export type CheckboxProps = MUICheckboxProps;

const Checkbox = ({ ...props }: MUICheckboxProps) => (
  <MUICheckbox {...props} inputProps={{ 'aria-label': 'controlled' }} />
);

export default Checkbox;
