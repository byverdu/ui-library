import { Box } from '@mui/material';
import { useState } from 'react';

type NodeData = { id: number; text: string; children: NodeData[] };

export type BranchNodeProps = {
  node: NodeData;
  level: number;
};

const BranchNode = ({ node, level }: BranchNodeProps) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children.length > 0;

  return (
    <Box data-testid={`node-${node.id}`} sx={{ pl: level === 1 ? 0 : 3 }}>
      <Box
        onClick={hasChildren ? () => setOpen((prev) => !prev) : undefined}
        sx={{
          p: 1,
          mb: 0.5,
          border: '1px solid',
          borderColor: 'divider',
          cursor: hasChildren ? 'pointer' : 'default',
        }}
      >
        {hasChildren ? (open ? '▼ ' : '▶ ') : '• '}
        {node.text}
        {hasChildren && ` (${node.children.length})`}
      </Box>
      {/* The recursion: each child renders the same component */}
      {open &&
        node.children.map((child) => (
          <BranchNode key={child.id} node={child} level={level + 1} />
        ))}
    </Box>
  );
};

/**
 @example
 {
   id: 1,
   text: 'BCN',
   children: [
     {
       id: 2,
       text: 'CAT',
       children: [{ id: 3, text: 'MAD', children: [] }],
     },
     {
       id: 4,
       text: 'SEV',
       children: [{ id: 5, text: 'GER', children: [] }],
     },
   ],
 };
 */

const TreeView = ({ data }: { data: NodeData }) => (
  <BranchNode
    node={data} level={1}
  />
);

export default TreeView
