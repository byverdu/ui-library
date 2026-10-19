import { Box } from '@mui/material';

export type LayoutProps = {
  /**
   * Grid areas names.
   *
   * @default "nav head" "nav  main"
   */
  gridTemplateAreas?: string;
  /**
   * Grid rows template.
   *
   * @default ${appBarHeight}px auto
   */
  gridTemplateRows?: string;
  /**
   * Grid columns template. With the default values, the sidebar will always
   * take the needed width and the main content will auto adjust it's width
   *
   * @default 'minmax(0, auto) minmax(0, 1fr)'
   */
  gridTemplateColumns?: string;
  /**
   * Elements that will be placed in the Grid "head" and "nav" Areas.
   *
   * @default undefined
   */
  headNavArea?: JSX.Element;
  /**
   * Elements that will be placed in the Grid "main" Area.
   *
   * @default undefined
   */
  mainArea?: JSX.Element;
  /**
   * Elements that will be placed in the Grid "foot" Area.
   *
   * @default undefined
   */
  footArea?: JSX.Element;
  /**
   * Height (in px) reserved for the fixed AppBar spacer row. When no AppBar is
   * rendered, pass `0` to collapse the row and push the content up. Ignored when
   * `gridTemplateRows` is provided explicitly.
   *
   * @default APP_BAR_HEIGHT
   */
  appBarHeight?: number;
};

const defaultGridTemplateAreas = `"nav head" "nav  main"`;
const defaultGridTemplateColumns = 'minmax(0, auto) minmax(0, 1fr)';

/**
 * Component used to define how the main elements of the application will be placed. The component uses CSS grid specification.
 *
 * @property {string} gridTemplateAreas - Grid areas names.
 * @property {string} gridTemplateRows - Grid rows set up.
 * @property {string} gridTemplateColumns - Grid columns set up.
 * @property {JSX.Element} headNavArea - Component for the head-nav area
 * @property {JSX.Element} mainArea - Component for the main area
 * @property {JSX.Element} footArea - Component for the foot area
 *
 */
const Layout = ({
  headNavArea,
  mainArea,
  footArea,
  gridTemplateAreas = defaultGridTemplateAreas,
  gridTemplateColumns = defaultGridTemplateColumns,
  gridTemplateRows,
  appBarHeight = 48,
}: LayoutProps) => {
  // Use gridTemplateRows if provided, otherwise set based on source
  const templateRows = gridTemplateRows || `${appBarHeight}px auto`;

  return (
    <Box
      sx={{
        display: 'grid',
        height: '100%',
        margin: '0 auto',
        gridTemplateAreas,
        gridTemplateRows: templateRows,
        gridTemplateColumns,
      }}
    >
      {headNavArea}
      {mainArea}
      {footArea}
    </Box>
  );
};

export default Layout;
