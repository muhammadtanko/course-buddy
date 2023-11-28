"use client"
import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Divider from '@mui/joy/Divider';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import BallotIcon from '@mui/icons-material/Ballot';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import { AspectRatio } from '@mui/joy';
import Stack from '@mui/joy/Stack';
import { io } from "socket.io-client";
import StartModal from "./(components)/modal"

function Nodes() {

const socket = io("http://localhost:4000/controller", {
  reconnectionDelayMax: 10000,
});
React.useEffect(() => {
  
  socket.on('connect', () => {
    console.log('Connected to server');})

}, [])

  return (
    <Box>
      <Header />
      <Stack
        direction="row"
        flexWrap="wrap"
        spacing={2}
      >
        <NestedCard />
        <NestedCard />
        <NestedCard />
        <NestedCard />
        <NestedCard />
        <NestedCard />
        <NestedCard />


      </Stack>
    </Box>
  )
}

export default Nodes



function NestedCard() {
  return (
    <Card sx={{ borderRadius: 0, width: 200, maxWidth: '100%' }}>
      {/* <CardContent>
        <Typography level="body-xs">IN DESIGN</Typography>
      </CardContent> */}
      <Card
        orientation="horizontal"
        size="sm"
        sx={{ bgcolor: 'background.surface', borderRadius: 0, mb: 1 }}
      >
        <CardOverflow>
          <AspectRatio
            ratio="1"
            sx={{ minWidth: 70, '& img[data-first-child]': { p: 1.5 } }}
          >
            <img src="https://uilogos.co/img/logomark/lighting.png" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="title-md">Sub project</Typography>
          <Typography level="body-sm">Online 17 days</Typography>
        </CardContent>
      </Card>
      <CardOverflow
        variant="soft"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          justifyContent: 'space-around',
          py: 1,
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography startDecorator={<BallotIcon color="danger" />} level="title-sm">
          13
        </Typography>
        {/* <StartModal/> */}
        <Divider orientation="vertical" />
        <Typography startDecorator={<CommentOutlinedIcon />} level="title-sm">
          9
        </Typography>
        <Divider orientation="vertical" />
        <Typography startDecorator={<InboxOutlinedIcon />} level="title-sm">
          32
        </Typography>
      </CardOverflow>
    </Card>
  );
}

import { ColorPaletteProp } from '@mui/joy/styles';
import Badge from '@mui/joy/Badge';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Dropdown from '@mui/joy/Dropdown';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import ListDivider from '@mui/joy/ListDivider';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Sheet from '@mui/joy/Sheet';
import Chip from '@mui/joy/Chip';
import AddIcon from '@mui/icons-material/Add';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ColorLensRoundedIcon from '@mui/icons-material/ColorLensRounded';

function Header() {
  const [color, setColor] = React.useState<ColorPaletteProp>('primary');
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexGrow: 1,
        p: 2,
        borderRadius: { xs: 0, sm: 'sm' },
        minWidth: 'min-content',
        ...(color !== 'warning' && {
          background: (theme) =>
            `linear-gradient(to top, ${theme.vars.palette[color][600]}, ${theme.vars.palette[color][500]})`,
        }),
      }}
    >
      <IconButton
        variant="soft"
        size="sm"
        onClick={() => {
          const colors: ColorPaletteProp[] = [
            'primary',
            'neutral',
            'danger',
            'success',
            'warning',
          ];
          const nextColorIndex = colors.indexOf(color) + 1;
          setColor(colors[nextColorIndex] ?? colors[0]);
        }}
      >
        <ColorLensRoundedIcon fontSize="small" />
      </IconButton>
      <Box sx={{ flex: 1, display: 'flex', gap: 1, px: 2 }}>
        <Dropdown>
          <MenuButton
            sx={{
              '--Button-radius': '1.5rem',
            }}
            variant="outlined"
            endDecorator={<KeyboardArrowDownIcon />}
          >
            Main
          </MenuButton>
          <Menu
            variant="outlined"
            placement="bottom-start"
            disablePortal
            size="sm"
            sx={{
              '--ListItemDecorator-size': '24px',
              '--ListItem-minHeight': '40px',
              '--ListDivider-gap': '4px',
              minWidth: 200,
            }}
          >
            <MenuItem>
              <ListItemDecorator>
                <BubbleChartIcon />
              </ListItemDecorator>
              Products
            </MenuItem>
            <ListDivider />
            <MenuItem>Pricing</MenuItem>
            <MenuItem>
              Case studies{' '}
              <Chip
                variant="outlined"
                size="sm"
                sx={{
                  ml: 'auto',
                  bgcolor: (theme) =>
                    `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`,
                }}
              >
                Beta
              </Chip>
            </MenuItem>
          </Menu>
        </Dropdown>
      </Box>
      <Box sx={{ display: 'flex', flexShrink: 0, gap: 2 }}>
        <Button
          startDecorator={<AddIcon />}
          sx={{ display: { xs: 'none', md: 'inline-flex' } }}
        >
          New invoice
        </Button>
        <Input
          placeholder="Search"
          variant="soft"
          size="sm"
          endDecorator={
            <Typography
              component="span"
              variant="outlined"
              level="body-xs"
              sx={{ bgcolor: 'background.surface', mx: 0 }}
            >
              ⌘K
            </Typography>
          }
          sx={{
            '--Input-paddingInline': '12px',
            width: 160,
            display: { xs: 'none', lg: 'flex' },
          }}
        />
        <Badge badgeContent={2} variant="solid" color="danger">
          <IconButton variant="soft" sx={{ borderRadius: '50%' }}>
            <NotificationsIcon />
          </IconButton>
        </Badge>
      </Box>
    </Sheet>
  );
}

