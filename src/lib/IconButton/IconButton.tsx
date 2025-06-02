import {
  IconButtonProps as MUIBtnProps,
  IconButton as MuiIcon,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export type IconButtonProps = MUIBtnProps & {
  onClick: () => void;
};

const IconButton = (props: IconButtonProps) => {
  return (
    <MuiIcon {...props}>
      <DeleteIcon />
    </MuiIcon>
  );
};

export default IconButton;
