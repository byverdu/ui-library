import {
  IconButtonProps as MUIBtnProps,
  IconButton as MuiIcon,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

/**
 * Props for the IconButton component
 * @public
 */
export type IconButtonProps = MUIBtnProps & {
  /** Callback function when the button is clicked */
  onClick: () => void;
};

/**
 * An IconButton component that extends Material-UI's IconButton.
 * Currently displays a delete icon by default.
 *
 * @public
 * @param props - The component props
 * @param props.onClick - Callback function when the button is clicked
 * @returns A React component
 *
 * @example
 * ```tsx
 * <IconButton onClick={() => console.log('clicked')} />
 * ```
 */
const IconButton = (props: IconButtonProps) => {
  return (
    <MuiIcon {...props}>
      <DeleteIcon />
    </MuiIcon>
  );
};

export default IconButton;
