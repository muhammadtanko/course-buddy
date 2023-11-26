// "use client"
// import * as React from 'react';
// import { ColorPaletteProp } from '@mui/joy/styles';
// import Badge from '@mui/joy/Badge';
// import Box from '@mui/joy/Box';
// import IconButton from '@mui/joy/IconButton';
// import Sheet from '@mui/joy/Sheet';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MenuIcon from '@mui/icons-material/Menu';
// import {toggleSidebar} from "../utils"

// export default function Header() {
//   const [color, setColor] = React.useState<ColorPaletteProp>('primary');
//   return (
//     <Sheet
//       variant="solid"
//       color={color}
//       invertedColors
      
//       sx={{
    
//         flexGrow: 1,
//         borderRadius: { xs: 0, sm: 'sm' },
//         minWidth: 'min-content',
//         ...(color !== 'warning' && {
//           background: (theme) =>
//             `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
//         }),
//         display: { xs: 'flex', md: 'none' },
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         position: 'fixed',
//         top: 0,
//         width: '100vw',
//         height: 'var(--Header-height)',
//         zIndex: 9995,
//         p: 2,
//         gap: 1,
//         borderBottom: '1px solid',
//         borderColor: 'background.level1',
//         boxShadow: 'sm',
//       }}
      
//     >
//       <IconButton
//         onClick={() => toggleSidebar()}
//         variant="outlined"
//         color="neutral"
//         size="sm"
//       >
//         <MenuIcon />
//       </IconButton>
//       <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>

//       </Box>
//       <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>

//         <Badge badgeContent={2} variant="solid" color="danger">
//           <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
//             <NotificationsIcon />
//           </IconButton>
//         </Badge>
//       </Box>
//     </Sheet>
//   );
// }
import * as React from 'react';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { toggleSidebar } from '../utils';

export default function Header() {
  return (
    <Sheet
      sx={{
        display: { xs: 'flex', md: 'none' },
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100vw',
        height: 'var(--Header-height)',
        zIndex: 9995,
        p: 2,
        gap: 1,
        borderBottom: '1px solid',
        borderColor: 'background.level1',
        boxShadow: 'sm',
        bgcolor:"red"
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton
        onClick={() => toggleSidebar()}
        variant="outlined"
        color="neutral"
        size="sm"
      >
        <MenuIcon />
      </IconButton>
    </Sheet>
  );
}

